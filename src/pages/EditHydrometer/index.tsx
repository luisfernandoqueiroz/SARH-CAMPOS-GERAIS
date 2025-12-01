import styles from "./styles.module.scss";

export function EditHydrometer() {
    return(
        <div className={styles.principalContent}>
            <form action="submit" id="hydrometerForm">
                <h2>EDITAR HIDRÔMETRO</h2>
                <div className={styles.fieldsets}>
                    <fieldset className={styles.dataFieldset}>
                        <legend>Dados</legend>
                        <label htmlFor="id">
                            ID:
                            <input type="text" id="id" placeholder="1234567890"/>
                        </label>
                        <label htmlFor="firstHydrometerReading">
                            Primeira leitura:
                            <input type="text" id="firstHydrometerReading" pattern="[0-9]{10}" placeholder="1234"/>
                        </label>
                        <label htmlFor="firstHydrometerReadingDate">
                            Data da primeira leitura:
                            <input type="date" id="firstHydrometerReadingDate" pattern="\d{1,2}/\d{1,2}/\d{4}" placeholder="01/02/2023"/>
                        </label>
                        <label htmlFor="place">
                            Local:
                            <input type="text" id="place" placeholder="Casa" />
                        </label>

                        <div className={styles.activeHydrometerLabels}>
                            <span>O hidrômetro esta ativo?</span>
                            <label htmlFor="yes">
                                <input type="radio" name="active" id="yes"/>
                                Sim
                            </label>
                            <label htmlFor="not">
                                <input type="radio" name="active" id="not"/>
                                Não
                            </label>
                        </div>
                    </fieldset>
                </div>
                <button type="submit" form="hydrometerForm">
                    Salvar
                </button>
            </form>
        </div>
    )
}