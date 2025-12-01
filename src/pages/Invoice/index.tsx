import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { API_URL } from "../../config";

export function Invoice() {
    const [invoiceId, setInvoiceId] = useState("");
    const [customerId, setCustomerId] = useState("");

    const [invoices, setInvoices] = useState([]);

    // 🔹 Função para formatar data YYYY-MM-DD → DD-MM-AAAA
    const formatarData = (dataISO) => {
        if (!dataISO) return "";
        const [ano, mes, dia] = dataISO.split("-");
        return `${dia}-${mes}-${ano}`;
    };

    // 🔹 Carregar TODAS as faturas ao abrir
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
            alert("Informe ID da fatura OU ID do cliente.");
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

    // 🔹 Baixar PDF
    const handleDownload = (id_fatura: number) => {
        window.open(
            `${API_URL}/fatura.php?id_fatura=${id_fatura}`,
            "_blank"
        );
    };

    // 🔹 Badge de situação
    const getStatusBadge = (fatura: any) => {
        const situacao = String(fatura.situacao_fatura);
        const venc = new Date(fatura.vencimento);
        const hoje = new Date();

        if (situacao === "1") {
            return <span className={styles.badgeGreen}>QUITADO</span>;
        }

        if (situacao === "0") {
            if (venc < hoje) {
                return <span className={styles.badgeRed}>EM ATRASO</span>;
            } else {
                return <span className={styles.badgeYellow}>EM ABERTO</span>;
            }
        }

        return <span>-</span>;
    };

    return (
        <div className={styles.principalContent}>

            {/* ⭐ FORMULÁRIO */}
            <form onSubmit={handleSearch} id="formSearch" className={styles.formCenter}>
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
                <h2 className={styles.greenTitle}>LISTA DE TODAS AS FATURAS</h2>

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
                                <th>Opções</th>
                            </tr>
                        </thead>

                        <tbody>
                            {invoices.map((fatura) => (
                                <tr key={fatura.id_fatura}>
                                    <td>{fatura.id_fatura}</td>
                                    <td>{fatura.id_cliente}</td>
                                    <td>{fatura.nome_cliente}</td>

                                    {/* Corrigido para evitar R$ NaN */}
                                    <td>
                                        R$ {Number(String(fatura.total).replace(",", ".") || 0).toFixed(2)}
                                    </td>

                                    {/* ✔ DATA FORMATADA DD-MM-AAAA */}
                                    <td>{formatarData(fatura.vencimento)}</td>

                                    <td>{getStatusBadge(fatura)}</td>

                                    <td>
                                        <button
                                            className={styles.btnBlue}
                                            onClick={() => handleDownload(fatura.id_fatura)}
                                        >
                                            VER
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}