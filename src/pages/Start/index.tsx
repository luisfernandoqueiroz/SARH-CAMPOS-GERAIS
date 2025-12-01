import { NavBar } from "../../components/NavBar";

import associacaoLogo from "../../assets/logoAssociacaoBranco.svg";
import styles from './styles.module.scss'
import { PresidentsGallery } from "../../components/PresidentsGallery";

export function Start() {
    return (
        <div className={styles.principalContent}>
            <header className={styles.header}>
                <img src={associacaoLogo}/>
                <span>
                    <strong>SISTEMA DE FORNECIMENTO DE ÁGUA</strong><br/>
                    ASSOCIAÇÃO COMUNITÁRIA DOS PEQUENOS PRODUTORES RURAIS DE CAMPOS GERAIS
                </span>
            </header>
            <NavBar />
            <div className={styles.sectionsContent}>
                <section id="sectionFoundation">
                    <h2>Fundação</h2>
                    <p>A Associação Comunitária dos Pequenos Produtores Rurais de Campos Gerais foi fundada em 1983, inicialmente chamada de Conselho de Desenvolvimento Comunitário de Campos Gerais, essa foi a primeira associação comunitária rural do município de Brasília de Minas. A assembleia geral de constituição aconteceu no dia 04 de maio de 1983, no salão da Escola Municipal Olavo Bilac, em Campos Gerais, Minas Gerais. A associação foi criada como uma sociedade civil sem fins lucrativos e teve como objetivo promover o desenvolvimento da comunidade, regida por um estatuto próprio. Estavam presentes e foram considerados sócios fundadores as seguintes pessoas, Amintas Ribeiro Neves, Francisca Ribeiro Neves, Valdivia Rodrigues da Silva, Eva Rodrigues de Queiroz, Teodoro Ramos Pereira, Virgílio Ramos Pereira, Filomeno Lemos do Carmo, João Mauricio Ribeiro Neves, José Onofre Paiva,  Angelo Francisco de Jesus Silva, José Geraldo Ribeiro da Silva, Darcy Ribeiro Neves, Edmilson Ribeiro, José Fernandes da Silva, Marciano José de Aquino, Pompílio Ribeiro Neves, João Ribeiro de Queiroz, Joaquim Lemos, Ana Ribeiro Mendes, Gerozino Joaquim de Queiroz, Marizete Ribeiro da Silva, Bernardina Ribeiro, Maria Senhora Ramos Queiroz, Maria Rodrigues de Aquino, Valdir Rodrigues da Silva, Marcia Cristina Ribeiro, Lucimar Rodrigues Xavier, Faustina Rodrigues Xavier, Dulcineide Paiva, José Rodrigues da Mota, José Joaquim de Queiroz, José Ribeiro Neves, João Lemos do Carmo, Pedro Fernandes de Araújo, Geraldo Ribeiro Queiroz, Geraldo Magela Noronha, Licínio José de Aquino, Tarcísio Ribeiro Neves, José Adão Ramos Queiroz, Fábio Ribeiro de Queiroz, José Neves de Oliveira, Adilson Ramos de Queiroz e Maria Izabel Vieira de Souza.</p>
                    <p>No ato sua fundação, foram aclamados para coordenar a reunião os extensionistas da EMATER-MG, Geraldo Magela Noronha, Maria Izabel Vieira de Souza e a socióloga da secretária do trabalho e ação social, Maria Angelica Franco Prados e para secretariar os trabalhos a professora Maria dos Anjos Rodrigues.  Em primeiro lugar foi discutido um texto sobre Desenvolvimento de comunidades, em seguida houve maiores esclarecimentos sobre conselho comunitário. Por fim houve a eleição da mesa diretora, e após proclamado os resultados do executivo secreto, a assembleia declarou empossados os membros da diretoria e o conselho fiscal, ficando assim definitivamente criado o conselho de desenvolvimento comunitário de Campos Gerais.</p>
                    <p>Hoje, a Associação Comunitária dos Pequenos Produtores Rurais de Campos Gerais tem como objetivo promover o desenvolvimento sustentável da agricultura familiar e dos pequenos produtores rurais da região de Campos Gerais, além de buscar a melhoria da qualidade de vida das comunidades locais.</p>
                </section>

                <section id="sectionPresidents">
                    <h2>Presidentes</h2>
                    <p>A Associação Comunitária dos Pequenos Produtores Rurais de Campos Gerais já teve vários presidentes ao longo de sua história. O primeiro deles foi Amintas Ribeiro Neves, que ocupou o cargo por seis mandatos, de 1983 a 1987 e de 1989 a 1996. Em seguida, José Adão Ramos Queiroz assumiu a presidência em 1987, permanecendo no cargo até 1988.</p>
                    <p>Em 1997, José Fernandes da Silva foi eleito presidente da associação e exerceu o cargo até 1999. Ele voltou a assumir a presidência em 2020 e tem mandato previsto até 2024. Entre os dois mandatos de José Fernandes, Edmilson Ribeiro Neves ocupou a presidência de 1999 a 2001.</p>
                    <p> Infelizmente, Edmilson Ribeiro Neves faleceu em 2001, e José Geraldo Ribeiro assumiu a presidência de forma interina, entre fevereiro e maio daquele ano. Em seguida, Joao Mauricio Ribeiro ocupou o cargo de 2001 a 2004, seguido por José Cardoso de Barros, que exerceu a presidência de 2004 a 2007.</p>
                    <p>A primeira mulher a assumir a presidência da associação foi Patrícia Júnia Ribeiro, que ocupou o cargo de 2007 a 2011 e novamente de 2016 a 2020. Adilson Ramos de Queiroz tomou posse em 2011 e presidiu até 2016, esse foi o último presidente antes de José Fernandes da Silva voltar ao cargo em 2020.</p>
                    <p>Claudineide Ferreira de Menezes foi a segunda mulher a assumir a presidência da associação, sendo empossada no cargo em 202 com a mandato previsto até 2026 sendo a atual presidente da associação.</p>
                    <p>Sendo assim, ao longo de sua história, a Associação Comunitária dos Pequenos Produtores Rurais de Campos Gerais já teve 10 presidentes: Amintas Ribeiro Neves, José Adão Ramos Queiroz, Jose Fernandes da Silva, Edmilson Ribeiro Neves, José Geraldo Ribeiro, Joao Mauricio Ribeiro, José Cardoso de Barros, Patrícia Júnia Ribeiro, Adilson Ramos de Queiroz e Claudineide Ferreira de Menezes.</p>

                    <h3>Galeria dos Presidentes</h3>
                    <PresidentsGallery />
                </section>

                <section id="sectionSystem">
                    <h2>Sistema de Fornecimento de Água</h2>
                    <p>Antes da criação do sistema de abastecimento de água na comunidade de Campos Gerais, os moradores dependiam de uma nascente localizada na própria comunidade, conhecida como "Cacimba". Essa nascente era a principal fonte de água utilizada pelas casas da região, e as pessoas precisavam coletar água manualmente, usando bacias e baldes. Em tempos de chuva, também aproveitavam a água dos tanques, e para lavar roupas, recorriam aos córregos próximos.</p>
                    <p>Em 1984, um ano após a constituição do conselho de desenvolvimento, foiperfurado um poço artesiano por meio do plano Oeste. No entanto, apenas em 1986 o poço começou a ser utilizado, com a instalação de uma bomba de água. A água chegava apenas até uma caixa no centro da comunidade, onde havia um chafariz para que as pessoas pudessem coletá-la. Naquela época, o prefeito de Brasília de Minas, Francisco de Assis Simões, conhecido como Dr. Xikin, custeava os gastos para manter o poço ativo. Como não havia energia elétrica na região, o combustível utilizado era oleo.</p>
                    <p>Após o término do mandato do Dr. Xikin, os usuários da água passaram a arcar com esses custos, uma vez que a água era essencial para sua sobrevivência. Eles precisavam se deslocar até a loja de Tiago Rocha para comprar o combustível.</p>
                    <p>Em 1992, com a chegada da energia elétrica na comunidade, a água começou a ser distribuída por meio de encanamentos para as 12 famílias da vila de Campos Gerais. Com a emancipação do distrito de Jacu para a cidade de Luislândia, a prefeitura arcaou com os gastos de manutenção e energia elétrica para manter o poço em funcionamento até o ano de 2008. A partir desse ano, os custos passaram a ser pagos pela associação, que instalou hidrômetros em cada propriedade.</p>
                    <p>No ano de 2008, durante uma reunião extraordinária da associação comunitária, foi informado que a associação passaria a arcar com os custos para manter o poco artesiano ativo. Nesse ano cada proprietário usuário d agua recebe a instalação de um hidrômetro e também foi estabelecido um regimento próprio para a gestão da água. Nessa época, foi formada a Comissão de Água, composta por um grupo de pessoas voluntárias. Essa comissão tinha a responsabilidade de gerenciar o fornecimento de água, garantindo seu bom funcionamento e manutenção.</p>
                    <p>Para custear os gastos relacionados ao sistema, cada usuário de água passou a pagar um valor proporcional ao seu uso. Essa contribuição tinha o propósito de cobrir os custos com a manutenção da bomba de água do poço artesiano e a conta de energia elétrica necessária para mantê-la em funcionamento.</p>
                    <p>Com a implementação desse sistema de fornecimento de água, a comunidade de Campos Gerais obteve uma solução mais prática e acessível para suprir suas necessidades diárias de água. Através do trabalho voluntário da Comissão de Água e do apoio da associação comunitária, foi possível garantir a disponibilidade desse recurso essencial para todos os moradores da região até os dias atuais.</p>

                    <h3>Comissão do Sistema de Fornecimento de Água da Associação Comunitária dos Pequenos Produtores Rurais de Campos Gerais – 2024 a 2026</h3>
                    <ul>
                        <li>Claudineide Ferreira de Menezes -  Presidente</li>
                        <li>José Fernandes da Silva -  Vice-Presidente</li>
                        <li>Regiane Mendes Nery -  Primeira Secretária</li>
                        <li>Vilma Rodrigues de Matos -  Tesoureira</li>
                        <li>Denílson Alves de Souza -  Fiscal</li>
                        <li>Ângelo Francisco -  Fiscal</li>
                        <li>Edvaldo Ribeiro -  Fiscal</li>
                        <li>Gilvan Carlos Ribeiro -  Bombeiro</li>
                    </ul>
                </section >
            </div>
            <footer className={styles.footer}>
                <span>
                    Endereço: comunidade Campos Gerais, s/n | Bairro: Zona Rural<br/>
                    Cidade: Luislândia - MG | CEP: 39336-000 | Email: associacaocamposgerais@gmail.com<br/>
                    CNPJ: 21.357.801/0001-89 | Data de fundação: 04/05/1983
                </span>
            </footer>
        </div>
    )
}