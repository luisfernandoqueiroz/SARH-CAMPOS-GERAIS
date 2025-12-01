import styles from "./styles.module.scss";
import { X } from 'phosphor-react'

interface ErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRetry: () => void;
}

export function ErrorModal({ isOpen, onClose, onRetry }: ErrorModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>X</button>

        <div className={styles.errorIcon}>
          <X size={160} color="rgb(219, 124, 0)" weight="bold"/>
          <h2 className={styles.errorTitle}>ERRO AO INFORMAR LEITURA</h2>
        </div>

        <button type="button" onClick={onRetry} className={styles.retryButton}>
          Tentar Novamente
        </button>

        <p className={styles.errorMessage}>
          SE O PROBLEMA PERSISTIR, ENTRE EM CONTATO COM O ADMINISTRADOR
        </p>
      </div>
    </div>
  );
}