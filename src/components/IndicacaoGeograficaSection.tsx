import "./indicacaoGeograficaSection.css";
import logoIgRondonia from "../assets/images/logoIgRondonia.png";
import mapaIg from "../assets/images/mapa-ig.png";
import producaoSustentavel from "../assets/images/imagem-site.png";
import terroirAmazonico from "../assets/images/imagem2-site.png";
import { useImageModal } from "../context/modalContext";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

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
    <path d='M8 3c-1.5 0-3 1.5-3 4v10c0 2.5 1.5 4 3 4h8c1.5 0 3-1.5 3-4V7c0-2.5-1.5-4-3-4z'></path>
    <path d='M12 3v18'></path>
    <circle cx='10' cy='8' r='1'></circle>
    <circle cx='14' cy='8' r='1'></circle>
    <circle cx='10' cy='12' r='1'></circle>
    <circle cx='14' cy='12' r='1'></circle>
    <circle cx='10' cy='16' r='1'></circle>
    <circle cx='14' cy='16' r='1'></circle>
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
    <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'></path>
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
    <path d='M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z'></path>
    <path d='M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12'></path>
  </svg>
);

function IndicacaoGeograficaSection() {
  const { openModal } = useImageModal();
  const sectionRef = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={sectionRef}
      className='ig-section-container'
      id='ig-rondonia'
    >
      <header className='ig-hero'>
        <div className='ig-hero-content'>
          <h2>IG Rondônia: O Selo que Garante a Origem e a Qualidade</h2>
          <img
            src={logoIgRondonia}
            onClick={() => openModal(logoIgRondonia)}
            style={{ cursor: "pointer" }}
            alt='Logo IG Rondônia Cacau'
            className='ig-logo'
          />
        </div>
      </header>

      <section className='ig-intro'>
        <h3>O que é a Indicação Geográfica "Rondônia Cacau"?</h3>
        <p>
          É o reconhecimento oficial da profunda conexão entre um produto de
          excelência e seu lugar de origem. Concedida ao cacau em amêndoas
          <strong> Theobroma cacao </strong> de todo o estado, esta certificação
          atesta a qualidade única e as características singulares que só o
          terroir amazônico de Rondônia pode oferecer.
        </p>
        <p>
          A Cacauron, como detentora oficial do registro, tem o orgulho de gerir
          e proteger este patrimônio, garantindo que cada amêndoa que carrega o
          selo represente a nossa história, sustentabilidade e paixão.
        </p>
      </section>

      <div className='ig-blocos-container'>
        <section className='ig-bloco-conteudo fundo-alternativo'>
          <div className='ig-bloco-imagem'>
            <img
              src={terroirAmazonico}
              alt='Paisagem de uma fazenda de cacau em Rondônia'
              onClick={() => openModal(terroirAmazonico)}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className='ig-bloco-texto'>
            <h4>O Terroir Amazônico: Berço de um Cacau Único</h4>
            <p>
              O cacau de Rondônia nasce no coração do bioma amazônico, moldado
              por uma combinação de fatores naturais que criam um ambiente
              perfeito para o seu desenvolvimento. O clima equatorial, com
              chuvas abundantes, temperatura média anual de 26°C e mais de cinco
              horas de sol diárias, é ideal para o cacaueiro.
            </p>
            <p>
              A planta, nativa da Amazônia, adapta-se perfeitamente aos solos
              locais, cujas características são facilmente equilibradas com
              técnicas de manejo. Cultivado predominantemente por agricultores
              familiares, nosso cacau pode ter origem seminal, clonal ou uma
              combinação de ambas, com um manejo sempre agroflorestal e
              conservacionista.
            </p>
          </div>
        </section>

        <section className='ig-bloco-conteudo reverso'>
          <div className='ig-bloco-imagem'>
            <img
              src={producaoSustentavel}
              alt='Produtor rural manuseando amêndoas de cacau'
              onClick={() => openModal(producaoSustentavel)}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className='ig-bloco-texto'>
            <h4>
              Produção Sustentável: Respeito ao Meio Ambiente e às Pessoas
            </h4>
            <p>
              Por ser uma planta nativa, o cacau de Rondônia é um poderoso
              aliado da preservação ambiental. Sua produção em
              <strong> Sistemas Agroflorestais (SAFs)</strong> é um dos maiores
              atributos da nossa atividade, ajudando na restauração de Áreas de
              Preservação Permanente (APPs) e Reservas Legais.
            </p>
            <p>
              Este modelo de cultivo protege os recursos hídricos, a paisagem e
              a biodiversidade, ao mesmo tempo que gera renda, riqueza e
              contribui para a fixação das famílias no campo, fortalecendo a
              agricultura familiar. Essa sinergia resulta em uma atividade
              eficiente e de profundo impacto positivo.
            </p>
          </div>
        </section>
      </div>

      <section className='ig-atributos'>
        <h3>Sabor e Qualidade Diferenciados</h3>
        <div className='atributos-grid'>
          <div className='atributo-item'>
            <IconeSabor />
            <h4>Sabor Distinto</h4>
            <p>
              As características do nosso terroir refletem-se em um sabor
              inconfundível e único.
            </p>
          </div>
          <div className='atributo-item'>
            <IconeQualidade />
            <h4>Qualidade Físico-Química</h4>
            <p>
              Apresenta um teor de gordura e ponto de fusão ideais para
              chocolates de alta consistência e complexidade.
            </p>
          </div>
          <div className='atributo-item'>
            <IconeFolha />
            <h4>Sinergia com a Amazônia</h4>
            <p>
              Nossa produção anda de mãos dadas com a preservação, resultando em
              uma atividade eficiente e de impacto positivo.
            </p>
          </div>
        </div>
      </section>

      <section className='ig-mapa-secao'>
        <h3>Um Selo para Todo o Estado</h3>
        <p style={{ maxWidth: "800px", margin: "0 auto 2rem auto" }}>
          A Indicação de Procedência "Rondônia Cacau" abrange a totalidade do
          estado de Rondônia, incluindo seus 52 municípios. Isso demonstra um
          compromisso coletivo e unificado de todos os nossos produtores com os
          altos padrões de qualidade, rastreabilidade e sustentabilidade que o
          selo representa.
        </p>
        <img
          src={mapaIg}
          alt='Mapa de Rondônia destacando os 52 municípios da Indicação Geográfica'
          onClick={() => openModal(mapaIg)}
          style={{ cursor: "pointer" }}
        />
      </section>
    </div>
  );
}

export default IndicacaoGeograficaSection;
