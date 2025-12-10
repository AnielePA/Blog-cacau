import "./artigoConcursoNacionalCacau.css";
import { Camera, Award, ExternalLink } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";
import ProgressBar from "./ProgressBar";
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import eventoImage from "../../../assets/images/CACAU-030.webp";

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

function ArtigoConcursoNacionalCacau() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <article className='article-container'>
      <ProgressBar />
      <header>
        <button
          onClick={() => navigate(-1)}
          className='back-button-artigo2'
          aria-label={t("artigoIGRondoniaPage.backButtonAriaLabel")}
        >
          <ChevronLeftIcon />
        </button>
        <h1>
          <Trans i18nKey='artigo.titulo'>
            Rondônia Brilha no Cenário Nacional: Confira os Vencedores do VII
            Concurso Nacional de Cacau Especial
          </Trans>
        </h1>
        <div className='subtitle'>
          <Trans i18nKey='artigo.subtitulo'>
            Evento realizado no Cacoal Selva Park reuniu mais de 500 pessoas e
            consagrou produtores de Rondônia e do Pará.
          </Trans>
        </div>

        <div className='meta-info'>
          <p>
            <AuthorIcon /> Por Cacauron
          </p>
          <p>
            <ClockIcon /> {t("artigoConcursoNacionalCacau.metaReadingTime")}
          </p>
        </div>
      </header>

      <section className='content-body'>
        <p>
          <Trans i18nKey='artigo.p1'>
            Neste último sábado (06), o estado de Rondônia confirmou seu
            protagonismo na cacauicultura brasileira ao sediar o VII Concurso
            Nacional de Cacau Especial: Sustentabilidade e Qualidade. O evento,
            que já é referência no calendário do agronegócio, transformou o
            Cacoal Selva Park em um palco de excelência, reunindo produtores,
            especialistas e autoridades do setor.
          </Trans>
        </p>

        <p>
          <Trans i18nKey='artigo.p2'>
            A cerimônia teve início às 18h30 e contou com um público expressivo
            de mais de 500 pessoas. A programação foi desenhada para celebrar
            toda a cadeia produtiva, unindo conhecimento técnico e valorização
            cultural. O público pôde acompanhar palestras sobre o
            desenvolvimento do setor, seguidas de um jantar de gala.
          </Trans>
        </p>

        <figure className='imagem-larga'>
          <img
            src={eventoImage}
            alt={t("artigoConcursoNacionalCacau.imageAlt")}
          />
          <figcaption>{t("artigoConcursoNacionalCacau.figcaption")}</figcaption>
        </figure>

        <p>
          <Trans i18nKey='artigo.p3'>
            A cultura rondoniense foi exaltada com uma apresentação artística
            vibrante do grupo Gavião, de Ji-Paraná, que trouxe a identidade
            local para o centro das atenções antes do momento mais aguardado da
            noite: a revelação dos melhores cacaus do Brasil.
          </Trans>
        </p>

        <h2>
          <Trans i18nKey='artigo.h2.campeoes'>Os Grandes Campeões</Trans>
        </h2>

        <p>
          <Trans i18nKey='artigo.p4'>
            A disputa foi acirrada entre os 20 finalistas, divididos igualmente
            entre as categorias. O resultado final destacou a força da produção
            da Região Norte, com produtores de Rondônia e do Pará dominando o
            pódio.
          </Trans>
        </p>

        <p>
          <Trans i18nKey='artigo.p5'>
            Na categoria Varietal, o grande destaque foi o produtor rondoniense
            Mauro Celso Tauffer, de Buritis, que conquistou o 1º lugar com a
            variedade BN34, reafirmando a qualidade genética e o manejo de
            excelência praticado no estado.
          </Trans>
        </p>

        <div className='winners-list'>
          <h3>
            <Award size={20} color='var(--cor-destaque)' />{" "}
            {t("winners.varietal")}
          </h3>
          <ul>
            <li>
              <strong>1º Lugar:</strong> Mauro Celso Tauffer (Buritis/RO) –
              Variedade BN34
            </li>
            <li>
              <strong>2º Lugar:</strong> José Batista de Souza (Uruará/PA) –
              Variedade Casca Fina
            </li>
            <li>
              <strong>3º Lugar:</strong> Luiz Anastácio da Silva (Cacoal/RO) –
              Variedade CEPEC 2022
            </li>
          </ul>

          <h3>
            <Award size={20} color='var(--cor-destaque)' /> {t("winners.blend")}
          </h3>
          <ul>
            <li>
              <strong>1º Lugar:</strong> Robson Brogni (Medicilândia/PA)
            </li>
            <li>
              <strong>2º Lugar:</strong> Gilmar Batista de Souza (Uruará/PA)
            </li>
            <li>
              <strong>3º Lugar:</strong> Miriam Aparecida Federicci
              (Medicilândia/PA)
            </li>
          </ul>
        </div>

        <h2>
          <Trans i18nKey='artigo.h2.organizacao'>
            Organização e Encerramento
          </Trans>
        </h2>

        <p>
          <Trans i18nKey='artigo.p6'>
            O sucesso do VII Concurso Nacional de Cacau Especial é fruto da
            organização do Centro de Inovação do Cacau (CIC) com a
            co-organização estratégica do Governo do Estado de Rondônia. A
            parceria garantiu que o evento não apenas superasse as expectativas
            de público, mas mantivesse o alto nível técnico e o renome que a
            competição possui nacionalmente.
          </Trans>
        </p>

        <p>
          <Trans i18nKey='artigo.p7'>
            Para fechar a noite com chave de ouro, o evento contou com um show
            da cantora Samara Ayane, celebrando a integração entre os produtores
            e o fortalecimento da cacauicultura sustentável no Brasil.
          </Trans>
        </p>

        <div className='drive-section'>
          <Camera
            size={48}
            color='var(--cor-destaque)'
            style={{ marginBottom: "1rem" }}
          />
          <h3>{t("common.accessDrive")}</h3>
          <p>{t("common.driveDescription")}</p>

          <a
            href='https://drive.google.com/drive/folders/1ukJyQLfpYfkQHr3utVbQd2_QlVJQuL56?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
            className='drive-btn'
          >
            <ExternalLink size={18} />
            {t("common.buttonText")}
          </a>
        </div>
      </section>
    </article>
  );
}

export default ArtigoConcursoNacionalCacau;
