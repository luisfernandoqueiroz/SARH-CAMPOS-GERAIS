import styles from './styles.module.scss'

export function InvoiceReading() {
    return(
        <div className={styles.wrapperContent}>
            <h2>Fatura</h2>
            <section className={styles.principalContent}>
                <div className={styles.containerOne}>
                    <div className={styles.informationContent}>
                        <span><strong>Luís Fernando Ramos Queiroz</strong></span>
                        <span>Comunidade: Campos Gerais - N12</span>
                        <span>Cidade: Luislândia - MG</span>
                        <span>CPF: 157.892.106-60</span>
                        <span>Associado: SIM</span>
                    </div>
                    <div className={styles.clientContent}>
                        <div>
                            <span><strong>CLIENTE</strong></span>
                            <span>01</span>
                        </div>
                        <div>
                            <span><strong>HIDRÔMETRO</strong></span>
                            <span>0000000000</span>
                            <span>Casa</span>
                        </div>
                    </div>
                </div>

                <div className={styles.containerTwo}>
                    <div>
                        <span>Referente a</span>
                        <strong>JANEIRO/2023</strong>
                    </div>
                    <div>
                        <span>Identificador<br/>da fatura</span>
                        <strong className={styles.identifierNumber}>01</strong>
                    </div>
                </div>

                <div className={styles.containerThree}>
                    <div className={styles.topDiv}>
                        <div>
                            <span>Vencimento</span>
                            <strong>20/02/2023</strong>
                        </div>
                        <div>
                            <span>Valor a pagar (R$)</span>
                            <strong>100,00</strong>
                        </div>
                    </div>
                    <div className={styles.bottomDiv}>
                        <span>Leitura anterior: <strong>0000</strong></span>
                        <span>Leitura atual: <strong>0000</strong></span>
                        <span>Consumo em m³: <strong>0000</strong></span>
                        <span>Data da leitura: <strong>22/01/2023</strong></span>
                        <span>Observação: <strong>Não há</strong></span>
                    </div>
                </div>
            </section>
        </div>
    )
}