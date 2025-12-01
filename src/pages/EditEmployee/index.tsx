import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../config";

import styles from "./styles.module.scss";
import { Circles } from "react-loader-spinner";

interface EmployeeProps {
    associado: boolean;
    cidade_uf: string;
    comunidade: string;
    cpf: string;
    gmail: string;
    id_funcionario: string;
    n_casa: string;
    nome_completo: string;
    telefone: string;
}

export function EditEmployee() {
    const { id } = useParams();

    const [employee, setEmployee] = useState<EmployeeProps>({
        associado: false,
        cidade_uf: "",
        comunidade: "",
        cpf: "",
        gmail: "",
        id_funcionario: "",
        n_casa: "",
        nome_completo: "",
        telefone: "",
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        fetch(`${API_URL}/return.employee.by.id.php?id=${id}`)
            .then((response) => response.json())
            .then((data) => {
                const associadoBoolean = data.associado == 1;

                setEmployee({
                    ...data,
                    associado: associadoBoolean,
                });

                setLoading(false);
            })
            .catch((error) => {
                console.error("Erro ao carregar funcionário:", error);
                setLoading(false);
            });
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setEmployee((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleAssociadoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value === "1";

        setEmployee((prevState) => ({
            ...prevState,
            associado: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        fetch(`${API_URL}/update.employee.php`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id_funcionario: employee.id_funcionario,
                nome_completo: employee.nome_completo,
                cpf: employee.cpf,
                telefone: employee.telefone,
                gmail: employee.gmail,
                associado: employee.associado ? 1 : 0,
                cidade_uf: employee.cidade_uf,
                n_casa: employee.n_casa,
                comunidade: employee.comunidade,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                alert("Funcionário atualizado com sucesso!");
            })
            .catch((error) => {
                console.error("Erro ao atualizar funcionário:", error);
                alert("Erro ao atualizar funcionário.");
            });
    };

    return (
        <div className={styles.principalContent}>
            {loading ? (
                <div className={styles.loadingContainer}>
                    <Circles height={80} width={80} color="var(--green-500)" />
                </div>
            ) : (
                <form onSubmit={handleSubmit} id="employeeForm">
                    <h2>EDITAR INFORMAÇÕES DO FUNCIONÁRIO: {employee.nome_completo}</h2>

                    <div className={styles.fieldsets}>
                        <fieldset className={styles.dataFieldset}>
                            <legend>Dados</legend>

                            <label>
                                Nome:
                                <input
                                    type="text"
                                    name="nome_completo"
                                    value={employee.nome_completo}
                                    onChange={handleChange}
                                />
                            </label>

                            <label>
                                CPF:
                                <input
                                    type="text"
                                    name="cpf"
                                    value={employee.cpf}
                                    onChange={handleChange}
                                />
                            </label>

                            <label>
                                Telefone:
                                <input
                                    type="tel"
                                    name="telefone"
                                    value={employee.telefone}
                                    onChange={handleChange}
                                />
                            </label>

                            <label>
                                Gmail:
                                <input
                                    type="email"
                                    name="gmail"
                                    value={employee.gmail}
                                    onChange={handleChange}
                                />
                            </label>

                            <div className={styles.associateEmployeeLabels}>
                                <span>O funcionário é associado?</span>

                                <label>
                                    <input
                                        type="radio"
                                        name="associado"
                                        value="1"
                                        checked={employee.associado === true}
                                        onChange={handleAssociadoChange}
                                    />
                                    Sim
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        name="associado"
                                        value="0"
                                        checked={employee.associado === false}
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
                                    name="cidade_uf"
                                    value={employee.cidade_uf}
                                    onChange={handleChange}
                                />
                            </label>

                            <label>
                                Número:
                                <input
                                    type="text"
                                    name="n_casa"
                                    value={employee.n_casa}
                                    onChange={handleChange}
                                />
                            </label>

                            <label>
                                Comunidade:
                                <input
                                    type="text"
                                    name="comunidade"
                                    value={employee.comunidade}
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