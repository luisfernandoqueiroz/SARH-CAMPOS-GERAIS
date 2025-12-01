import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";
import { PencilSimple } from 'phosphor-react';

interface EmployeesDataProps {
    id: string;
    name: string;
    cpf: string;
    phone: string;
}

export function EmployeeData({id, name, cpf, phone}: EmployeesDataProps) {
    const editEmployeeURL = `/home/show-employees/edit-employee/${id}`;

    return (
        <div className={styles.principalContent}>
            <span>{id}</span>
            <span>{name}</span>
            <span>{cpf}</span>
            <span>{phone}</span>
            <NavLink  to={editEmployeeURL} title="Editar funcionário" style={{textDecoration: 'none'}}> 
                <button>
                    <PencilSimple size={24} weight="bold"/>
                </button>
            </NavLink>
        </div>
    )
}