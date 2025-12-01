import { NavLink } from "react-router-dom";
import { Button } from "../../components/Button";

import clientesImage from "../../assets/clientes.svg"
import faturasImage from "../../assets/faturas.svg"
import leiturasImage from "../../assets/leituras.svg"
import funcionariosImage from "../../assets/funcionarios.svg"
import entradasImage from "../../assets/entradas.svg"
import saidasImage from "../../assets/saidas.svg"
import hidrometrosImage from "../../assets/hidrometro.svg"
import associacaoImage from "../../assets/logoAssociacao.svg"

import styles from "./styles.module.scss";

export function Home() {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.dashboard}>

        {/* CLIENTES */}
        <NavLink to="/home/show-customers" title="Mostrar clientes" style={{ textDecoration: 'none' }} className={styles.navLink}>
          <Button type={'Clientes'} image={clientesImage} />
        </NavLink>

        {/* FATURAS */}
        <NavLink to="/home/invoice" title="Mostrar faturas" style={{ textDecoration: 'none' }} className={styles.navLink}>
          <Button type={'Faturas'} image={faturasImage} />
        </NavLink>

        {/* LEITURAS */}
        <NavLink to="/home/hydrometers-readings" title="Mostrar leituras" style={{ textDecoration: 'none' }} className={styles.navLink}>
          <Button type={'Leituras'} image={leiturasImage} />
        </NavLink>

        {/* FUNCIONÁRIOS */}
        <NavLink to="/home/show-employees" title="Mostrar funcionários" style={{ textDecoration: 'none' }} className={styles.navLink}>
          <Button type={'Funcionários'} image={funcionariosImage} />
        </NavLink>

        {/* ENTRADAS */}
        <NavLink to="/home/entry" title="Mostrar entradas" style={{ textDecoration: 'none' }} className={styles.navLink}>
          <Button type={'Entradas'} image={entradasImage} />
        </NavLink>

        {/* SAÍDAS */}
        <NavLink to="/home/exit" title="Mostrar saídas" style={{ textDecoration: 'none' }} className={styles.navLink}>
          <Button type={'Saídas'} image={saidasImage} />
        </NavLink>

        {/* HIDRÔMETROS */}
        <NavLink to="/home/choose-customer" title="Ver hidrômetros" style={{ textDecoration: 'none' }} className={styles.navLink}>
          <Button type={'Hidrômetros'} image={hidrometrosImage} />
        </NavLink>

        {/* ASSOCIAÇÃO */}
        <NavLink to="/home/association-data" title="Mostrar associação" style={{ textDecoration: 'none' }} className={styles.navLink}>
          <Button type={'Associação'} image={associacaoImage} />
        </NavLink>

      </div>
    </div>
  )
}