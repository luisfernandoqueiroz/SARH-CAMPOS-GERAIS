import { useState } from "react";
import styles from "./styles.module.scss";
import { API_URL } from "../../config";

export function RegisterCustomer() {
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [associate, setAssociate] = useState<number | null>(null);
    const [address, setAddress] = useState("");
    const [addressNumber, setAddressNumber] = useState("");
    const [community, setCommunity] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (associate === null) {
            alert("Por favor, selecione se o cliente é associado.");
            return;
        }

        const customerData = {
            nome_completo: name,
            cpf_cnpj: cpf,
            telefone: phone,
            e_mail: email,
            associado: associate,
            cidade: address,
            n_casa: addressNumber,
            comunidade: community,
            senha: "camposgerais83", // senha padrão
        };

        fetch(`${API_URL}/register.cliente.php`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(customerData),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("Cliente cadastrado com sucesso!");
                    // Você pode também limpar o formulário se quiser:
                    setName("");
                    setCpf("");
                    setPhone("");
                    setEmail("");
                    setAssociate(null);
                    setAddress("");
                    setAddressNumber("");
                    setCommunity("");
                } else {
                    alert("Erro ao cadastrar cliente: " + data.message);
                }
            })
            .catch(error => {
                console.error("Erro ao cadastrar cliente:", error);
                alert("Erro na comunicação com o servidor.");
            });
    };

    return (
        <div className={styles.principalContent}>
            <form onSubmit={handleSubmit} id="customerForm">
                <h2>CADASTRAR NOVO CLIENTE</h2>
                <div className={styles.fieldsets}>
                    <fieldset className={styles.dataFieldset}>
                        <legend>Dados</legend>
                        <label htmlFor="name">
                            Nome:
                            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                        </label>
                        <label htmlFor="cpf">
                            CPF:
                            <input type="text" id="cpf" pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
                        </label>
                        <label htmlFor="phone">
                            Telefone:
                            <input type="tel" pattern="[0-9]{11}" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                        </label>
                        <label htmlFor="email">
                            E-mail:
                            <input type="email" pattern=".+@gmail\.com" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </label>

                        <div className={styles.associateCustomerLabels}>
                            <span>O cliente é associado?</span>
                            <label htmlFor="yes">
                                <input type="radio" name="associate" id="yes" checked={associate === 1} onChange={() => setAssociate(1)} required />
                                Sim
                            </label>
                            <label htmlFor="not">
                                <input type="radio" name="associate" id="not" checked={associate === 0} onChange={() => setAssociate(0)} required />
                                Não
                            </label>
                        </div>
                    </fieldset>

                    <fieldset className={styles.addressFieldset}>
                        <legend>Endereço</legend>
                        <label htmlFor="address">
                            Cidade/UF:
                            <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                        </label>
                        <label htmlFor="addressNumber">
                            Número do endereço:
                            <input type="text" id="addressNumber" maxLength={10} value={addressNumber} onChange={(e) => setAddressNumber(e.target.value)} required />
                        </label>
                        <label htmlFor="community">
                            Comunidade:
                            <input type="text" id="community" value={community} onChange={(e) => setCommunity(e.target.value)} />
                        </label>
                    </fieldset>
                </div>
                <button type="submit" form="customerForm">
                    Cadastrar
                </button>
            </form>
        </div>
    );
}