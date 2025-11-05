import { useState } from "react";
import "./associados.css";
import { ChevronLeftIcon, Users } from "lucide-react";
import ChocolateiroCard, { type Chocolateiro } from "./ChocolateiroCard";
import { useTranslation } from "react-i18next";
import cacaulandiaLogo from "../../assets/images/associados/cacaulandia.png";
import tiengoLogo from "../../assets/images/associados/tiengo.png";
import shalomLogo from "../../assets/images/associados/shalom.png";
import targaLogo from "../../assets/images/associados/targa.jpg";
import francoLogo from "../../assets/images/associados/franco.png";
import santanaLogo from "../../assets/images/associados/santana.png";
import cacauRaizLogo from "../../assets/images/associados/cacauRaiz.png";

function AssociadosPage() {
  const { t } = useTranslation();
  const [animationKey] = useState(0);


  const chocolateirosData: Chocolateiro[] = [
    {
      id: 1,
      nomeMarca: "Cacaulândia Chocolates",
      nomesPessoas: "Marli e Israel Barbosa",
      logoUrl: cacaulandiaLogo,
      cidade: "Cacaulândia",
      descricao: t("associadosPage.cards.cacaulandia.descricao"),
    },
    {
      id: 2,
      nomeMarca: "Chocolate Tiengo",
      nomesPessoas: "Deoclides Pires e família",
      logoUrl: tiengoLogo,
      cidade: "Jaru",
      descricao: t("associadosPage.cards.tiengo.descricao"),
    },
    {
      id: 3,
      nomeMarca: "Shalom Cacau",
      nomesPessoas: "Neuzeli e Shalom",
      logoUrl: shalomLogo,
      cidade: "Jaru",
      descricao: t("associadosPage.cards.shalom.descricao"),
    },
    {
      id: 4,
      nomeMarca: "Targa Chocolate",
      nomesPessoas: "Selma Targa",
      logoUrl: targaLogo,
      cidade: "Nova União",
      descricao: t("associadosPage.cards.targa.descricao"),
    },
    {
      id: 5,
      nomeMarca: "Franco Cacao",
      nomesPessoas: "Jhanne Franco",
      logoUrl: francoLogo,
      cidade: "Ouro Preto do Oeste",
      descricao: t("associadosPage.cards.franco.descricao"),
    },
    {
      id: 6,
      nomeMarca: "Chocolate Santana",
      nomesPessoas: "Celso José de Abreu Santana",
      logoUrl: santanaLogo,
      cidade: "Presidente Médici",
      descricao: t("associadosPage.cards.santana.descricao"),
    },
    {
      id: 7,
      nomeMarca: "Cacau Raiz",
      nomesPessoas: "Melissa Almeida",
      logoUrl: cacauRaizLogo,
      cidade: "Ouro Preto do Oeste",
      descricao: t("associadosPage.cards.cacauRaiz.descricao"),
    },
  ];

  return (
    <section className='associados-page'>
      <header className='associados-header'>
        <button
          onClick={() => window.history.back()}
          className='back-button'
          aria-label={t("associadosPage.backButtonAriaLabel")}
        >
          <ChevronLeftIcon />
        </button>

        <h1>
          {t("associadosPage.headerTitle")}
          <Users
            size={40}
            style={{ marginRight: "0.5rem", verticalAlign: "middle" }}
          />
        </h1>
        <p>{t("associadosPage.headerSubtitle")}</p>
      </header>

      <main className='membros-grid-container'>
        <div className='membros-grid' key={animationKey}>
          {chocolateirosData.map((chocolateiro) => (
            <ChocolateiroCard
              key={chocolateiro.id}
              chocolateiro={chocolateiro}
            />
          ))}
        </div>
      </main>
    </section>
  );
}

export default AssociadosPage;
