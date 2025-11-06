import "./agendaEventospage.css";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import EventoCard, { type Evento } from "./EventoCard";
import { useTranslation } from "react-i18next";

const CalendarIconTitle = () => (
  <svg
    width='38'
    height='38'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    style={{ marginLeft: "12px", verticalAlign: "middle" }}
  >
    {" "}
    <rect x='3' y='4' width='18' height='18' rx='2' ry='2'></rect>{" "}
    <line x1='16' y1='2' x2='16' y2='6'></line>{" "}
    <line x1='8' y1='2' x2='8' y2='6'></line>{" "}
    <line x1='3' y1='10' x2='21' y2='10'></line>{" "}
  </svg>
);

function AgendaEventosPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  const eventosData: Evento[] = [
    {
      id: 1,
      jsonKey: "concursoNacional",
      data: "2025-12-06",
      local: "Cacoal Selva Park, Cacoal - RO",
      imagemUrl:
        "https://placehold.co/800x400/7d4c3b/FFFFFF?text=Concurso+Nacional",
      link: "https://rondonia.ro.gov.br/pela-primeira-vez-rondonia-sedia-concurso-nacional-de-cacau-e-reune-produtores-de-todo-o-brasil/",
      linkTextoChave: "agendaEventosPage.eventos.concursoNacional.botaoCard",
    },
    {
      id: 2,
      jsonKey: "concacau",
      data: "2025-11-24",
      local: "Prime House, em Ji-Paraná - RO",
      imagemUrl: "https://placehold.co/800x400/49190f/FFFFFF?text=Concacau",
      link: "https://www.instagram.com/reel/DQKywE0EeN5/?utm_source=ig_web_copy_link",
      linkTextoChave: "agendaEventosPage.eventos.concacau.botaoCard",
    },
  ];

  const proximosEventos = eventosData
    .filter((evento) => new Date(evento.data) >= hoje)
    .sort((a, b) => new Date(a.data).getTime() - new Date(b.data).getTime());

  const eventosPassados = eventosData
    .filter((evento) => new Date(evento.data) < hoje)
    .sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());

  return (
    <section className='agenda-page'>
      <header className='agenda-header'>
        <button
          onClick={() => navigate(-1)}
          className='back-button-agenda'
          aria-label={t("agendaEventosPage.backButtonAriaLabel")}
        >
          <ChevronLeftIcon />
        </button>

        <h1 className='agenda-header__title'>
          {t("agendaEventosPage.headerTitle")}
          <CalendarIconTitle />
        </h1>

        <p className='agenda-header__subtitle'>
          {t("agendaEventosPage.headerSubtitle")}
        </p>
      </header>

      <main className='timeline-container'>
        <section>
          <h2 className='timeline-section-title'>
            {t("agendaEventosPage.proximosEventosTitle")}
          </h2>

          {proximosEventos.length > 0 ? (
            proximosEventos.map((evento) => (
              <EventoCard
                key={evento.id}
                evento={evento}
                isPast={false}
                t={t}
              />
            ))
          ) : (
            <p style={{ textAlign: "center", fontFamily: "var(--font-body)" }}>
              {t("agendaEventosPage.semProximosEventos")}{" "}
            </p>
          )}
        </section>

        <section style={{ marginTop: "4rem" }}>
          <h2 className='timeline-section-title'>
            {t("agendaEventosPage.eventosAnterioresTitle")}
          </h2>

          {eventosPassados.length > 0 ? (
            eventosPassados.map((evento) => (
              <EventoCard key={evento.id} evento={evento} isPast={true} t={t} />
            ))
          ) : (
            <p style={{ textAlign: "center", fontFamily: "var(--font-body)" }}>
              {t("agendaEventosPage.semEventosAnteriores")}
            </p>
          )}
        </section>
      </main>
    </section>
  );
}

export default AgendaEventosPage;
