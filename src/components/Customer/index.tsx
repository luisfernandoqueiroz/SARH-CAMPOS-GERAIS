import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

interface CustomerProps {
    id: string;
    name: string;
    cpf: string;
}

export function Customer({id, name, cpf}: CustomerProps) {
    const editCustomerURL = `/home/choose-customer/show-hydrometers/${id}`;

    return (
        <NavLink to={editCustomerURL} title="Hidrometros do cliente" style={{textDecoration: 'none'}} className={styles.navLink}>
            <span>{id}</span>
            <span>{name}</span>
            <span>{cpf}</span>
        </NavLink>
    )
}