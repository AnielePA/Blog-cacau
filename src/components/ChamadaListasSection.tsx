import "./chamadaListasSection.css"; 
import { useScrollAnimation } from "../hooks/useScrollAnimation"; 
import associadosImg from "../assets/images/lista-chamada-associados.png"; 
import diretoriaImg from "../assets/images/lista-chamada-diretoria.png"; 
import { useTranslation } from "react-i18next"; 

const ArrowRightIcon = () => (
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
    style={{ marginLeft: "8px" }}
  >
    <line x1='5' y1='12' x2='19' y2='12'></line>
    <polyline points='12 5 19 12 12 19'></polyline>
  </svg>
);

function ChamadaListasSection() {
  const sectionRef = useScrollAnimation();
  const { t } = useTranslation();

  return (
      <section className='chamada-section'>
        <div
          ref={sectionRef as React.Ref<HTMLDivElement>}
          className='chamada-content'
        >
          <h2 className='chamada-section__title'>{t("chamadaListas.title")}</h2>

          <div className='chamada-grid'>
            <div className='chamada-card'>
              <img
                src={associadosImg}
                alt={t("chamadaListas.cardAssociados.imageAlt")}
                className='chamada-card__imagem'
              />

              <div className='chamada-card__conteudo'>
                <h3 className='chamada-card__titulo'>
                  {t("chamadaListas.cardAssociados.title")}
                </h3>

                <p className='chamada-card__texto'>
                  {t("chamadaListas.cardAssociados.text")}
                </p>

                <a href='/associados' className='chamada-card__botao'>
                  {t("chamadaListas.cardAssociados.buttonText")}
                  <ArrowRightIcon />
                </a>
              </div>
            </div>

            <div className='chamada-card'>
              <img
                src={diretoriaImg}
                alt={t("chamadaListas.cardDiretoria.imageAlt")}
                className='chamada-card__imagem'
              />

              <div className='chamada-card__conteudo'>
                <h3 className='chamada-card__titulo'>
                  {t("chamadaListas.cardDiretoria.title")}
                </h3>

                <p className='chamada-card__texto'>
                  {t("chamadaListas.cardDiretoria.text")}
                </p>

                <a href='/diretoria' className='chamada-card__botao'>
                  {t("chamadaListas.cardDiretoria.buttonText")}
                  <ArrowRightIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default ChamadaListasSection;
