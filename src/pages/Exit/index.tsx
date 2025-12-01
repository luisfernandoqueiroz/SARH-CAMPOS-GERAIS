import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { API_URL } from "../../config";

export function Exit() {
  const [valor, setValor] = useState("");
  const [dataPagamento, setDataPagamento] = useState("");
  const [mesReferencia, setMesReferencia] = useState("");
  const [manutencao, setManutencao] = useState(false);
  const [descricao, setDescricao] = useState("");

  const [saidas, setSaidas] = useState([]);

  // 🔹 Formatar data YYYY-MM-DD → DD-MM-AAAA
  const formatarData = (dataISO) => {
    if (!dataISO) return "";
    const [ano, mes, dia] = dataISO.split("-");
    return `${dia}-${mes}-${ano}`;
  };

  // 🔹 Carregar todas as saídas
  useEffect(() => {
    fetch(`${API_URL}/listar.saidas.php`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setSaidas(data.saidas);
      })
      .catch(() => console.error("Erro ao carregar saídas"));
  }, []);

  // 🔹 Registrar nova saída
  const handleSubmit = (event) => {
    event.preventDefault();

    const body = {
      valor,
      data_pagamento: dataPagamento,
      mes_referencia: mesReferencia,
      manutencao: manutencao ? 1 : 0,
      descricao,
    };

    fetch(`${API_URL}/registrar.saida.php`, { 
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("Saída registrada com sucesso!");
          setSaidas((prev) => [...prev, data.saida]);
          // Limpar formulário
          setValor("");
          setDataPagamento("");
          setMesReferencia("");
          setManutencao(false);
          setDescricao("");
        } else {
          alert(data.message);
        }
      })
      .catch(() => alert("Erro ao registrar saída."));
  };

  return (
    <div className={styles.principalContent}>

      {/* ⭐ FORMULÁRIO */}
      <form onSubmit={handleSubmit} className={styles.formCenter}>
        <h2 className={styles.greenTitle}>REGISTROS DE SAÍDAS</h2>

        <fieldset className={styles.fieldsetGreen}>
          <legend>Nova Saída</legend>

          <label>
            Valor:
            <input
              type="number"
              step="0.01"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              required
            />
          </label>

          <label>
            Data de Pagamento:
            <input
              type="date"
              value={dataPagamento}
              onChange={(e) => setDataPagamento(e.target.value)}
              required
            />
          </label>

          <label>
            Mês de Referência:
            <input
              type="text"
              value={mesReferencia}
              onChange={(e) => setMesReferencia(e.target.value)}
              required
            />
          </label>

          <label>
            Manutenção:
            <input
              type="checkbox"
              checked={manutencao}
              onChange={(e) => setManutencao(e.target.checked)}
            />
          </label>

          <label>
            Descrição:
            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </label>
        </fieldset>

        <button type="submit" className={styles.btnGreen}>
          Registrar Saída
        </button>
      </form>

      {/* ⭐ TABELA DE SAÍDAS */}
      <div className={styles.listContainer}>
        <h2 className={styles.greenTitle}>SAÍDAS REGISTRADAS</h2>

        {saidas.length === 0 ? (
          <p>Nenhuma saída registrada.</p>
        ) : (
          <table className={styles.tableFaturas}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Valor</th>
                <th>Data Pagamento</th>
                <th>Mês Referência</th>
                <th>Manutenção</th>
                <th>Descrição</th>
              </tr>
            </thead>
            <tbody>
              {saidas.map((saida) => (
                <tr key={saida.id_saida}>
                  <td>{saida.id_saida}</td>
                  <td>R$ {Number(saida.valor).toFixed(2)}</td>
                  <td>{formatarData(saida.data_pagamento)}</td>
                  <td>{saida.mes_referencia}</td>
                  <td>{saida.manutencao === "1" ? "Sim" : "Não"}</td>
                  <td>{saida.descricao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}