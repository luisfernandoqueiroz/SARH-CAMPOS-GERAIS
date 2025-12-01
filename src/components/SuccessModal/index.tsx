import styles from "./styles.module.scss";
import { Check } from 'phosphor-react'

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>X</button>

        <div className={styles.successIcon}>
          <Check size={160} color="rgb(40, 145, 77)" weight="bold"/>
          <h2 className={styles.successTitle}>INFORMAÇÕES SALVAS COM SUCESSO</h2>
        </div>
      </div>
    </div>
  );
}