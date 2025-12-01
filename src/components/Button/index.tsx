import styles from "./styles.module.scss";

interface buttonProps {
    type: string;
    image: string;
}

export function Button({type, image}: buttonProps) {
    return(
        <button className={styles.button}>
            <img src={image} alt="Visualizar clientes"/>
            {type}
        </button>
    )
}