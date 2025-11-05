import "./diretoria.css";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import DiretoriaCard, { type Diretoria } from "./DiretoriaCard";
import { useTranslation } from "react-i18next";

function DiretoriaPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const diretoriaData: Diretoria[] = [
    {
      id: 1,
      nome: "Estevam Fernandes Magalhães",
      fotoUrl: "https://placehold.co/400x400/795548/FFFFFF?text=Estevam",
      cargo: t("diretoriaPage.cargos.presidente"),
      municipio: "Teixeirópolis",
    },
    {
      id: 2,
      nome: "Deoclídes Pires da Silva",
      fotoUrl: "https://placehold.co/400x400/5D4037/FFFFFF?text=Deoclídes",
      cargo: t("diretoriaPage.cargos.vicePresidente"),
      municipio: "Jaru",
    },
    {
      id: 3,
      nome: "Helberte Augusto Neves",
      fotoUrl: "https://placehold.co/400x400/8D6E63/FFFFFF?text=Helberte",
      cargo: t("diretoriaPage.cargos.diretorAdministrativo"),
      municipio: "Theobroma",
    },
    {
      id: 4,
      nome: "Flávio Teixeira da Silva",
      fotoUrl: "https://placehold.co/400x400/795548/FFFFFF?text=Flávio",
      cargo: t("diretoriaPage.cargos.diretorAdministrativoSuplente"),
      municipio: "Jaru",
    },
    {
      id: 5,
      nome: "Marta Betânia Ferreira Carvalho",
      fotoUrl: "https://placehold.co/400x400/5D4037/FFFFFF?text=Marta",
      cargo: t("diretoriaPage.cargos.diretorFinanceiro"),
      municipio: "Ji-Paraná",
    },
    {
      id: 6,
      nome: "Israel Barbosa da Silveira",
      fotoUrl: "https://placehold.co/400x400/8D6E63/FFFFFF?text=Israel",
      cargo: t("diretoriaPage.cargos.diretorFinanceiroSuplente"),
      municipio: "Cacaulândia",
    },
    {
      id: 7,
      nome: "Marcelo Alves Medeiros",
      fotoUrl: "https://placehold.co/400x400/795548/FFFFFF?text=Marcelo",
      cargo: t("diretoriaPage.cargos.diretorMarketing"),
      municipio: "Jaru",
    },
    {
      id: 8,
      nome: "Jhanne Cleice Silva Franco",
      fotoUrl: "https://placehold.co/400x400/5D4037/FFFFFF?text=Jhanne",
      cargo: t("diretoriaPage.cargos.diretorMarketingSuplente"),
      municipio: "Ouro Preto do Oeste",
    },
    {
      id: 9,
      nome: "Antônio Deusemínio de Almeida",
      fotoUrl: "https://placehold.co/400x400/8D6E63/FFFFFF?text=Antônio",
      cargo: t("diretoriaPage.cargos.diretorSustentabilidade"),
      municipio: "Ouro Preto do Oeste",
    },
    {
      id: 10,
      nome: "Assis Pereira de Morais",
      fotoUrl: "https://placehold.co/400x400/795548/FFFFFF?text=Assis",
      cargo: t("diretoriaPage.cargos.diretorSustentabilidadeSuplente"),
      municipio: "Ouro Preto do Oeste",
    },
    {
      id: 11,
      nome: "Melissa Barbosa Costa de Almeida",
      fotoUrl: "https://placehold.co/400x400/5D4037/FFFFFF?text=Melissa",
      cargo: t("diretoriaPage.cargos.diretoraChocolateria"),
      municipio: "Ouro Preto do Oeste",
    },
    {
      id: 12,
      nome: "Shalom Oliveira Mendes Silva",
      fotoUrl: "https://placehold.co/400x400/8D6E63/FFFFFF?text=Shalom",
      cargo: t("diretoriaPage.cargos.diretoraChocolateriaSuplente"),
      municipio: "Jaru",
    },
    {
      id: 13,
      nome: "Deborah Regina",
      fotoUrl: "https://placehold.co/400x400/8D6E63/FFFFFF?text=Deborah",
      cargo: t("diretoriaPage.cargos.executiva"),
      municipio: "Ji-Paraná",
    },
  ];

  return (
    <section className='diretoria-page'>
      <header className='diretoria-header'>
        <button
          onClick={() => navigate(-1)}
          className='back-button-diretoria'
          aria-label={t("diretoriaPage.backButtonAriaLabel")}
        >
          <ChevronLeftIcon />
        </button>

        <h1 className='diretoria-header__title'>
          {t("diretoriaPage.headerTitle")}
        </h1>

        <p className='diretoria-header__subtitle'>
          {t("diretoriaPage.headerSubtitle")}
        </p>
      </header>

      <main className='diretoria-grid-container'>
        <div className='diretoria-grid'>
          {diretoriaData.map((membro) => (
            <DiretoriaCard key={membro.id} membro={membro} />
          ))}
        </div>
      </main>
    </section>
  );
}

export default DiretoriaPage;
