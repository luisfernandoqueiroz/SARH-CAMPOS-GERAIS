// components/ModalConfirmation.tsx
import styles from "./styles.module.scss";

interface ModalConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function ModalConfirmation({ isOpen, onClose, onConfirm }: ModalConfirmationProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Confirmação de Informações</h2>
        
        <div className={styles.modalText}>
          <p>Antes de prosseguir, confirme atentamente os dados informados.</p>
          <p>Ao clicar em “Confirmar”, você declara que:</p>
          
          <ul>
            <li>Verificou e conferiu os valores digitados para cada hidrômetro.</li>
            <li>Assume total responsabilidade pela correta captação e preenchimento das leituras.</li>
            <li>Está ciente de que os dados enviados gerarão automaticamente as faturas de consumo referentes ao mês de competência.</li>
            <li>Entende que quaisquer erros nas leituras poderão resultar em cobranças incorretas aos clientes, sendo necessário reprocessamento ou ajustes manuais.</li>
            <li>Está comprometido com a integridade e precisão das informações, conforme normas internas do sistema de abastecimento.</li>
          </ul>
          
          <p>
            Importante: Após a confirmação, as leituras não poderão ser editadas diretamente nesta tela. Alterações posteriores deverão ser solicitadas através do setor responsável.
          </p>

          <p>
            Se tiver certeza de que todas as informações estão corretas, clique em Confirmar para concluir o processo.
          </p>
        </div>

        <div className={styles.modalButtons}>
          <button type="button" onClick={onClose} className={styles.cancelButton}>
            Corrigir
          </button>
          <button type="button" onClick={onConfirm} className={styles.confirmButton}>
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}