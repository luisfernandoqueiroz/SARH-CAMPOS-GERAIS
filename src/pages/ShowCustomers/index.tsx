import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CustomersData } from "../../components/CustomerData";
import { MagnifyingGlass } from "phosphor-react";
import { API_URL } from "../../config";

import styles from "./styles.module.scss";

interface CustomerItem {
    id_cliente: string;
    nome_completo: string;
    cpf_cnpj: string;
    telefone: string;
}

export function ShowCustomers() {
    const [customers, setCustomers] = useState<CustomerItem[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredCustomers, setFilteredCustomers] = useState<CustomerItem[]>([]);
    const [isLoading, setIsLoading] = useState(true); // novo estado

    useEffect(() => {
        setIsLoading(true);
        fetch(`${API_URL}/return.clientes.php`)
            .then(response => response.json())
            .then(data => {
                setCustomers(data);
                setFilteredCustomers(data);
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setIsLoading(false); // encerra o loading
            });
    }, []);

    const handleSearch = () => {
        const term = searchTerm.toLowerCase();
        const filtered = customers.filter(customer =>
            customer.id_cliente.toLowerCase().includes(term) ||
            customer.nome_completo.toLowerCase().includes(term) ||
            customer.cpf_cnpj.toLowerCase().includes(term)
        );
        setFilteredCustomers(filtered);
    };

    useEffect(() => {
        handleSearch();
    }, [searchTerm, customers]);

    return (
        <div className={styles.principalContent}>
            <div className={styles.tableContent}>
                <div className={styles.tableHeader}>
                    CLIENTES CADASTRADOS:
                    <NavLink to="/home/show-customers/register-customer" title="Cadastrar cliente" style={{ textDecoration: 'none' }}>
                        <button>Cadastrar cliente</button>
                    </NavLink>
                </div>

                <div className={styles.searchCustomer}>
                    <input
                        type="text"
                        placeholder="Pesquise um cliente por seu nome, ID ou CPF"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button onClick={handleSearch}>
                        <MagnifyingGlass weight="bold" size={26} />
                    </button>
                </div>

                <div className={styles.dataContent}>
                    <span>ID</span>
                    <span>NOME</span>
                    <span>CPF/CPNJ</span>
                    <span>TELEFONE</span>
                    <span></span>
                </div>

                <div className={styles.customersData}>
                    {isLoading ? (
                        <div className={styles.spinner}></div>
                    ) : (
                        filteredCustomers.map(customer => (
                            <CustomersData
                                key={customer.id_cliente}
                                id={customer.id_cliente}
                                name={customer.nome_completo}
                                cpf={customer.cpf_cnpj}
                                phone={customer.telefone}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}