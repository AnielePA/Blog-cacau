import "./ourStory.css";
import cacauImage from "../assets/images/STE-2.png";
import rondoniaCacau from "../assets/images/selo-rondonia-cacau.jpg";
import colhendoCacau from "../assets/images/STE-1.png";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useImageModal } from "../context/modalContext";
import { useTranslation, Trans } from "react-i18next";

const IconeRanking = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='40'
    height='40'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <circle cx='12' cy='8' r='6' />
    <path d='M15.477 12.89 17 22l-5-3-5 3 1.523-9.11' />
    <text
      x='12'
      y='11'
      textAnchor='middle'
      fontSize='8'
      fill='currentColor'
      stroke='none'
    >
      4
    </text>
  </svg>
);
const IconeTerritorio = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='40'
    height='40'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    {" "}
    <path d='M21 3l-6.5 18a.55.55 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1L21 3z' />{" "}
  </svg>
);
const IconeMeta = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='40'
    height='40'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    {" "}
    <path d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z' />{" "}
    <path d='m9 12 2 2 4-4' />{" "}
  </svg>
);

function OurStory() {
  const { openModal } = useImageModal();
  const sectionRef = useScrollAnimation();
  const { t } = useTranslation();

  return (
    <main
      ref={sectionRef as React.Ref<HTMLElement>}
      className='historia-v2-container'
      id='our-story'
    >
      <header className='header-historia-container'>
        <div className='header-historia'>
          <h2>{t("ourStory.headerTitle")}</h2>
          <p>{t("ourStory.headerSubtitle")}</p>
        </div>
      </header>

      <section className='secao-conteudo'>
        <div className='bloco-alternado'>
          <div className='bloco-imagem'>
            <img
              src={cacauImage}
              alt={t("ourStory.sementeMudanca.imageAlt")}
              onClick={() => openModal(cacauImage)}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className='bloco-texto'>
            <h3>{t("ourStory.sementeMudanca.title")}</h3>
            <p>
              <Trans i18nKey='ourStory.sementeMudanca.text1'>
                Nossa jornada começou a florescer a partir do projeto{" "}
                <strong>"Cacau Sustentável"</strong>, uma iniciativa visionária
                em parceria com o SEBRAE Rondônia. Foi esse apoio inicial,
                somado a diagnósticos precisos e ao esforço conjunto de
                produtores, que pavimentou o caminho para a criação da Cacauron.
              </Trans>
            </p>
            <p>
              <Trans i18nKey='ourStory.sementeMudanca.text2'>
                O objetivo sempre foi claro: fomentar a cadeia produtiva,
                garantir mais qualidade de vida para as famílias do campo e
                revelar ao mundo a verdadeira identidade e o potencial da
                cacauicultura rondoniense. Em{" "}
                <strong>20 de agosto de 2021</strong>, esse sonho se tornou
                realidade.
              </Trans>
            </p>
          </div>
        </div>

        <div className='bloco-alternado reverso'>
          <div className='bloco-imagem'>
            <img
              src={rondoniaCacau}
              alt={t("ourStory.seloExcelencia.imageAlt")}
              onClick={() => openModal(rondoniaCacau)}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className='bloco-texto'>
            <h3>{t("ourStory.seloExcelencia.title")}</h3>
            <p>
              <Trans i18nKey='ourStory.seloExcelencia.text1'>
                O coração da nossa missão é a promoção e a proteção da{" "}
                <strong>Indicação de Procedência "Rondônia Cacau"</strong>. Este
                não é apenas um selo, mas a certificação de uma herança. Ele
                atesta a origem, a qualidade superior e a autenticidade de um
                cacau que carrega as características únicas do nosso terroir
                amazônico.
              </Trans>
            </p>
            <p>{t("ourStory.seloExcelencia.text2")}</p>
          </div>
        </div>
        <div className='bloco-alternado'>
          <div className='bloco-imagem'>
            <img
              src={colhendoCacau}
              alt={t("ourStory.qualidadeReconhecida.imageAlt")}
              onClick={() => openModal(colhendoCacau)}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className='bloco-texto'>
            <h3>{t("ourStory.qualidadeReconhecida.title")}</h3>
            <p>{t("ourStory.qualidadeReconhecida.text1")}</p>
            <p>
              <Trans i18nKey='ourStory.qualidadeReconhecida.text2'>
                Somos uma organização pioneira no Brasil, a única a abraçar em
                uma só entidade os dois elos fundamentais desta cadeia: os{" "}
                <strong>cacauicultores</strong>, que cuidam da terra, e os{" "}
                <strong>chocolateiros</strong>, que transformam o fruto em arte.
              </Trans>
            </p>
          </div>
        </div>
      </section>

      <section className='secao-destaques'>
        <div className='destaques-grid'>
          <div className='destaque-item'>
            <IconeRanking />
            <h3>{t("ourStory.destaques.potenciaNacional.title")}</h3>
            <p>{t("ourStory.destaques.potenciaNacional.text")}</p>
          </div>
          <div className='destaque-item'>
            <IconeTerritorio />
            <h3>{t("ourStory.destaques.presencaEstadual.title")}</h3>
            <p>{t("ourStory.destaques.presencaEstadual.text")}</p>
          </div>
          <div className='destaque-item'>
            <IconeMeta />
            <h3>{t("ourStory.destaques.visaoFuturo.title")}</h3>
            <p>{t("ourStory.destaques.visaoFuturo.text")}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default OurStory;
