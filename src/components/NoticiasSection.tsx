import React, { useState, useEffect, useCallback, useRef } from "react";
import "./noticiasSection.css";
import CacauronESedec from "../assets/images/images-noticias/cacauron-e-sedec.png";
import RondoniaRanking from "../assets/images/images-noticias/ranking.jpg";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useScrollAnimation();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const newsData: NewsItem[] = [
    {
      id: 1,
      image: CacauronESedec,
      title: t("noticias.slides.slide1.title"),
      intro: t("noticias.slides.slide1.intro"),
      link: "https://www.instagram.com/p/DPUDGHMDlBo/?utm_source=ig_web_copy_link&igsh=YjV0NXoxM3lhdG9q",
      buttonText: t("noticias.slides.slide1.buttonText"),
    },
    {
      id: 2,
      image: RondoniaRanking,
      title: t("noticias.slides.slide2.title"),
      intro: t("noticias.slides.slide2.intro"),
      link: "https://www.instagram.com/p/DPwcIZjj_7j/?utm_source=ig_web_copy_link",
      buttonText: t("noticias.slides.slide2.buttonText"),
    },
  ];

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % newsData.length);
  }, [newsData.length]);

  const prevSlide = useCallback(() => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + newsData.length) % newsData.length
    );
  }, [newsData.length]);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeIndex, nextSlide]);

  return (
    <section ref={sectionRef} className='noticias-section' id='noticias'>
      <header className='noticias-section__header'>
        <h2 className='noticias-section__title'>{t("noticias.title")}</h2>
        <p className='noticias-section__intro'>{t("noticias.intro")}</p>
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
          aria-label={t("noticias.prevButtonAriaLabel")}
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
          aria-label={t("noticias.nextButtonAriaLabel")}
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
