import "./hero.css";

function Hero() {
  return (
    <section id='hero'>
      <div>
        <h1 className='hero-title'>
          CACAURON: Cultivando o Futuro do Cacau em Rondônia
        </h1>
        <p>
          A CACAURON é a união de produtores e chocolateiros que, juntos,
          cultivam a excelência e a tradição. Nosso compromisso é com a
          sustentabilidade e a qualidade, garantindo que o selo "Rondônia Cacau"
          seja a sua garantia de uma experiência inesquecível e genuína.
        </p>
        <a href='#our-story' className='hero-button'>
          Conheça Nosso Trabalho
        </a>
      </div>
    </section>
  );
}

export default Hero;
