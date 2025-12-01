import { NavLink } from 'react-router-dom'
import { UserCircle } from 'phosphor-react'
import styles from "./styles.module.scss";

export function Aside() {
    return (
        <div className={styles.aside}>
          <div className={styles.asideButtonsContent}>
            <span>
              <UserCircle size={50}/>
              Luís Fernando R. Queiroz
            </span>
              <NavLink to="/home" title="home" className={styles.navLink}>
                <button>Início</button>
              </NavLink>
              <NavLink to="#" className={styles.navLink}>
                <button>Configurações</button>
              </NavLink>
              <NavLink to="/" className={styles.navLink}>
                <button className={styles.exitButton}>Sair</button>
              </NavLink>
          </div>
        </div>
    )
}