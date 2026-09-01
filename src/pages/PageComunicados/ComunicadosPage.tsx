import './comunicadosPage.css';
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import ComunicadoCard from "./ComunicadosCard";
import type  { ComunicadoPreview } from "./ComunicadoPreview";



function ComunicadosPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const comunicadosData: ComunicadoPreview[] = [
    {
        id: 1,
        slug: "posicionamento-importacao-cacau-2026",
        numero: "001/2026     ",
        titulo: t("listaComunicadosPage.comunicados.comunicado1.titulo", "Posicionamento sobre a importação de amêndoas"),
        resumo: t("listaComunicadosPage.comunicados.comunicado1.resumo", "Posicionamento oficial sobre a importação de amêndoas de cacau africano e defesa da cacauicultura de Rondônia."),
        dataPublicacao: "2026-01-29",
    },
    // outros comunicados serão adicionados aqui
  ];

  return (
    <section className='lista-comunicados-page'>

      <header className='comunicados-header'>
        <button
          onClick={() => navigate('/#hero')}
          className='back-button-comunicados'
        >
          <ChevronLeftIcon />
        </button>

        <h1 className='comunicados-header__title'>
          {t("listaComunicadosPage.headerTitle", "Comunicados Oficiais")}
        </h1>

        <p className='comunicados-header__subtitle'>
          {t("listaComunicadosPage.headerSubtitle", "Acompanhe as notas e posicionamentos da Cacauron.")}
        </p>
      </header>
      <main className='comunicados-grid-container'>
        <div className='comunicados-grid'>
          {comunicadosData.map((comunicado) => (
            <ComunicadoCard key={comunicado.id} comunicado={comunicado} />
          ))}
        </div>
      </main>
    </section>
  );

}

export default ComunicadosPage;
