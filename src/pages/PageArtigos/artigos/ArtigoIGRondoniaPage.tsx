import "./artigoIGRondoniaPage.css";
import ProgressBar from "./ProgressBar";
import mapaIg from "../../../assets/images/mapa-ig.png";
import seloIG from "../../../assets/images/logoIgRondonia.png";
import biomaImg from "../../../assets/images/bioma-amazonia-img.png";
import cacauImg from "../../../assets/images/cacau-para-artigo.png";
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

function ArtigoIGRondoniaPage() {
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
          aria-label={t("artigoIGRondoniaPage.backButtonAriaLabel")}
        >
          <ChevronLeftIcon />
        </button>

        <div className='artigo-header-ig__content'>
          <div className='header-main-row'>
            <div className='artigo-header-ig__text'>
              <h1 className='artigo-header-ig__title'>
                {t("artigoIGRondoniaPage.headerTitle")}
              </h1>

              <p className='artigo-header-ig__subtitle'>
                {t("artigoIGRondoniaPage.headerSubtitle")}
              </p>
            </div>

            <div className='artigo-header-ig__logo-wrapper'>
              <img
                src={seloIG}
                alt={t("artigoIGRondoniaPage.logoAlt")}
                className='artigo-header-ig__logo'
              />
            </div>
          </div>

          <div className='artigo-header-ig__meta'>
            <span>
              <AuthorIcon /> {t("artigoIGRondoniaPage.metaAuthor")}
            </span>

            <span>
              <ClockIcon /> {t("artigoIGRondoniaPage.metaReadingTime")}
            </span>
          </div>
        </div>
      </header>
      <main className='artigo-body-ig'>
        <p>
          <Trans i18nKey='artigoIGRondoniaPage.paragrafo1'>
            {" "}
            O cacau produzido em Rondônia é{" "}
            <strong>sinônimo de qualidade</strong> . O setor cacaueiro está em
            constante expansão no estado, tendo ao seu lado uma grande
            associação que engloba{" "}
            <strong> cacauicultores e chocolateiros</strong> em prol do setor e
            de seus produtores. Chamando cada vez mais a atenção nacional, seja
            pelo mercado consumidor ou através de concursos de qualidade, a
            excelência da produção de cacau e chocolate tem como base a proteção
            de sua <strong> identidade regional</strong>, que possui o seu
            próprio selo comprovando a sua procedência excepcional.{" "}
          </Trans>
        </p>

        <p>
          <Trans i18nKey='artigoIGRondoniaPage.paragrafo2'>
            {" "}
            A <strong>CACAURON</strong> (Associação de Cacauicultores e
            Chocolateiros de Rondônia) com fundação em{" "}
            <strong> 20 de agosto de 2021</strong>, surgiu com o objetivo de
            reunir cacauicultores e chocolateiros em uma mesma associação, sendo
            a <strong> única do país</strong> a englobar as duas esferas da
            produção do cacau. Levantando a bandeira da{" "}
            <strong> produção sustentável</strong> e do apoio ao estudo e
            pesquisa, a meta da CACAURON é proteger e promover a{" "}
            <strong> identidade geográfica</strong> do cacau de Rondônia;
            preservando aspectos culturais da região ao mesmo tempo em que busca
            elevar ainda mais o nível de excelência do produto. A CACAURON atua
            como a representante do setor cacaueiro junto aos governos federal,
            estadual e municipal, buscando dar a visibilidade necessária ao
            setor e também defendê-lo quando necessário.{" "}
          </Trans>
        </p>

        <figure className='imagem-larga'>
          <img src={mapaIg} alt={t("artigoIGRondoniaPage.imageAlt1")} />
          <figcaption>{t("artigoIGRondoniaPage.figcaption1")}</figcaption>
        </figure>

        <p>
          <Trans i18nKey='artigoIGRondoniaPage.paragrafo3'>
            {" "}
            No dia <strong>14 de novembro de 2023</strong>, a pedido da
            CACAURON, foi concedido ao estado de Rondônia pelo{" "}
            <strong>
              {" "}
              Instituto Nacional da Propriedade Industrial (INPI)
            </strong>
            , o registro de <strong>Indicação Geográfica</strong> na categoria{" "}
            <strong> Indicação de Procedência</strong> para o produto{" "}
            <strong> “Cacau em amêndoas – Theobroma cacao”</strong>, com sua
            delimitação geográfica abrangendo{" "}
            <strong> todos os municípios do estado</strong>. A certificação
            ocorreu através de diversas visitas que aconteceram em anos
            anteriores tendo como objetivo comprovar a qualidade única do cacau
            proveniente do estado de Rondônia.{" "}
          </Trans>
        </p>

        <p>
          <Trans i18nKey='artigoIGRondoniaPage.paragrafo4'>
            {" "}
            Segundo o SEBRAE, o título de Indicação Geográfica (também conhecido
            pela sigla IG) indica as origens geográficas da produção do produto,
            os distinguindo, assim, de outros produtos presentes no mercado,
            pois certa origem pode indicar{" "}
            <strong>características únicas</strong> que só são observadas em
            produtos oriundos de tal região. No caso do cacau de Rondônia, as
            suas particularidades se dão ao estarem adaptados ao{" "}
            <strong> bioma amazônico</strong>, que possui a combinação perfeita
            entre fatores climáticos, relevo e solos, criando um fruto{" "}
            <strong> rico em gorduras</strong> excelente para a produção de
            chocolates com consistências únicas e diversas; um{" "}
            <strong> sabor diferenciado</strong> que já foi comprovado em escala
            nacional através de concursos.{" "}
          </Trans>
        </p>

        <figure>
          <img src={cacauImg} alt={t("artigoIGRondoniaPage.imageAlt2")} />
          <figcaption>{t("artigoIGRondoniaPage.figcaption2")}</figcaption>
        </figure>

        <p>
          <Trans i18nKey='artigoIGRondoniaPage.paragrafo5'>
            {" "}
            Sendo a detentora do título <strong>IG “Rondônia Cacau”</strong>, a
            CACAURON busca zelar pela <strong>excelência de qualidade</strong>{" "}
            do cacau no estado, pois para receberem o selo IG de indicação de
            procedência em sua produção, os produtores devem cumprir{" "}
            <strong> requisitos de qualidade</strong> para se adequarem aos
            padrões condizentes com os níveis de excelência que foram
            verificados pelo INPI ao conceder o registro para o estado. Ao
            administrar e proteger a denominação, a CACAURON se certifica em
            firmar o compromisso do estado para com o mercado, sempre entregando
            níveis de excelência na produção tanto do cacau quanto do chocolate.{" "}
          </Trans>
        </p>

        <p>
          <Trans i18nKey='artigoIGRondoniaPage.paragrafo6'>
            {" "}
            Rondônia, atualmente, é o{" "}
            <strong> 4° maior estado em produção de cacau</strong> do país,
            tendo como meta a expansão de sua produção em incríveis{" "}
            <strong> 3 vezes</strong> nos próximos anos de acordo com o
            Planejamento Estratégico da Cadeia produtiva do Cacau que está em
            construção com o Incentivo do <strong>SEBRAE</strong> e de entidades
            dos setores do governo estadual. Com este apoio, a CACAURON busca
            promover suas iniciativas com foco na{" "}
            <strong> produção sustentável</strong>, trazendo oportunidades
            únicas para os produtores de cacau. Impulsionando, assim, o setor a
            crescer. Porém, este crescimento não colocará em risco o meio
            ambiente nem a cultura de plantio local, pois o objetivo é conciliar
            o <strong> desenvolvimento com a identidade regional</strong>;
            criando uma cultura única que irá tanto exportar quanto produzir
            produtos destinados ao mercado interno de Rondônia, tudo isso ao
            mesmo tempo em que luta pela{" "}
            <strong>preservação do bioma amazônico</strong>.{" "}
          </Trans>
        </p>

        <figure>
          <img src={biomaImg} alt={t("artigoIGRondoniaPage.imageAlt3")} />
          <figcaption>{t("artigoIGRondoniaPage.figcaption3")}</figcaption>
        </figure>

        <p>
          <Trans i18nKey='artigoIGRondoniaPage.paragrafo7'>
            {" "}
            No cenário nacional, produtores do estado ganharam notoriedade ao
            longo dos últimos anos em concursos de qualidade e sustentabilidade,
            tendo como ápice o ano de <strong>2023</strong> quando no{" "}
            <strong> Concurso Nacional de Cacau Especial do Brasil</strong> dois
            produtores orgulharam o estado, sendo eles: o produtor{" "}
            <strong> Robson Tomaz de Castro</strong> que conquistou o{" "}
            <strong> primeiro lugar</strong> na categoria Mistura e o produtor{" "}
            <strong> Deoclides Pires da Silva</strong> que conquistou o{" "}
            <strong> primeiro lugar</strong> na categoria Varietal (vale
            ressaltar que em 2022 este mesmo produtor havia ficado em primeiro
            lugar no pódio do concurso nesta mesma categoria). No ano de{" "}
            <strong> 2024</strong>, o produtor{" "}
            <strong>Mauro Celso Tauffer</strong>, conseguiu a façanha de ficar
            em <strong>3° e em 2° lugar</strong> no concurso nas categorias
            Varietal e Mistura, respectivamente.{" "}
          </Trans>
        </p>

        <p>
          <Trans i18nKey='artigoIGRondoniaPage.paragrafo8'>
            {" "}
            No dia <strong>06 de dezembro de 2025</strong>, ocorrerá a{" "}
            <strong> 7° edição</strong> do Concurso Nacional de Cacau Especial
            do Brasil, sendo o munícipio de <strong>Cacoal</strong> o anfitrião
            desta edição. Com Rondônia liderando entre todos os estados o número
            de amostras totais enviadas, o anúncio dos finalistas contou com{" "}
            <strong> cinco produtores rondonienses</strong> indicados em ambas
            as categorias da premiação (três na categoria Varietal e dois na
            categoria Mistura). Assim como nos anos anteriores, Rondônia promete
            estar mais uma vez presente no pódio do concurso, demonstrando como
            a produção de cacau está em uma crescente imparável de boas
            administrações, ações e desenvolvimento deste setor tão rico para a
            população rondoniense.{" "}
          </Trans>
        </p>
      </main>
    </section>
  );
}

export default ArtigoIGRondoniaPage;
