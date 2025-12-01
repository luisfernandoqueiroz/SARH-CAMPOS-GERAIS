import associacaoLogo from "../../assets/logoAssociacaoBranco.svg";
import styles from "./styles.module.scss";

export function Header() {
    return (
        <header className={styles.content}>
            <img src={associacaoLogo}/>
            <span>
                <strong>SISTEMA DE FORNECIMENTO DE ÁGUA</strong><br/>
                ASSOCIAÇÃO COMUNITÁRIA DOS PEQUENOS PRODUTORES RURAIS DE CAMPOS GERAIS
            </span>
        </header>
    )
}