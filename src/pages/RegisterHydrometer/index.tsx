import styles from "./styles.module.scss";

export function RegisterHydrometer() {
    return(
        <div className={styles.principalContent}>
            <form action="submit" id="hydrometerForm">
                <h2>CADASTRAR NOVO HIDRÔMETRO</h2>
                <div className={styles.fieldsets}>
                    <fieldset className={styles.dataFieldset}>
                        <legend>Dados</legend>
                        <label htmlFor="id">
                            ID:
                            <input type="text" id="id" required/>
                        </label>
                        <label htmlFor="firstHydrometerReading">
                            Primeira leitura:
                            <input type="text" id="firstHydrometerReading" pattern="[0-9]{10}" required/>
                        </label>
                        <label htmlFor="firstHydrometerReadingDate">
                            Data da primeira leitura:
                            <input type="date" id="firstHydrometerReadingDate" pattern="\d{1,2}/\d{1,2}/\d{4}" required/>
                        </label>
                        <label htmlFor="place">
                            Local:
                            <input type="text" id="place" required/>
                        </label>

                        <div className={styles.activeHydrometerLabels}>
                            <span>O hidrômetro esta ativo?</span>
                            <label htmlFor="yes">
                                <input type="radio" name="active" id="yes" required/>
                                Sim
                            </label>
                            <label htmlFor="not">
                                <input type="radio" name="active" id="not" required/>
                                Não
                            </label>
                        </div>
                    </fieldset>
                </div>
                <button type="submit" form="hydrometerForm">
                    Cadastrar
                </button>
            </form>
        </div>
    )
}