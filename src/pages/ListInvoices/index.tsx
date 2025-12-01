import { useState } from "react";
import styles from "./styles.module.scss";
import { API_URL } from "../../config";

export function ListInvoices() {
    const [invoiceId, setInvoiceId] = useState("");
    const [customerId, setCustomerId] = useState("");

    const [invoices, setInvoices] = useState([]);

    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();

        if (invoiceId === "" && customerId === "") {
            alert("Informe ID da fatura OU ID do cliente.");
            return;
        }

        const body = {
            id_fatura: invoiceId !== "" ? invoiceId : null,
            id_cliente: customerId !== "" ? customerId : null,
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
            .catch((err) => {
                console.error(err);
                alert("Erro ao buscar faturas.");
            });
    };

    const handlePayment = (id_fatura: number) => {
        if (!confirm("Confirmar baixa desta fatura?")) return;

        fetch(`${API_URL}/dar.baixa.fatura.php`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id_fatura }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    alert("Baixa registrada com sucesso!");

                    setInvoices((prev) =>
                        prev.map((inv) =>
                            inv.id_fatura === id_fatura
                                ? { ...inv, situacao: "Paga" }
                                : inv
                        )
                    );
                } else {
                    alert(data.message);
                }
            });
    };

    return (
        <div className={styles.principalContent}>
            {/* FORMULÁRIO DE BUSCA */}
            <form onSubmit={handleSearch} id="formSearch">
                <h2>BUSCAR FATURAS</h2>

                <fieldset>
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

                <button type="submit">Buscar</button>
            </form>

            {/* LISTAGEM */}
            <div className={styles.listContainer}>
                <h2>FATURAS ENCONTRADAS</h2>

                {invoices.length === 0 && (
                    <p>Nenhuma fatura carregada.</p>
                )}

                {invoices.map((fatura) => (
                    <div key={fatura.id_fatura} className={styles.invoiceCard}>
                        <p><b>ID Fatura:</b> {fatura.id_fatura}</p>
                        <p><b>ID Cliente:</b> {fatura.id_cliente}</p>
                        <p><b>Cliente:</b> {fatura.nome_cliente}</p>
                        <p><b>ID Hidrômetro:</b> {fatura.id_hidrometro}</p>
                        <p><b>Valor:</b> R$ {parseFloat(fatura.valor).toFixed(2)}</p>
                        <p><b>Vencimento:</b> {fatura.vencimento}</p>
                        <p>
                            <b>Situação:</b>{" "}
                            {fatura.situacao === "Paga" ? (
                                <span style={{ color: "green", fontWeight: "bold" }}>Paga</span>
                            ) : (
                                <span style={{ color: "red", fontWeight: "bold" }}>Em aberto</span>
                            )}
                        </p>

                        {fatura.situacao !== "Paga" && (
                            <button
                                className={styles.payButton}
                                onClick={() => handlePayment(fatura.id_fatura)}
                            >
                                Dar baixa
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}