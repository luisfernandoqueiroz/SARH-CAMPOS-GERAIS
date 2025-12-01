import styles from "./styles.module.scss";
import { UserCircle } from 'phosphor-react'

export function ReadingInformation() {
  return(
    <div className={styles.mainContainer}>
      <div className={styles.customerContainer}>
        <div> 
          <UserCircle size={50} weight="fill"/>
          <p>01</p>
        </div>
        <span>João Pereira da Silva</span>
      </div>

      <div className={styles.hydrometerContainer}>
        <div>
          <p>ID HIDRÔMETRO:</p>
          <span>000000000000</span> 
        </div>

        <div>
          <p>LOCALIZAÇÃO:</p>
          <span>CASA</span> 
        </div>
      </div>

      <div className={styles.readingContainer}>
        <div>
          <label htmlFor="current-reading">LEITURA ATUAL:</label>
          <input type="string" id="current-reading" />
        </div>

        <div>
          <p>LEITURA ANTERIOR:</p>
          <span>0000</span> 
        </div>
      </div>
    </div>
  )
}