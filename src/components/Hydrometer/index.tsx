import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";
import { PencilSimple } from "phosphor-react";

interface HydrometerProps {
    id: string;
    leituraInicial: string;
    dataLeituraInicial: string;
    localizacao: string;
    situacao: boolean;
}

export function Hydrometer({
    id,
    leituraInicial,
    dataLeituraInicial,
    localizacao,
    situacao
}: HydrometerProps) {
    return (
        <div className={styles.principalContent}>
            <span>{id}</span>
            <span>{leituraInicial}</span>
            <span>{dataLeituraInicial}</span>
            <span>{localizacao}</span>
            <span>{situacao ? "Sim" : "Não"}</span>

            <NavLink
                to="/home/choose-customer/show-hydrometers/edit-hydrometer"
                title="Editar hidrômetro"
                style={{ textDecoration: "none" }}
            >
                <button>
                    <PencilSimple size={24} weight="bold" />
                </button>
            </NavLink>
        </div>
    );
}