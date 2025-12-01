import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";

import { MagnifyingGlass } from "phosphor-react";
import { Hydrometer } from "../../components/Hydrometer";
import styles from "./styles.module.scss";
import { API_URL } from "../../config";

interface HydrometerItem {
    id_hidrometro: string;
    situacao: boolean;
    leitura_inicial: string;
    data_leitura_inicial: string;
    localizacao: string;
}

export function ShowHydrometers() {
    const [hydrometers, setHydrometers] = useState<HydrometerItem[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const { id } = useParams();

    useEffect(() => {
        if (!id) return;

        fetch(`${API_URL}/return.hidrometros.php?id=${id}`)
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setHydrometers(data);
                } else {
                    console.error("Formato inesperado:", data);
                }
            })
            .catch((error) => {
                console.error("Erro ao carregar hidrômetros:", error);
            });
    }, [id]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className={styles.principalContent}>
            <div className={styles.tableContent}>

                <div className={styles.tableHeader}>
                    HIDRÔMETROS CADASTRADOS:

                    <NavLink
                        to="/home/choose-customer/show-hydrometers/register-hydrometer"
                        title="Cadastrar hidrômetro"
                        style={{ textDecoration: "none" }}
                    >
                        <button>Cadastrar hidrômetro</button>
                    </NavLink>
                </div>

                <div className={styles.searchCustomer}>
                    <input
                        type="text"
                        placeholder="Pesquise um hidrômetro por seu ID ou Localização"
                        value={searchTerm}
                        onChange={handleInputChange}
                    />
                    <button>
                        <MagnifyingGlass weight="bold" size={26} />
                    </button>
                </div>

                <div className={styles.dataContent}>
                    <span>ID</span>
                    <span>LEITURA INICIAL</span>
                    <span>DATA LEITURA</span>
                    <span>LOCALIZAÇÃO</span>
                    <span>SITUAÇÃO</span>
                    <span></span>
                </div>

                <div className={styles.customersData}>
                    {hydrometers
                        .filter((hydrometer) =>
                            hydrometer.id_hidrometro.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            hydrometer.localizacao.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        .map((hydrometer) => (
                            <Hydrometer
                                key={hydrometer.id_hidrometro}
                                id={hydrometer.id_hidrometro}
                                leituraInicial={hydrometer.leitura_inicial}
                                dataLeituraInicial={hydrometer.data_leitura_inicial}
                                localizacao={hydrometer.localizacao}
                                situacao={hydrometer.situacao}
                            />
                        ))}
                </div>

            </div>
        </div>
    );
}