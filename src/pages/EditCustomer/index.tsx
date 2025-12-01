import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../config";

import styles from "./styles.module.scss";
import { Circles } from "react-loader-spinner";

interface CustomerProps {
    associado: boolean;
    cidade: string;
    comunidade: string;
    cpf_cnpj: string;
    e_mail: string;
    id_cliente: string;
    n_casa: string;
    nome_completo: string;
    telefone: string;
}

export function EditCustomer() {
    const { id } = useParams();

    const [customer, setCustomer] = useState<CustomerProps>({
        associado: false,
        cidade: "",
        comunidade: "",
        cpf_cnpj: "",
        e_mail: "",
        id_cliente: "",
        n_casa: "",
        nome_completo: "",
        telefone: "",
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        fetch(`${API_URL}/return.cliente.by.id.php?id=${id}`)
            .then((response) => response.json())
            .then((data) => {
                const associadoBoolean = data.associado == 1;

                setCustomer({
                    ...data,
                    associado: associadoBoolean,
                });

                setLoading(false);
            })
            .catch((error) => {
                console.error("Erro ao carregar cliente:", error);
                setLoading(false);
            });
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setCustomer((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleAssociadoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value === "1";

        setCustomer((prevState) => ({
            ...prevState,
            associado: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        fetch(`${API_URL}/update.cliente.php`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id_cliente: customer.id_cliente,
                nome_completo: customer.nome_completo,
                cpf_cnpj: customer.cpf_cnpj,
                telefone: customer.telefone,
                associado: customer.associado ? 1 : 0,
                cidade: customer.cidade,
                n_casa: customer.n_casa,
                comunidade: customer.comunidade,
                e_mail: customer.e_mail,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                alert("Cliente atualizado com sucesso!");
            })
            .catch((error) => {
                console.error("Erro ao atualizar cliente:", error);
                alert("Erro ao atualizar cliente.");
            });
    };

    return (
        <div className={styles.principalContent}>
            {loading ? (
                <div className={styles.loadingContainer}>
                    <Circles height={80} width={80} color="var(--green-500)" />
                </div>
            ) : (
                <form onSubmit={handleSubmit} id="customerForm">
                    <h2>EDITAR INFORMAÇÕES DO CLIENTE: {customer.nome_completo}</h2>

                    <div className={styles.fieldsets}>
                        <fieldset className={styles.dataFieldset}>
                            <legend>Dados</legend>

                            <label>
                                Nome:
                                <input
                                    type="text"
                                    name="nome_completo"
                                    value={customer.nome_completo}
                                    onChange={handleChange}
                                />
                            </label>

                            <label>
                                CPF ou CNPJ:
                                <input
                                    type="text"
                                    name="cpf_cnpj"
                                    value={customer.cpf_cnpj}
                                    onChange={handleChange}
                                />
                            </label>

                            <label>
                                Telefone:
                                <input
                                    type="tel"
                                    name="telefone"
                                    value={customer.telefone}
                                    onChange={handleChange}
                                />
                            </label>

                            <label>
                                E-mail:
                                <input
                                    type="email"
                                    name="e_mail"
                                    value={customer.e_mail}
                                    onChange={handleChange}
                                />
                            </label>

                            <div className={styles.associateCustomerLabels}>
                                <span>O cliente é associado?</span>

                                <label>
                                    <input
                                        type="radio"
                                        name="associado"
                                        value="1"
                                        checked={customer.associado === true}
                                        onChange={handleAssociadoChange}
                                    />
                                    Sim
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        name="associado"
                                        value="0"
                                        checked={customer.associado === false}
                                        onChange={handleAssociadoChange}
                                    />
                                    Não
                                </label>
                            </div>
                        </fieldset>

                        <fieldset className={styles.addressFieldset}>
                            <legend>Endereço</legend>

                            <label>
                                Cidade/UF:
                                <input
                                    type="text"
                                    name="cidade"
                                    value={customer.cidade}
                                    onChange={handleChange}
                                />
                            </label>

                            <label>
                                Número do endereço:
                                <input
                                    type="text"
                                    name="n_casa"
                                    value={customer.n_casa}
                                    maxLength={10}
                                    onChange={handleChange}
                                />
                            </label>

                            <label>
                                Comunidade:
                                <input
                                    type="text"
                                    name="comunidade"
                                    value={customer.comunidade}
                                    onChange={handleChange}
                                />
                            </label>
                        </fieldset>
                    </div>

                    <button type="submit">Salvar</button>
                </form>
            )}
        </div>
    );
}