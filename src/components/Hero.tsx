import "./hero.css"; 
import { useTranslation } from 'react-i18next'; 


function Hero() {
  const { t } = useTranslation();

  return (
    <section id='hero'>
      <div>
        <h1 className='hero-title'>{t('hero.title')}</h1>
        <p>{t('hero.description')}</p>
        <a href='#our-story' className='hero-button'>
          {t('hero.buttonText')}
        </a>
      </div>
    </section>
  );
}

export default Hero;
