import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { EmployeeData } from "../../components/EmployeeData";
import { MagnifyingGlass } from "phosphor-react";
import { API_URL } from "../../config";

import styles from "./styles.module.scss";

interface EmployeeItem {
    id_funcionario: string;
    nome_completo: string;
    cpf: string;
    telefone: string;
}

export function ShowEmployees() {
    const [employees, setEmployees] = useState<EmployeeItem[]>([]);

    useEffect(() => {
        fetch(`${API_URL}/return.funcionarios.php`)
            .then((response) => response.json())
            .then((data) => {
                setEmployees(data);
            })
            .catch((error) => {
                console.error("Erro ao carregar funcionários:", error);
            });
    }, []);

    return (
        <div className={styles.principalContent}>
            <div className={styles.tableContent}>
                <div className={styles.tableHeader}>
                    FUNCIONÁRIOS CADASTRADOS:
                    <NavLink
                        to="/home/show-employees/register-employee"
                        title="Cadastrar funcionário"
                        style={{ textDecoration: "none" }}
                    >
                        <button>Cadastrar funcionário</button>
                    </NavLink>
                </div>

                <div className={styles.searchCustomer}>
                    <input
                        type="text"
                        placeholder="Pesquise um funcionário por seu nome, ID ou CPF"
                    />
                    <button>
                        <MagnifyingGlass weight="bold" size={26} />
                    </button>
                </div>

                <div className={styles.dataContent}>
                    <span>ID</span>
                    <span>NOME</span>
                    <span>CPF</span>
                    <span>TELEFONE</span>
                    <span></span>
                </div>

                <div className={styles.employeesData}>
                    {employees.map((employee) => (
                        <EmployeeData
                            key={employee.id_funcionario}
                            id={employee.id_funcionario}
                            name={employee.nome_completo}
                            cpf={employee.cpf}
                            phone={employee.telefone}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}