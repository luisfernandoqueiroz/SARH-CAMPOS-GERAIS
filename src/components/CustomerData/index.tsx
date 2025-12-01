import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";
import { PencilSimple } from 'phosphor-react';

interface CustomersDataProps {
    id: string;
    name: string;
    cpf: string;
    phone: string;
}

export function CustomersData({id, name, cpf, phone}: CustomersDataProps) {
    const editCustomerURL = `/home/show-customers/edit-customer/${id}`;

    return (
        <div className={styles.principalContent}>
            <span>{id}</span>
            <span>{name}</span>
            <span>{cpf}</span>
            <span>{phone}</span>
            <NavLink  to={editCustomerURL} title="Editar cliente" style={{textDecoration: 'none'}}> 
                <button>
                    <PencilSimple size={24} weight="bold"/>
                </button>
            </NavLink>
        </div>
    )
}