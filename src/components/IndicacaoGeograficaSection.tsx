import "./indicacaoGeograficaSection.css";
import logoIgRondonia from "../assets/images/logoIgRondonia.png";
import mapaIg from "../assets/images/mapa-ig.png";
import producaoSustentavel from "../assets/images/imagem-site.png";
import terroirAmazonico from "../assets/images/imagem2-site.png";
import { useImageModal } from "../context/modalContext";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useTranslation, Trans } from "react-i18next";

const IconeSabor = () => (
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
    {" "}
    <path d='M8 3c-1.5 0-3 1.5-3 4v10c0 2.5 1.5 4 3 4h8c1.5 0 3-1.5 3-4V7c0-2.5-1.5-4-3-4z'></path>{" "}
    <path d='M12 3v18'></path> <circle cx='10' cy='8' r='1'></circle>{" "}
    <circle cx='14' cy='8' r='1'></circle>{" "}
    <circle cx='10' cy='12' r='1'></circle>{" "}
    <circle cx='14' cy='12' r='1'></circle>{" "}
    <circle cx='10' cy='16' r='1'></circle>{" "}
    <circle cx='14' cy='16' r='1'></circle>{" "}
  </svg>
);
const IconeQualidade = () => (
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
    {" "}
    <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'></path>{" "}
  </svg>
);
const IconeFolha = () => (
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
    {" "}
    <path d='M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z'></path>{" "}
    <path d='M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12'></path>{" "}
  </svg>
);

function IndicacaoGeograficaSection() {
  const { openModal } = useImageModal();
  const sectionRef = useScrollAnimation<HTMLDivElement>();
  const { t } = useTranslation();

  return (
    <div ref={sectionRef} className='ig-section-container' id='ig-rondonia'>
      <header className='ig-hero'>
        <div className='ig-hero-content'>
          <h2>{t("indicacaoGeografica.heroTitle")}</h2>
          <img
            src={logoIgRondonia}
            onClick={() => openModal(logoIgRondonia)}
            style={{ cursor: "pointer" }}
            alt={t("indicacaoGeografica.logoAlt")}
            className='ig-logo'
          />
        </div>
      </header>

      <section className='ig-intro'>
        <h3>{t("indicacaoGeografica.introTitle")}</h3>
        <p>
          <Trans i18nKey='indicacaoGeografica.introText1'>
            É o reconhecimento oficial da profunda conexão entre um produto de
            excelência e seu lugar de origem. Concedida ao cacau em amêndoas
            <strong> Theobroma cacao </strong> de todo o estado, esta
            certificação atesta a qualidade única e as características
            singulares que só o terroir amazônico de Rondônia pode oferecer.
          </Trans>
        </p>
        <p>{t("indicacaoGeografica.introText2")}</p>
      </section>

      <div className='ig-blocos-container'>
        <section className='ig-bloco-conteudo fundo-alternativo'>
          <div className='ig-bloco-imagem'>
            <img
              src={terroirAmazonico}
              alt={t("indicacaoGeografica.terroirAmazonico.imageAlt")}
              onClick={() => openModal(terroirAmazonico)}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className='ig-bloco-texto'>
            <h4>{t("indicacaoGeografica.terroirAmazonico.title")}</h4>
            <p>{t("indicacaoGeografica.terroirAmazonico.text1")}</p>
            <p>{t("indicacaoGeografica.terroirAmazonico.text2")}</p>
          </div>
        </section>

        <section className='ig-bloco-conteudo reverso'>
          <div className='ig-bloco-imagem'>
            <img
              src={producaoSustentavel}
              alt={t("indicacaoGeografica.producaoSustentavel.imageAlt")}
              onClick={() => openModal(producaoSustentavel)}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className='ig-bloco-texto'>
            <h4>{t("indicacaoGeografica.producaoSustentavel.title")}</h4>
            <p>
              <Trans i18nKey='indicacaoGeografica.producaoSustentavel.text1'>
                Por ser uma planta nativa, o cacau de Rondônia é um poderoso
                aliado da preservação ambiental. Sua produção em
                <strong> Sistemas Agroflorestais (SAFs)</strong> é um dos
                maiores atributos da nossa atividade, ajudando na restauração de
                Áreas de Preservação Permanente (APPs) e Reservas Legais.
              </Trans>
            </p>
            <p>{t("indicacaoGeografica.producaoSustentavel.text2")}</p>
          </div>
        </section>
      </div>

      <section className='ig-atributos'>
        <h3>{t("indicacaoGeografica.atributos.title")}</h3>
        <div className='atributos-grid'>
          <div className='atributo-item'>
            <IconeSabor />
            <h4>{t("indicacaoGeografica.atributos.saborDistinto.title")}</h4>
            <p>{t("indicacaoGeografica.atributos.saborDistinto.text")}</p>
          </div>
          <div className='atributo-item'>
            <IconeQualidade />
            <h4>
              {t("indicacaoGeografica.atributos.qualidadeFisicoQuimica.title")}
            </h4>
            <p>
              {t("indicacaoGeografica.atributos.qualidadeFisicoQuimica.text")}
            </p>
          </div>
          <div className='atributo-item'>
            <IconeFolha />
            <h4>{t("indicacaoGeografica.atributos.sinergiaAmazonia.title")}</h4>
            <p>{t("indicacaoGeografica.atributos.sinergiaAmazonia.text")}</p>
          </div>
        </div>
      </section>

      <section className='ig-mapa-secao'>
        <h3>{t("indicacaoGeografica.mapa.title")}</h3>
        <p style={{ maxWidth: "800px", margin: "0 auto 2rem auto" }}>
          {t("indicacaoGeografica.mapa.text")}
        </p>
        <img
          src={mapaIg}
          alt={t("indicacaoGeografica.mapa.imageAlt")}
          onClick={() => openModal(mapaIg)}
          style={{ cursor: "pointer" }}
        />
      </section>
    </div>
  );
}

export default IndicacaoGeograficaSection;
