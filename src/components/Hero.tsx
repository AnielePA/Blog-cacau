import "./hero.css";
import { useTranslation } from "react-i18next";
import capa from "../assets/images/FOTO---CACAU.webp";

function Hero() {
  const { t } = useTranslation();

  return (
    <section id='hero'>
      <img
        src={capa}
        alt={t("hero.imageAlt")}
        className='imagem-de-fundo'
      ></img>
      <div>
        <h1 className='hero-title'>{t("hero.title")}</h1>
        <p>{t("hero.description")}</p>
        <a href='#our-story' className='hero-button'>
          {t("hero.buttonText")}
        </a>
      </div>
    </section>
  );
}

export default Hero;
