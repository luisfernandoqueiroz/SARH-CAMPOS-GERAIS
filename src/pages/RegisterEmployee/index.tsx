import styles from "./styles.module.scss";

export function RegisterEmployee() {
    return(
        <div className={styles.principalContent}>
            <form action="submit" id="EmployeeForm">
                <h2>CADASTRAR NOVO FUNCIONÁRIO</h2>
                <div className={styles.fieldsets}>
                    <fieldset className={styles.dataFieldset}>
                        <legend>Dados</legend>
                        <label htmlFor="name">
                            Nome:
                            <input type="text" id="name" required/>
                        </label>
                        <label htmlFor="cpf">
                            CPF:
                            <input type="text" id="cpf" pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}" required/>
                        </label>
                        <label htmlFor="phone">
                            Telefone:
                            <input type="tel" pattern="[0-9]{11}" id="phone" required/>
                        </label>
                        <label htmlFor="email">
                            Gmail:
                            <input type="email" pattern=".+@gmail\.com" id="email" required/>
                        </label>

                        <div className={styles.associateEmployeeLabels}>
                            <span>O funcionário é associado?</span>
                            <label htmlFor="yes">
                                <input type="radio" name="associate" id="yes" required/>
                                Sim
                            </label>
                            <label htmlFor="not">
                                <input type="radio" name="associate" id="not" required/>
                                Não
                            </label>
                        </div>
                    </fieldset>

                    <fieldset className={styles.addressFieldset}>
                        <legend>Endereço</legend>
                        <label htmlFor="address">
                            Cidade/UF:
                            <input type="text" id="address" required/>
                        </label>
                        <label htmlFor="addressNumber">
                            Número do endereço:
                            <input type="text" id="addressNumber" maxLength={10} required/>
                        </label>
                        <label htmlFor="community">
                            Comunidade:
                            <input type="text" id="community"/>
                        </label>
                    </fieldset>
                </div>
                <button type="submit" form="EmployeeForm">
                    Cadastrar
                </button>
            </form>
        </div>
    )
}