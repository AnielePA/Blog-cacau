import "./artigoUEBruxelas.css";
import ProgressBar from "./ProgressBar";
import estevamFernandesImg from "../../../assets/images/conexao-verde1.jpeg";
import discursoImg from "../../../assets/images/conexao-verde2.jpeg";
import fotoComRepresentantesImg from "../../../assets/images/conexao-verde3.jpeg";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";

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

function ArtigoUEBruxelas() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section className='artigo-page-ig'>
      <ProgressBar />
      <header className='artigo-header-ig'>
        <div className='artigo-header-ig__overlay'></div>
        <button
          onClick={() => navigate(-1)}
          className='back-button-artigo'
          aria-label={t("artigoUEBruxelasPage.backButtonAriaLabel")}
        >
          <ChevronLeftIcon />
        </button>

        <div className='artigo-header-ig__content'>
          <div className='header-main-row'>
            <div className='artigo-header-ig__text'>
              <h1 className='artigo-header-ig__title'>
                {t("artigoUEBruxelasPage.headerTitle")}
              </h1>

              <p className='artigo-header-ig__subtitle'>
                {t("artigoUEBruxelasPage.headerSubtitle")}
              </p>
            </div>

            <div className='artigo-header-ig__logo-wrapper'>
              <img
                src={estevamFernandesImg}
                alt={t("artigoUEBruxelasPage.logoAlt")}
                className='artigo-header-ig__logo'
              />
            </div>
          </div>

          <div className='artigo-header-ig__meta'>
            <span>
              <AuthorIcon /> {t("artigoUEBruxelasPage.metaAuthor")}
            </span>

            <span>
              <ClockIcon /> {t("artigoUEBruxelasPage.metaReadingTime")}
            </span>
          </div>
        </div>
      </header>
      <main className='artigo-body-ig'>
        <p>
          <Trans i18nKey='artigoUEBruxelasPage.paragrafo1'>
            {" "}
            No mês de <strong>junho</strong>, chegou ao fim o emblemático
            projeto da União Europeia, <strong>AL-INVEST Verde</strong>, que
            atuou na América Latina nos últimos anos como um forte
            incentivador da sustentabilidade nos âmbitos público e privado.
            Para marcar o fim dessa fase, representantes da União Europeia e
            de diversos países da América Latina se reuniram em{" "}
            <strong>Bruxelas, na Bélgica</strong>, no evento intitulado{" "}
            <strong>Conexão Verde</strong>, com o objetivo de discutir os
            resultados alcançados com o projeto, assim como sobre futuras
            parcerias, investimentos e possíveis novos programas.{" "}
          </Trans>
        </p>

        <p>
          <Trans i18nKey='artigoUEBruxelasPage.paragrafo2'>
            {" "}
            Os representantes dos setores público e privado da{" "}
            <strong>agroindústria brasileira</strong> tiveram a oportunidade
            de compartilhar com os demais representantes mundiais suas
            vivências, ideias e planejamentos, além dos resultados obtidos com
            o apoio do projeto AL-INVEST Verde, trazendo, assim, os holofotes
            internacionais para a crescente produção brasileira alinhada aos
            princípios da <strong>sustentabilidade</strong> defendidos pelos
            projetos da União Europeia.{" "}
          </Trans>
        </p>

        <figure className='imagem-larga'>
          <img
            src={fotoComRepresentantesImg}
            alt={t("artigoUEBruxelasPage.imageAlt1")}
          />
        </figure>

        <p>
          <Trans i18nKey='artigoUEBruxelasPage.paragrafo3'>
            {" "}
            Em Rondônia, o AL-INVEST Verde, juntamente com a cooperação do{" "}
            <strong>SEBRAE</strong>, promoveu ações visando o fortalecimento
            da produção de cacau oriunda principalmente da{" "}
            <strong>agricultura familiar</strong>, ampliando os aspectos
            sustentáveis da produção do cacau nativo da região amazônica. Em{" "}
            <strong>2024</strong>, foram destinados cerca de{" "}
            <strong>300 mil euros</strong> em investimentos no segmento do
            cacau de Rondônia, com o objetivo de favorecer pequenos e médios
            produtores.{" "}
          </Trans>
        </p>

        <p>
          <Trans i18nKey='artigoUEBruxelasPage.paragrafo4'>
            {" "}
            <strong>Estevam Fernandes</strong>, presidente da CACAURON, marcou
            presença no evento Conexão Verde, representando a Indicação
            Geográfica <strong>“Rondônia Cacau”</strong>, no qual participou
            do fórum dedicado exclusivamente para representantes da
            agroindústria brasileira. Nesta oportunidade, expressou os seus
            agradecimentos ao projeto AL-INVEST Verde e ao SEBRAE por
            impulsionarem a produção cacaueira rondoniense nos últimos anos.
            Relatou como a valorização por meio da IG tem proporcionado uma{" "}
            <strong> agregação de valor e competitividade</strong> a toda a
            produção de cacau de Rondônia, abrindo portas na indústria e
            criando uma forte parceria com o mercado.{" "}
          </Trans>
        </p>

        <figure>
          <img
            src={estevamFernandesImg}
            alt={t("artigoUEBruxelasPage.imageAlt2")}
          />
          <figcaption>{t("artigoUEBruxelasPage.figcaption2")}</figcaption>
        </figure>

        <p>
          <Trans i18nKey='artigoUEBruxelasPage.paragrafo5'>
            {" "}
            Estevam Fernandes também deu ênfase à{" "}
            <strong> produção sustentável e livre de desmatamento</strong>, em
            que o cacau é cultivado e produzido no estado, afirmando que a
            produção enfrenta pouquíssimos problemas ambientais e sociais
            graças ao entendimento do que é sustentabilidade. Conhecimento
            este que os produtores associados adquiriram nesses últimos anos
            com a ajuda do SEBRAE e do fundo europeu. E completou dizendo que
            muitos dos produtores ainda receberão{" "}
            <strong> assistência técnica</strong> e conhecimento das práticas
            sustentáveis alinhadas com os princípios da União Europeia, a fim
            de acessar novos mercados com estes produtos que serão
            cultivados.{" "}
          </Trans>
        </p>

        <figure>
          <img
            src={discursoImg}
            alt={t("artigoUEBruxelasPage.imageAlt3")}
          />
        </figure>

        <p>
          <Trans i18nKey='artigoUEBruxelasPage.paragrafo6'>
            {" "}
            Esta parceria da CACAURON e do SEBRAE, juntamente com o AL-INVEST
            Verde, trouxe resultados claros e expressivos, que colaboraram
            para a expansão em <strong>produtividade, qualidade</strong> e
            tecnologias aplicadas na indústria cacaueira no estado. Parcerias
            como esta proporcionam grandes avanços para o futuro e abrem
            margem para que novos projetos possam ser firmados entre a
            CACAURON, o SEBRAE e o fundo europeu, que se mostrou um grande
            aliado para os produtores. Almejando um futuro de ampliação da
            produção e com grandes conquistas como metas a serem alcançadas, a
            CACAURON se mostra grata por ter parceiros que colaboram para a{" "}
            <strong> expansão da indústria de cacau em Rondônia</strong>.{" "}
          </Trans>
        </p>
      </main>
    </section>
  );
}

export default ArtigoUEBruxelas;
