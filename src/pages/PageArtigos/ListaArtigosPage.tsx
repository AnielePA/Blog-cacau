import "./listaArtigosPage.css";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import ArtigoCard, { type ArtigoPreview } from "./ArtigoCard";
import { useTranslation } from "react-i18next";
import seloIg from "../../assets/images/selo-article-1.jpg";

function ListaArtigosPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const artigosData: ArtigoPreview[] = [
    {
      id: 1,
      slug: "igrondonia",
      titulo: t("listaArtigosPage.artigos.artigo1.titulo"),
      resumo: t("listaArtigosPage.artigos.artigo1.resumo"),
      imagemUrl: seloIg,
      dataPublicacao: "2025-10-22",
    },
  ];

  return (
    <section className='lista-artigos-page'>
      <header className='artigos-header'>
        <button
          onClick={() => navigate(-1)}
          className='back-button-artigos'
          aria-label={t("listaArtigosPage.backButtonAriaLabel")}
        >
          <ChevronLeftIcon />
        </button>

        <h1 className='artigos-header__title'>
          {t("listaArtigosPage.headerTitle")}
        </h1>

        <p className='artigos-header__subtitle'>
          {t("listaArtigosPage.headerSubtitle")}
        </p>
      </header>

      <main className='artigos-grid-container'>
        <div className='artigos-grid'>
          {artigosData.map((artigo) => (
            <ArtigoCard key={artigo.id} artigo={artigo} />
          ))}
        </div>
      </main>
    </section>
  );
}

export default ListaArtigosPage;
