import { useEffect, useState } from "react";
import { MagnifyingGlass } from "phosphor-react";
import { API_URL } from "../../config";

import { Customer } from "../../components/Customer";
import styles from "./styles.module.scss";

interface CustomerItem {
    id_cliente: string | number;
    nome_completo: string;
    cpf_cnpj: string;
}

export function ChooseCustomer() {
    const [customers, setCustomers] = useState<CustomerItem[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>(""); 
    const [filteredCustomers, setFilteredCustomers] = useState<CustomerItem[]>([]);

    useEffect(() => {
        fetch(`${API_URL}/return.clientes.php`)
            .then(response => response.json())
            .then(data => {
                setCustomers(data);
                setFilteredCustomers(data);
            })
            .catch(error => {
                console.error("Erro ao buscar clientes:", error);
            });
    }, []);

    // Função segura para filtrar valores
    const normalize = (value: any) => String(value || "").toLowerCase();

    // Filtrar com botão
    const handleSearch = () => {
        const term = normalize(searchTerm);

        const filtered = customers.filter(customer =>
            normalize(customer.id_cliente).includes(term) ||
            normalize(customer.nome_completo).includes(term) ||
            normalize(customer.cpf_cnpj).includes(term)
        );

        setFilteredCustomers(filtered);
    };

    // Filtrar enquanto digita
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);

        const term = normalize(value);

        const filtered = customers.filter(customer =>
            normalize(customer.id_cliente).includes(term) ||
            normalize(customer.nome_completo).includes(term) ||
            normalize(customer.cpf_cnpj).includes(term)
        );

        setFilteredCustomers(filtered);
    };

    return (
        <div className={styles.principalContent}>
            <div className={styles.tableContent}>
                <div className={styles.tableHeader}>
                    ESCOLHA UM CLIENTE:
                </div>

                <div className={styles.searchCustomer}>
                    <input
                        type="text"
                        placeholder="Pesquise um cliente por seu nome, ID ou CPF"
                        value={searchTerm}
                        onChange={handleInputChange}
                    />

                    <button onClick={handleSearch}>
                        <MagnifyingGlass weight="bold" size={26} />
                    </button>
                </div>

                <div className={styles.dataContent}>
                    <span>ID</span>
                    <span>NOME</span>
                    <span>CPF/CNPJ</span>
                </div>

                <div className={styles.customersData}>
                    {filteredCustomers.map(customer => (
                        <Customer
                            key={customer.id_cliente}
                            id={String(customer.id_cliente)}
                            name={customer.nome_completo}
                            cpf={customer.cpf_cnpj}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}