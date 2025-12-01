import { NavLink } from "react-router-dom";
import styles from './styles.module.scss'

export function NavBar() {
    return (
        <nav className={styles.navBar}>
            <ul>
                <li><a href="#sectionFoundation">Fundação</a></li>
                <li><a href="#sectionPresidents">Presidentes</a></li>
                <li><a href="#sectionSystem">Sistema de Fornecimento de Água</a></li>
                <li><NavLink to="/login" title="Tela de login" className={styles.navLink}>Fazer Login</NavLink></li>
            </ul>
        </nav>
    )
}