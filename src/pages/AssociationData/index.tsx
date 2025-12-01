import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { API_URL } from "../../config"; // ✅ IMPORTAÇÃO CORRETA

export function AssociationData() {
  const [association, setAssociation] = useState({
    id_associacao: "",
    nome_associacao: "",
    cnpj: "",
    data_fundacao: "",
    comunidade: "",
    cidade_uf: "",
    e_mail: "",
    nome_sistema_agua: "",
    presidente_atual: ""
  });

  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  // 🔹 Carregar dados ao montar
  useEffect(() => {
    fetch(`${API_URL}/get_association.php`)
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          setAssociation(data);
        } else {
          console.error(data.error);
        }
      })
      .catch((err) => console.error("Erro ao buscar dados:", err));
  }, []);

  // 🔹 Atualiza os campos editados
  const handleChange = (e) => {
    const { id, value } = e.target;

    const keyMap = {
      name: "nome_associacao",
      cnpj: "cnpj",
      foundationDate: "data_fundacao",
      community: "comunidade",
      city: "cidade_uf",
      email: "e_mail",
      currentPresident: "presidente_atual",
    };

    const key = keyMap[id];
    if (key) {
      setAssociation((prev) => ({
        ...prev,
        [key]: value
      }));
    }
  };

  // 🔹 Salvar alterações no banco
  const handleSave = async (e) => {
    e.preventDefault();

    if (!association.id_associacao) {
      setMessage("Erro: ID da associação não encontrado.");
      setIsSuccess(false);
      return;
    }

    try {
      const response = await fetch(`${API_URL}/update_association.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(association),
      });

      const data = await response.json();

      if (data.success) {
        setMessage("✅ Dados salvos com sucesso!");
        setIsSuccess(true);
        setIsEditing(false);
      } else {
        setMessage("❌ Erro ao salvar: " + (data.error || "Desconhecido"));
        setIsSuccess(false);
      }

    } catch (err) {
      setMessage("⚠️ Erro de conexão: " + err.message);
      setIsSuccess(false);
    }
  };

  return (
    <div className={styles.principalContent}>
      <form id="associationDataForm" onSubmit={handleSave}>
        <h2>DADOS DA ASSOCIAÇÃO</h2>

        <fieldset className={styles.dataFieldset}>
          <legend>{association.nome_associacao || "Carregando..."}</legend>

          <div className={styles.dataForm}>

            <div>
              <label htmlFor="name">
                <span>Nome:</span>
                <input
                  type="text"
                  id="name"
                  value={association.nome_associacao}
                  onChange={handleChange}
                  readOnly={!isEditing}
                />
              </label>
            </div>

            <div>
              <label htmlFor="cnpj">
                <span>CNPJ:</span>
                <input
                  type="text"
                  id="cnpj"
                  value={association.cnpj}
                  onChange={handleChange}
                  readOnly={!isEditing}
                />
              </label>

              <label htmlFor="foundationDate">
                <span>DATA DE FUNDAÇÃO:</span>
                <input
                  type="text"
                  id="foundationDate"
                  value={association.data_fundacao}
                  onChange={handleChange}
                  readOnly={!isEditing}
                />
              </label>
            </div>

            <div>
              <label htmlFor="community">
                <span>COMUNIDADE:</span>
                <input
                  type="text"
                  id="community"
                  value={association.comunidade}
                  onChange={handleChange}
                  readOnly={!isEditing}
                />
              </label>

              <label htmlFor="city">
                <span>CIDADE:</span>
                <input
                  type="text"
                  id="city"
                  value={association.cidade_uf}
                  onChange={handleChange}
                  readOnly={!isEditing}
                />
              </label>
            </div>

            <div>
              <label htmlFor="email">
                <span>GMAIL:</span>
                <input
                  type="email"
                  id="email"
                  value={association.e_mail}
                  onChange={handleChange}
                  readOnly={!isEditing}
                />
              </label>

              <label htmlFor="currentPresident">
                <span>PRESIDENTE ATUAL:</span>
                <input
                  type="text"
                  id="currentPresident"
                  value={association.presidente_atual}
                  onChange={handleChange}
                  readOnly={!isEditing}
                />
              </label>
            </div>
          </div>

          <div className={styles.buttons}>
            {!isEditing ? (
              <button
                type="button"
                className={styles.alterButton}
                onClick={() => setIsEditing(true)}
              >
                Alterar
              </button>
            ) : (
              <button
                type="button"
                className={styles.alterButton}
                onClick={() => setIsEditing(false)}
              >
                Cancelar
              </button>
            )}

            <button type="submit" disabled={!isEditing}>
              Salvar
            </button>
          </div>

          {message && (
            <p
              style={{
                color: isSuccess ? "green" : "red",
                marginTop: "10px",
                fontWeight: "bold"
              }}
            >
              {message}
            </p>
          )}
        </fieldset>
      </form>
    </div>
  );
}