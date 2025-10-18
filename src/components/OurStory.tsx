import "./ourStory.css";
import cacauImage from "../assets/images/STE-2.png";
import rondoniaCacau from "../assets/images/selo-rondonia-cacau.jpg";
import colhendoCacau from "../assets/images/STE-1.png";
import { useImageModal } from "../hooks/useImageModal";
import ImageModal from "./ImageModal";

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
    <path d='M6 9H4.5a2.5 2.5 0 0 1 0-5H6' />
    <path d='M18 9h1.5a2.5 2.5 0 0 0 0-5H18' />
    <path d='M4 22h16' />
    <path d='M10 22V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v15' />
    <path d='M10 5V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1' />
    <path d='M14 22V5a2 2 0 0 0-2-2h-4' />
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
    <path d='M21 3l-6.5 18a.55.55 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1L21 3z' />
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
    <path d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z' />
    <path d='m9 12 2 2 4-4' />
  </svg>
);
function OurStory() {
  const { modalImage, openModal, closeModal } = useImageModal();

  return (
    <main className='historia-v2-container' id='our-story'>
      <header className='header-historia-container'>
        <div className='header-historia'>
          <h2>Nossa História, Nossas Raízes 🌱</h2>
          <p>
            Somos a voz do cacau de Rondônia, um movimento que celebra nossa
            origem, protege nosso legado e trabalha por um futuro onde cada
            amêndoa seja sinônimo de excelência, respeito e prosperidade.
          </p>
        </div>
      </header>

      <section className='secao-conteudo'>
        <div className='bloco-alternado'>
          <div className='bloco-imagem'>
            <img
              src={cacauImage}
              alt='Produtores de cacau em reunião de planejamento'
              onClick={() => openModal(cacauImage)}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className='bloco-texto'>
            <h3>A Semente da Mudança</h3>
            <p>
              Nossa jornada começou a florescer a partir do projeto{" "}
              <strong>"Cacau Sustentável"</strong>, uma iniciativa visionária em
              parceria com o SEBRAE Rondônia. Foi esse apoio inicial, somado a
              diagnósticos precisos e ao esforço conjunto de produtores, que
              pavimentou o caminho para a criação da Cacauron.
            </p>
            <p>
              O objetivo sempre foi claro: fomentar a cadeia produtiva, garantir
              mais qualidade de vida para as famílias do campo e revelar ao
              mundo a verdadeira identidade e o potencial da cacauicultura
              rondoniense. Em <strong>20 de agosto de 2021</strong>, esse sonho
              se tornou realidade.
            </p>
          </div>
        </div>

        <div className='bloco-alternado reverso'>
          <div className='bloco-imagem'>
            <img
              src={rondoniaCacau}
              alt='Amêndoas de cacau com o selo Rondônia Cacau'
              onClick={() => openModal(rondoniaCacau)}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className='bloco-texto'>
            <h3>Um Selo de Excelência e Identidade</h3>
            <p>
              O coração da nossa missão é a promoção e a proteção da{" "}
              <strong>Indicação de Procedência "Rondônia Cacau"</strong>. Este
              não é apenas um selo, mas a certificação de uma herança. Ele
              atesta a origem, a qualidade superior e a autenticidade de um
              cacau que carrega as características únicas do nosso terroir
              amazônico.
            </p>
            <p>
              A Cacauron é a guardiã desta designação, assegurando que cada
              produto que leva essa marca cumpra rigorosos padrões de
              excelência, refletindo o compromisso dos nossos associados com
              práticas sustentáveis e com a valorização da cultura local.
            </p>
          </div>
        </div>
        <div className='bloco-alternado'>
          <div className='bloco-imagem'>
            <img
              src={colhendoCacau}
              alt='Produtor de cacau celebrando premiação'
              onClick={() => openModal(colhendoCacau)}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className='bloco-texto'>
            <h3>Um Fruto de Qualidade Reconhecida</h3>
            <p>
              O cacau de Rondônia não é apenas promissor, é uma realidade
              premiada. A qualidade diferenciada de nossas amêndoas, resultado
              de um manejo cuidadoso e de um terroir favorável, já foi celebrada
              e reconhecida em importantes concursos nacionais. Este
              reconhecimento é o motor que nos impulsiona a buscar voos ainda
              mais altos.
            </p>
            <p>
              Somos uma organização pioneira no Brasil, a única a abraçar em uma
              só entidade os dois elos fundamentais desta cadeia: os{" "}
              <strong>cacauicultores</strong>, que cuidam da terra, e os{" "}
              <strong>chocolateiros</strong>, que transformam o fruto em arte.
            </p>
          </div>
        </div>
      </section>

      <section className='secao-destaques'>
        <div className='destaques-grid'>
          <div className='destaque-item'>
            <IconeRanking />
            <h3>Potência Nacional</h3>
            <p>Já figuramos como o 4º maior produtor de cacau do Brasil.</p>
          </div>
          <div className='destaque-item'>
            <IconeTerritorio />
            <h3>Presença Estadual</h3>
            <p>
              A produção de cacau está presente em pelo menos 90% do nosso
              território.
            </p>
          </div>
          <div className='destaque-item'>
            <IconeMeta />
            <h3>Visão de Futuro</h3>
            <p>
              Temos a meta ambiciosa de triplicar nossa produção com foco em
              sustentabilidade.
            </p>
          </div>
        </div>
      </section>

      <ImageModal modalImage={modalImage} closeModal={closeModal} />
    </main>
  );
}

export default OurStory;
