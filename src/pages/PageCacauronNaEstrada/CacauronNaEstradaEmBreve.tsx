import "./cacauronNaEstradaEmBreve.css";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";
import capaCacauronNaEstrada from "../../assets/images/cacauron-na-estrada.webp";

const FilmIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='48'
    height='48'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect x='2' y='2' width='20' height='20' rx='2.18' ry='2.18'></rect>{" "}
    <line x1='7' y1='2' x2='7' y2='22'></line>{" "}
    <line x1='17' y1='2' x2='17' y2='22'></line>{" "}
    <line x1='2' y1='12' x2='22' y2='12'></line>{" "}
    <line x1='2' y1='7' x2='7' y2='7'></line>{" "}
    <line x1='2' y1='17' x2='7' y2='17'></line>{" "}
    <line x1='17' y1='17' x2='22' y2='17'></line>{" "}
    <line x1='17' y1='7' x2='22' y2='7'></line>{" "}
  </svg>
);

function CacauronNaEstradaEmBreve() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section className='coming-soon-page'>
      <img
        src={capaCacauronNaEstrada}
        alt={t("cacauronNaEstradaEmBreve.imageAlt")}
        className='imagem-fundo-em-breve'
      ></img>
      <button
        onClick={() => navigate(-1)}
        className='back-button-em-breve'
        aria-label={t("cacauronNaEstradaEmBreve.backButtonAriaLabel")}
      >
        <ChevronLeftIcon />
      </button>

      <div className='coming-soon-content'>
        <div className='coming-soon-icon'>
          <FilmIcon />
        </div>

        <h1 className='coming-soon-title'>
          {t("cacauronNaEstradaEmBreve.title")}
        </h1>

        <p className='coming-soon-subtitle'>
          <Trans i18nKey='cacauronNaEstradaEmBreve.subtitle'>
            <span className='coming-soon-highlight'>Em breve</span>
            <strong
              style={{
                color: "var(--white)",
                fontFamily: "var(--font-navigation)",
              }}
            >
              Cacauron na Estrada
            </strong>
            , desvendando a rica história e os segredos do cacau de Rondônia.
            Aguarde!
          </Trans>
        </p>
      </div>
    </section>
  );
}

export default CacauronNaEstradaEmBreve;
