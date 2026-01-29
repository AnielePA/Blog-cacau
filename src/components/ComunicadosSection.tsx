import './comunicadosSection.css';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, MegaphoneIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function ComunicadosSection() {
      const sectionRef = useScrollAnimation();
    const { t } = useTranslation();

  return (
    <section ref={sectionRef} className="home-comunicados-section">
      <div className="container">
        
        {/* Bloco de Texto */}
        <div className="content">
          <h2>
            {t('comunicadosHome.comunicadosCta.title', 'Transparência e Compromisso')}
          </h2>
          <p>
            {t('comunicadosHome.comunicadosCta.description', 'Acompanhe os posicionamentos oficiais, notas e comunicados importantes da Cacauron para o setor produtivo.')}
          </p>
        </div>

        {/* Botão de Ação */}
        <Link to="/comunicados" className="cta-button">
          <MegaphoneIcon size={20} /> 
          <span>
            {t('comunicadosHome.comunicadosCta.button', 'Ver Comunicados Oficiais')}
          </span>
          <ArrowRightIcon size={20} />
        </Link>

      </div>
    </section>
  );
}

export default ComunicadosSection;