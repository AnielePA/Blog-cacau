import React, { useState, useEffect, useCallback } from "react";
import "./noticiasSection.css";
import CacauronESedec from "../assets/images/images-noticias/cacauron-e-sedec.png";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface NewsItem {
  id: number;
  image: string;
  title: string;
  intro: string;
  link: string;
  buttonText: string;
}

interface NewsSlideProps {
  slide: NewsItem;
  isActive: boolean;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    image: CacauronESedec,
    title: "Cacauron e SEDEC: Parceria pelo futuro do cacau.",
    intro:
      "A Cacauron apresenta o Termo de Cooperação com a SEDEC, para firmar parceria e fomentar a cacauicultura no estado de Rondônia!",
    link: "https://www.instagram.com/p/DPUDGHMDlBo/?utm_source=ig_web_copy_link&igsh=YjV0NXoxM3lhdG9q",
    buttonText: "Veja a Publicação",
  },
  // {
  //   id: 2,
  //   image: "https://placehold.co/1200x800/D97706/FFFFFF?text=Cacauron+na+Mídia",
  //   title: "Cacauron é Destaque em Matéria Sobre Sustentabilidade",
  //   intro:
  //     "Nossas práticas de cultivo sustentável e o impacto positivo na comunidade foram reconhecidos nacionalmente.",
  //   link: "#",
  //   buttonText: "Leia a Matéria",
  // },
  // {
  //   id: 3,
  //   image: "https://placehold.co/1200x800/8D6E63/FFFFFF?text=Prêmio+Qualidade",
  //   title: "Nosso Cacau Conquista Prêmio de Qualidade Superior",
  //   intro:
  //     "Recebemos mais um reconhecimento pela qualidade excepcional de nossas amêndoas em concurso nacional.",
  //   link: "#",
  //   buttonText: "Saiba Mais",
  // },
];

const NewsSlide: React.FC<NewsSlideProps> = ({ slide, isActive }) => (
  <div className={`news-slide ${isActive ? "active" : ""}`}>
    <img src={slide.image} alt={slide.title} className='news-slide__bg-image' />
    <div className='news-slide__overlay'></div>
    <div className='news-slide__content'>
      <h3 className='news-slide__title'>{slide.title}</h3>
      <p className='news-slide__intro'>{slide.intro}</p>
      <a
        href={slide.link}
        target='_blank'
        rel='noopener noreferrer'
        className='news-slide__button'
      >
        {slide.buttonText}
      </a>
    </div>
  </div>
);

function NoticiasSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useScrollAnimation();

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % newsData.length);
  }, []);

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + newsData.length) % newsData.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section ref={sectionRef} className='noticias-section' id='noticias'>
      <header className='noticias-section__header'>
        <h2 className='noticias-section__title'>
          Fique por Dentro das Novidades
        </h2>
        <p className='noticias-section__intro'>
          Acompanhe aqui as últimas notícias, lançamentos e conquistas da
          Cacauron. Conecte-se com a nossa jornada e com o universo do cacau de
          Rondônia.
        </p>
      </header>

      <div className='noticias-slider'>
        {newsData.map((slide, index) => (
          <NewsSlide
            key={slide.id}
            slide={slide}
            isActive={index === activeIndex}
          />
        ))}

        <button
          onClick={prevSlide}
          className='slider-nav prev'
          aria-label='Notícia anterior'
        >
          <svg
            viewBox='0 0 24 24'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <polyline points='15 18 9 12 15 6'></polyline>
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className='slider-nav next'
          aria-label='Próxima notícia'
        >
          <svg
            viewBox='0 0 24 24'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <polyline points='9 18 15 12 9 6'></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
}

export default NoticiasSection;
