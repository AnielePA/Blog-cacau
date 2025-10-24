import "./chamadaListasSection.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import associadosImg from "../assets/images/lista-chamada-associados.png";
import diretoriaImg from "../assets/images/lista-chamada-diretoria.png";

const ArrowRightIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    style={{ marginLeft: "8px" }}
  >
    <line x1='5' y1='12' x2='19' y2='12'></line>
    <polyline points='12 5 19 12 12 19'></polyline>
  </svg>
);

function ChamadaListasSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section className='chamada-section'>
      <div
        ref={sectionRef as React.Ref<HTMLDivElement>}
        className='chamada-content'
      >
        <h2 className='chamada-section__title'>Conheça Nossa Comunidade</h2>
        <div className='chamada-grid'>
          <div className='chamada-card'>
            <img
              src={associadosImg}
              alt='Cacauicultores e chocolateiros da Cacauron'
              className='chamada-card__imagem'
            />
            <div className='chamada-card__conteudo'>
              <h3 className='chamada-card__titulo'>Nossos Associados</h3>
              <p className='chamada-card__texto'>
                O coração da Cacauron é formado por homens e mulheres
                apaixonados. Conheça os cacauicultores e chocolateiros que fazem
                a diferença.
              </p>
              <a href='/associados' className='chamada-card__botao'>
                Ver Associados <ArrowRightIcon />
              </a>
            </div>
          </div>

          <div className='chamada-card'>
            <img
              src={diretoriaImg}
              alt='Diretoria da Cacauron reunida'
              className='chamada-card__imagem'
            />
            <div className='chamada-card__conteudo'>
              <h3 className='chamada-card__titulo'>Nossa Diretoria</h3>
              <p className='chamada-card__texto'>
                Conheça as lideranças que guiam nossa associação com visão
                estratégica, compromisso e dedicação ao futuro do cacau de
                Rondônia.
              </p>
              <a href='/diretoria' className='chamada-card__botao'>
                Conhecer a Diretoria <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChamadaListasSection;
