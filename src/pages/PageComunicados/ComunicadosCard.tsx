import './comunicadosCard.css';
import {  useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { ComunicadoPreview } from "./ComunicadoPreview";




const ComunicadoCard = ({ comunicado }: { comunicado: ComunicadoPreview }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleCardClick = () => {
     navigate(`/comunicados/${comunicado.slug}`);
    console.log(`Navegar para: /comunicados/${comunicado.slug}`);
  };

const formatDate = (dateString: string) => {
  const [year, month, day] = dateString.split('-').map(Number);

  const date = new Date(year, month - 1, day);

  return date.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};


  return (
    <article className="comunicado-card" onClick={handleCardClick}>
      <div className="comunicado-card__content">
        <header className="comunicado-card__header">
          <span className="comunicado-card__tag">
            {comunicado.numero}
          </span>
          <time className="comunicado-card__date">
            {formatDate(comunicado.dataPublicacao)}
          </time>
        </header>

        <h2 className="comunicado-card__title">
          {comunicado.titulo}
        </h2>

        <p className="comunicado-card__resumo">
          {comunicado.resumo}
        </p>

        <div className="comunicado-card__cta">
          {t("listaComunicadosPage.card.readMore", "Ler comunicado completo")}
        </div>
      </div>
    </article>
  );
};


export default ComunicadoCard;