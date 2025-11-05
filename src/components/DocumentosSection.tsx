import "./documentosSection.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useTranslation } from "react-i18next";

const DownloadIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    style={{ marginRight: "10px" }}
  >
    <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'></path>
    <polyline points='7 10 12 15 17 10'></polyline>
    <line x1='12' y1='15' x2='12' y2='3'></line>
  </svg>
);

function DocumentosSection() {
  const sectionRef = useScrollAnimation();
  const { t } = useTranslation();
  return (
    <section
      className='documentos-section'
      id='documentos'
      ref={sectionRef as React.Ref<HTMLElement>}
    >
      <div className='documentos-content'>
        <h2 className='documentos-title'>{t("documentos.title")}</h2>
        <p className='documentos-intro'>{t("documentos.intro")}</p>

        <div className='documentos-grid'>
          <a
            href='/documents/Oficio_0063412808.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='documento-card'
          >
            <span className='documento-card__texto'>
              <DownloadIcon />
              {t("documentos.link1")}
            </span>
            <span className='documento-card__botao'>
              {t("documentos.buttonText")}
            </span>
          </a>

          <a
            href='/documents/Instrucao_0063414921_IN_28_IDARON_GIDSV_alterada_pela_IN_29_IDARON_GIDSV.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='documento-card'
          >
            <span className='documento-card__texto'>
              <DownloadIcon />
              {t("documentos.link2")}
            </span>
            <span className='documento-card__botao'>
              {t("documentos.buttonText")}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default DocumentosSection;
