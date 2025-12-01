import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { API_URL } from "../../config";

export function Entry() {
  const [invoiceId, setInvoiceId] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [invoices, setInvoices] = useState([]);

  // 🔹 Formatar data YYYY-MM-DD → DD-MM-AAAA
  const formatarData = (dataISO) => {
    if (!dataISO) return "";
    const [ano, mes, dia] = dataISO.split("-");
    return `${dia}-${mes}-${ano}`;
  };

  // 🔹 Carregar todas as faturas
  useEffect(() => {
    fetch(`${API_URL}/listar.todas.faturas.php`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setInvoices(data.faturas);
      })
      .catch(() => console.error("Erro ao carregar faturas"));
  }, []);

  // 🔹 Buscar faturas
  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();

    if (invoiceId === "" && customerId === "") {
      alert("Informe o ID da fatura ou o ID do cliente.");
      return;
    }

    const body = {
      id_fatura: invoiceId || null,
      id_cliente: customerId || null,
    };

    fetch(`${API_URL}/buscar.faturas.php`, { 
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.success) {
          alert(data.message);
          return;
        }
        setInvoices(data.faturas);
      })
      .catch(() => alert("Erro ao buscar faturas."));
  };

  // 🔹 Dar baixa na fatura
  const handleDarBaixa = (id_fatura) => {
    fetch(`${API_URL}/dar.baixa.fatura.php?id_fatura=${id_fatura}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("Fatura atualizada com sucesso!");
          // Atualiza lista local
          setInvoices((prev) =>
            prev.map((f) =>
              f.id_fatura === id_fatura ? { ...f, situacao_fatura: 1 } : f
            )
          );
        } else {
          alert(data.message);
        }
      })
      .catch(() => alert("Erro ao atualizar fatura."));
  };

  return (
    <div className={styles.principalContent}>

      {/* ⭐ FORMULÁRIO */}
      <form onSubmit={handleSearch} className={styles.formCenter}>
        <h2 className={styles.greenTitle}>BUSCAR FATURAS</h2>

        <fieldset className={styles.fieldsetGreen}>
          <legend>Pesquisar</legend>

          <label htmlFor="invoiceId">
            ID da Fatura:
            <input
              type="number"
              id="invoiceId"
              value={invoiceId}
              onChange={(e) => setInvoiceId(e.target.value)}
            />
          </label>

          <label htmlFor="customerId">
            ID do Cliente:
            <input
              type="number"
              id="customerId"
              value={customerId}
              onChange={(e) => setCustomerId(e.target.value)}
            />
          </label>
        </fieldset>

        <button type="submit" className={styles.btnGreen}>Buscar</button>
      </form>

      {/* ⭐ TABELA */}
      <div className={styles.listContainer}>
        <h2 className={styles.greenTitle}>ESCOLHA UMA FATURA PARA DAR BAIXA/CORRIGIR</h2>

        {invoices.length === 0 ? (
          <p>Nenhuma fatura encontrada.</p>
        ) : (
          <table className={styles.tableFaturas}>
            <thead>
              <tr>
                <th>ID Fatura</th>
                <th>ID Cliente</th>
                <th>Nome do Cliente</th>
                <th>Valor Total</th>
                <th>Vencimento</th>
                <th>Situação</th>
                <th>Ação</th>
              </tr>
            </thead>

            <tbody>
              {invoices.map((fatura) => {
                const situacao = String(fatura.situacao_fatura);

                return (
                  <tr key={fatura.id_fatura}>
                    <td>{fatura.id_fatura}</td>
                    <td>{fatura.id_cliente}</td>
                    <td>{fatura.nome_cliente}</td>
                    <td>R$ {Number(String(fatura.total).replace(",", ".") || 0).toFixed(2)}</td>
                    <td>{formatarData(fatura.vencimento)}</td>
                    <td>{situacao === "1" ? "QUITADO" : "EM ABERTO"}</td>
                    <td>
                      {situacao === "0" ? (
                        <button
                          className={styles.btnBlue}
                          onClick={() => handleDarBaixa(fatura.id_fatura)}
                        >
                          Dar Baixa
                        </button>
                      ) : (
                        <button className={styles.btnGray} disabled>
                          Corrigir
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}