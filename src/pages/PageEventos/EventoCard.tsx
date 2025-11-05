import "./eventoCard.css";
import { type TFunction } from "i18next";

const CalendarIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    style={{ marginRight: "8px" }}
  >
    <rect x='3' y='4' width='18' height='18' rx='2' ry='2'></rect>
    <line x1='16' y1='2' x2='16' y2='6'></line>
    <line x1='8' y1='2' x2='8' y2='6'></line>
    <line x1='3' y1='10' x2='21' y2='10'></line>
  </svg>
);
const LocationIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    style={{ marginRight: "8px" }}
  >
    <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
    <circle cx='12' cy='10' r='3'></circle>
  </svg>
);

type Evento = {
  id: number;
  data: string;
  local: string;
  imagemUrl: string;
  link?: string;
  linkTextoChave?: string;
  jsonKey: string;
};

function EventoCard({
  evento,
  isPast,
  t,
}: {
  evento: Evento;
  isPast: boolean;
  t: TFunction;
}) {
  const dataEvento = new Date(evento.data);
  dataEvento.setDate(dataEvento.getDate() + 1);
  const dataFormatada = dataEvento.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const tituloTraduzido = t(
    `agendaEventosPage.eventos.${evento.jsonKey}.titulo`
  );
  const descricaoTraduzida = t(
    `agendaEventosPage.eventos.${evento.jsonKey}.descricao`
  );

  const buttonText = evento.linkTextoChave
    ? t(evento.linkTextoChave, {
        defaultValue: evento.linkTextoChave.includes(".")
          ? ""
          : evento.linkTextoChave,
      })
    : t("agendaEventosPage.cardInscrevaSe");

  return (
    <article className={`evento-card ${isPast ? "passado" : ""}`}>
      <img
        src={evento.imagemUrl}
        alt={tituloTraduzido}
        className='evento-card__imagem'
      />

      <div className='evento-card__conteudo'>
        <div className='evento-card__meta'>
          <span>
            <CalendarIcon /> {dataFormatada}
          </span>

          <span>
            <LocationIcon /> {evento.local}
          </span>
        </div>
        <h3 className='evento-card__titulo'>{tituloTraduzido}</h3>
        <p className='evento-card__descricao'>{descricaoTraduzida}</p>
        {evento.link && buttonText && !isPast && (
          <a
            href={evento.link}
            className='evento-card__botao'
            target='_blank'
            rel='noopener noreferrer'
          >
            {buttonText}
          </a>
        )}
      </div>
    </article>
  );
}

export default EventoCard;
export type { Evento };
