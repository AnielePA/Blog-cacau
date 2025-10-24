import "./artigoIGRondoniaPage.css";
import ProgressBar from "./ProgressBar";
import mapaIg from "../../assets/images/mapa-ig.png";
import seloIG from "../../assets/images/logoIgRondonia.png";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";


const AuthorIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    style={{ marginRight: "6px" }}
  >
    <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'></path>
    <circle cx='12' cy='7' r='4'></circle>
  </svg>
);
const ClockIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    style={{ marginRight: "6px" }}
  >
    <circle cx='12' cy='12' r='10'></circle>
    <polyline points='12 6 12 12 16 14'></polyline>
  </svg>
);

function ArtigoIGRondoniaPage() {
  const navigate = useNavigate();
  return (
    <section className='artigo-page-ig'>
      <ProgressBar />

      <header className='artigo-header-ig'>

        <div className='artigo-header-ig__overlay'></div>
        <button onClick={() => navigate(-1)} className='back-button-artigo'>
          <ChevronLeftIcon />
        </button>

        <div className='artigo-header-ig__content'>

          <div className='header-main-row'>
            <div className='artigo-header-ig__text'>
              <h1 className='artigo-header-ig__title'>
                Cacauron e a valorização da Identidade Geográfica do Cacau de
                Rondônia
              </h1>
              <p className='artigo-header-ig__subtitle'>
                Descubra como a Indicação Geográfica está redefinindo a
                qualidade e o reconhecimento do cacau produzido em nosso estado.
              </p>
            </div>

            <div className='artigo-header-ig__logo-wrapper'>
              <img
                src={seloIG}
                alt='Selo IG Rondônia'
                className='artigo-header-ig__logo'
              />
            </div>
          </div>
          <div className='artigo-header-ig__meta'>
            <span>
              <AuthorIcon /> Por Alan Reis
            </span>
            <span>
              <ClockIcon /> Aprox. 6 min de leitura
            </span>
          </div>
        </div>
      </header>

      <main className='artigo-body-ig'>

        <p>
          O cacau produzido em Rondônia é sinônimo de qualidade. O setor
          cacaueiro está em constante expansão no estado, tendo ao seu lado uma
          grande associação que engloba cacauicultores e chocolateiros em prol
          do setor e de seus produtores. Chamando cada vez mais a atenção
          nacional, seja pelo mercado consumidor ou através de concursos de
          qualidade, a excelência da produção de cacau e chocolate tem como base
          a proteção de sua identidade regional, que possui o seu próprio selo
          comprovando a sua procedência excepcional.
        </p>

        <p>
          A CACAURON (Associação de Cacauicultores e Chocolateiros de Rondônia)
          com fundação em 20 de agosto de 2021, surgiu com o objetivo de reunir
          cacauicultores e chocolateiros em uma mesma associação, sendo a única
          do país a englobar as duas esferas da produção do cacau. Levantando a
          bandeira da produção sustentável e do apoio ao estudo e pesquisa, a
          meta da CACAURON é proteger e promover a identidade geográfica do
          cacau de Rondônia; preservando aspectos culturais da região ao mesmo
          tempo em que busca elevar ainda mais o nível de excelência do produto.
          A CACAURON atua como a representante do setor cacaueiro junto aos
          governos federal, estadual e municipal, buscando dar a visibilidade
          necessária ao setor e também defendê-lo quando necessário, protegendo
          a identidade geográfica do cacau de Rondônia.
        </p>

        <figure className='imagem-larga'>
          <img
            src={mapaIg}
            alt='Mapa de Rondônia com a área da Indicação Geográfica'
          />
          <figcaption>
            A IG abrange todos os 52 municípios do estado, unificando a produção
            sob um selo de qualidade.
          </figcaption>
        </figure>

        <p>
          No dia 14 de novembro de 2023, a pedido da CACAURON, foi concedido ao
          estado de Rondônia pelo Instituto Nacional da Propriedade Industrial
          (INPI), o registro de Indicação Geográfica na categoria Indicação de
          Procedência para o produto “Cacau em amêndoas – Theobroma cacao”, com
          sua delimitação geográfica abrangendo todos os municípios do estado. A
          certificação ocorreu através de diversas visitas que aconteceram em
          anos anteriores tendo como objetivo comprovar a qualidade única do
          cacau proveniente do estado de Rondônia.
        </p>

        <p>
          Segundo o SEBRAE, o título de Indicação Geográfica (também conhecido
          pela sigla IG) indica as origens geográficas da produção do produto,
          os distinguindo, assim, de outros produtos presentes no mercado, pois
          certa origem pode indicar características únicas que só são observadas
          em produtos oriundos de tal região. No caso do cacau de Rondônia, as
          suas particularidades se dão ao estarem adaptados ao bioma amazônico,
          que possui a combinação perfeita entre fatores climáticos, relevo e
          solos, criando um fruto rico em gorduras excelente para a produção de
          chocolates com consistências únicas e diversas; um sabor diferenciado
          que já foi comprovado em escala nacional através de concursos.
        </p>

        <figure>
          <img
            src='https://placehold.co/800x500/49190f/FFFFFF?text=Cacau+em+SAF'
            alt='Cacaueiros crescendo em Sistema Agroflorestal'
          />
          <figcaption>
            O cultivo em SAFs é um diferencial sustentável do Cacau Rondônia.
          </figcaption>
        </figure>

        <p>
          Sendo a detentora do título IG “Rondônia Cacau”, a CACAURON
          (Associação de Cacauicultores e Chocolateiros de Rondônia) busca zelar
          pela excelência de qualidade do cacau no estado, pois para receberem o
          selo IG de indicação de procedência em sua produção, os produtores
          devem cumprir requisitos de qualidade para se adequarem aos padrões
          condizentes com os níveis de excelência que foram verificados pelo
          INPI ao conceder o registro para o estado. Ao administrar e proteger a
          denominação, a CACAURON se certifica em firmar o compromisso do estado
          para com o mercado. Sempre entregando níveis de excelência na produção
          tanto do cacau quanto do chocolate.
        </p>

        <p>
          Rondônia, atualmente, é o 4° maior estado em produção de cacau do
          país, tendo como meta a expansão de sua produção em incríveis 3 vezes
          nos próximos anos de acordo com o Planejamento Estratégico da Cadeia
          produtiva do Cacau que está em construção com o Incentivo do SEBRAE e
          de entidades dos setores do governo estadual ligadas a pesquisa,
          assistência e extensão rural. Com este apoio do SEBRAE e de outras
          secretarias, a CACAURON busca promover suas iniciativas com foco na
          produção sustentável, trazendo oportunidades únicas para os produtores
          de cacau. Impulsionando, assim, o setor a crescer. Porém, este
          crescimento não colocará em risco o meio ambiente nem a cultura de
          plantio local, pois o objetivo é conciliar o desenvolvimento com a
          identidade regional; criando uma cultura única que irá tanto exportar
          quanto produzir produtos destinados ao mercado interno de Rondônia,
          tudo isso ao mesmo tempo em que luta pela preservação do bioma
          amazônico.
        </p>

        <figure>
          <img
            src='https://placehold.co/800x500/312725/FFFFFF?text=Amêndoas+Selecionadas'
            alt='Close-up de amêndoas de cacau de alta qualidade'
          />
          <figcaption>
            Qualidade e rastreabilidade são pilares da IG Rondônia.
          </figcaption>
        </figure>

        <p>
          No cenário nacional, produtores do estado ganharam notoriedade ao
          longo dos últimos anos em concursos de qualidade e sustentabilidade,
          tendo como ápice o ano de 2023 quando no Concurso Nacional de Cacau
          Especial do Brasil dois produtores orgulharam o estado, sendo eles: o
          produtor Robson Tomaz de Castro que conquistou o primeiro lugar na
          categoria Mistura e o produtor Deoclides Pires da Silva que conquistou
          o primeiro lugar na categoria Varietal (vale ressaltar que em 2022
          este mesmo produtor havia ficado em primeiro lugar no pódio do
          concurso nesta mesma categoria). No ano de 2024, o produtor Mauro
          Celso Tauffer, conseguiu a façanha de ficar em 3° e em 2° lugar no
          concurso nas categorias Varietal e Mistura, respectivamente.
        </p>

        <p>
          No dia 06 de dezembro de 2025, ocorrerá a 7° edição do Concurso
          Nacional de Cacau Especial do Brasil, sendo o munícipio de Cacoal o
          anfitrião desta edição. Com Rondônia liderando entre todos os estados
          o número de amostras totais enviadas para submissão de analise ao
          prêmio, o anúncio dos finalistas contou com cinco produtores
          rondonienses indicados em ambas as categorias da premiação, sendo três
          produtores na categoria Varietal e dois na categoria Mistura. Assim
          como nos anos anteriores, Rondônia promete estar mais uma vez presente
          no pódio do concurso, demonstrando como a produção de cacau está em
          uma crescente imparável de boas administrações, ações e
          desenvolvimento deste setor tão rico culturalmente e socialmente para
          a população rondoniense.
        </p>
      </main>
    </section>
  );
}

export default ArtigoIGRondoniaPage;
