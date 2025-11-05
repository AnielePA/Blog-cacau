import "./parceiros.css";
import logoSebrae from "../assets/images/logo-sebrae.jpg";
import logoSicoob from "../assets/images/logo-sicoob1.jpg";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useTranslation } from "react-i18next";

function Parceiros() {
  const sectionRef = useScrollAnimation();
  const { t } = useTranslation();

  const parceirosData = [
    {
      nome: "Sebrae",
      logoUrl: logoSebrae,
      descricao: t("parceiros.sebrae.descricao"),
      logoAlt: t("parceiros.sebrae.logoAlt"),
    },
    {
      nome: "Sicoob",
      logoUrl: logoSicoob,
      descricao: t("parceiros.sicoob.descricao"),
      logoAlt: t("parceiros.sicoob.logoAlt"),
    },
  ];

  return (
    <section className='parceiros-section' id='parceiros'>
      <div
        ref={sectionRef as React.Ref<HTMLDivElement>}
        className='parceiros-content'
      >
        <h2 className='parceiros-title'>{t("parceiros.title")}</h2>
        <div className='parceiros-grid'>
          {parceirosData.map((parceiro) => (
            <div key={parceiro.nome} className='parceiro-card'>
              <img
                src={parceiro.logoUrl}
                alt={parceiro.logoAlt}
                className='parceiro-card__logo'
              />
              <p className='parceiro-card__descricao'>{parceiro.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Parceiros;
