import "./agendaEventospage.css";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import EventoCard, { type Evento } from "./EventoCard";

const CalendarIconTitle = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
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
    <rect x='3' y='4' width='18' height='18' rx='2' ry='2'></rect>
    <line x1='16' y1='2' x2='16' y2='6'></line>
    <line x1='8' y1='2' x2='8' y2='6'></line>
    <line x1='3' y1='10' x2='21' y2='10'></line>
  </svg>
);

const eventosData: Evento[] = [
  {
    id: 1,
    data: "2025-12-06",
    titulo: "7º Concurso Nacional do Cacau",
    local: "Cacoal Selva Park, Cacoal - RO",
    descricao:
      "Valorizando a produção nacional e a sustentabilidade, a final do VII Concurso Nacional de Cacau Especial celebra a qualidade do cacau brasileiro, com destaque para a força da cacauicultura rondoniense. A Cacauron, ao participar deste evento, reforça o compromisso de promover e valorizar os cacauicultores e chocolateiros da região.",
    imagemUrl:
      "https://placehold.co/800x400/7d4c3b/FFFFFF?text=Concurso+Nacional+do+Cacau",
    link: "https://rondonia.ro.gov.br/pela-primeira-vez-rondonia-sedia-concurso-nacional-de-cacau-e-reune-produtores-de-todo-o-brasil/",
    linkTexto: "",
  },
  {
    id: 2,
    data: "2025-11-24",
    titulo:
      "Concurso de Qualidade e Sustentabilidade do Cacau de Rondônia (Concacau)",
    local: "Prime House, em Ji-Paraná - RO",
    descricao:
      "O evento faz parte de um conjunto de ações que buscam o desenvolvimento da cacauicultura no estado, promovendo a qualidade do produto e a sustentabilidade da produção. O ConCacau também visa a participação em eventos nacionais, como o Concurso Nacional de Cacau Especial, onde produtores de Rondônia têm obtido destaque. ",
    imagemUrl:
      "https://placehold.co/800x400/49190f/FFFFFF?text=Workshop+Cacauron",
    link: "#",
    linkTexto: "inscreva-se",
  },
];

function AgendaEventosPage() {
  const navigate = useNavigate();
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  const proximosEventos = eventosData
    .filter((evento) => new Date(evento.data) >= hoje)
    .sort((a, b) => new Date(a.data).getTime() - new Date(b.data).getTime());

  const eventosPassados = eventosData
    .filter((evento) => new Date(evento.data) < hoje)
    .sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());

  return (
    <section className='agenda-page'>
      <header className='agenda-header'>
        <button onClick={() => navigate(-1)} className='back-button-agenda'>
          <ChevronLeftIcon />
        </button>
        <h1 className='agenda-header__title'>
          Agenda de Eventos
          <CalendarIconTitle />
        </h1>
        <p className='agenda-header__subtitle'>
          Fique por dentro dos principais acontecimentos, feiras e workshops do
          universo do cacau em Rondônia e participe da nossa jornada.
        </p>
      </header>

      <main className='timeline-container'>
        <section>
          <h2 className='timeline-section-title'>Próximos Eventos</h2>
          {proximosEventos.length > 0 ? (
            proximosEventos.map((evento) => (
              <EventoCard key={evento.id} evento={evento} isPast={false} />
            ))
          ) : (
            <p style={{ textAlign: "center", fontFamily: "var(--font-body)" }}>
              Nenhum evento programado no momento.
            </p>
          )}
        </section>

        <section style={{ marginTop: "4rem" }}>
          <h2 className='timeline-section-title'>Eventos Anteriores</h2>
          {eventosPassados.length > 0 ? (
            eventosPassados.map((evento) => (
              <EventoCard key={evento.id} evento={evento} isPast={true} />
            ))
          ) : (
            <p style={{ textAlign: "center", fontFamily: "var(--font-body)" }}>
              Não há eventos anteriores.
            </p>
          )}
        </section>
      </main>
    </section>
  );
}

export default AgendaEventosPage;
