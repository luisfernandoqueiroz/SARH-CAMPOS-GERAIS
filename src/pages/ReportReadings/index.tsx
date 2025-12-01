import { useState, useEffect } from "react";
import { ModalConfirmation } from "../../components/ModalConfirmation";
import styles from "./styles.module.scss";
import { SuccessModal } from "../../components/SuccessModal";
import { ErrorModal } from "../../components/ErrorModal";
import { API_URL } from "../../config";

export function ReportReadings() {
  const [clientes, setClientes] = useState<any[]>([]);
  const [clienteSelecionado, setClienteSelecionado] = useState<any | null>(null);
  const [hidrometros, setHidrometros] = useState<any[]>([]);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);

  // Carrega os clientes
  useEffect(() => {
    fetch(`${API_URL}/api/get_clients.php`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setClientes(data.data);
        } else {
          console.error("Erro ao buscar clientes:", data.message);
        }
      })
      .catch((error) => console.error("Erro de rede:", error));
  }, []);

  const handleClienteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const clienteId = e.target.value;
    const cliente = clientes.find((c) => c.id_cliente === clienteId);
    setClienteSelecionado(cliente || null);
    setHidrometros(cliente?.hidrometros || []);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConfirmationOpen(true);
  };

  const handleConfirm = () => {
    setIsConfirmationOpen(false);
    // Aqui entrará a lógica real de envio depois
    const isSuccess = Math.random() > 0.3; // simulação

    if (isSuccess) {
      setIsSuccessOpen(true);
    } else {
      setIsErrorOpen(true);
    }
  };

  const handleRetry = () => {
    setIsErrorOpen(false);
    setIsConfirmationOpen(true);
  };

  const closeAllModals = () => {
    setIsConfirmationOpen(false);
    setIsSuccessOpen(false);
    setIsErrorOpen(false);
  };

  return (
    <>
      <form className={styles.mainContainer} onSubmit={handleSubmit}>
        <div className={styles.formHeader}>
          <div className={styles.header}>
            <h2>INFORMAR LEITURAS</h2>
            <p>Leiturista: José Carlos de Almeida - 01</p>
          </div>

          <div className={styles.formContainer}>
            <div>
              <label htmlFor="reading-date">Data da Leitura:</label>
              <input type="date" id="reading-date" required />
            </div>

            <div>
              <label htmlFor="reference-month">Mês de Referência:</label>
              <input type="text" id="reference-month" placeholder="Novembro 2025" required />
            </div>

            <div>
              <label htmlFor="observations">Observações:</label>
              <input type="text" id="observations" placeholder="Não há" />
            </div>
          </div>
        </div>

        <div className={styles.readingsContainer}>
          <div className={styles.readingsList}>
            <label htmlFor="cliente">Selecione o Cliente:</label>
            <select id="cliente" onChange={handleClienteChange} required>
              <option value="">-- Escolha um cliente --</option>
              {clientes.map((cliente) => (
                <option key={cliente.id_cliente} value={cliente.id_cliente}>
                  {cliente.nome_completo}
                </option>
              ))}
            </select>

            {clienteSelecionado && (
              <div className={styles.clientInfo}>
                <h3>Dados do Cliente</h3>
                <p><strong>CPF/CNPJ:</strong> {clienteSelecionado.cpf_cnpj}</p>
                <p><strong>Telefone:</strong> {clienteSelecionado.telefone}</p>
                <p><strong>Cidade:</strong> {clienteSelecionado.cidade}</p>
                <p><strong>Comunidade:</strong> {clienteSelecionado.comunidade}</p>
                <p><strong>Nº da casa:</strong> {clienteSelecionado.n_casa}</p>
                <p><strong>E-mail:</strong> {clienteSelecionado.e_mail || "Não informado"}</p>

                <h3>Hidrômetros</h3>
                {hidrometros.length > 0 ? (
                  hidrometros.map((hidro, index) => (
                    <div key={index} className={styles.hidrometerBox}>
                      <p><strong>ID Hidrômetro:</strong> {hidro.id_hidrometro}</p>
                      <p><strong>Localização:</strong> {hidro.localizacao || "Não informada"}</p>
                      <label htmlFor={`leitura-${hidro.id_hidrometro}`}>
                        Leitura Atual:
                      </label>
                      <input
                        type="number"
                        id={`leitura-${hidro.id_hidrometro}`}
                        placeholder="Digite a leitura atual"
                        required
                      />
                    </div>
                  ))
                ) : (
                  <p>Não foram encontrados hidrômetros para este cliente.</p>
                )}
              </div>
            )}
          </div>

          <button type="submit">Salvar Leitura</button>
        </div>
      </form>

      <ModalConfirmation
        isOpen={isConfirmationOpen}
        onClose={closeAllModals}
        onConfirm={handleConfirm}
      />

      <SuccessModal isOpen={isSuccessOpen} onClose={closeAllModals} />

      <ErrorModal isOpen={isErrorOpen} onClose={closeAllModals} onRetry={handleRetry} />
    </>
  );
}