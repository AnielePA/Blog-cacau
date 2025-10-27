import "./artigoCard.css";

const CalendarIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='14'
    height='14'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    style={{ marginRight: "6px" }}
  >
    <rect x='3' y='4' width='18' height='18' rx='2' ry='2'></rect>
    <line x1='16' y1='2' x2='16' y2='6'></line>
    <line x1='8' y1='2' x2='8' y2='6'></line>
    <line x1='3' y1='10' x2='21' y2='10'></line>
  </svg>
);

const ArrowRightIcon = () => (
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
    style={{ marginLeft: "8px", transition: "transform 0.3s ease" }}
  >
    <line x1='5' y1='12' x2='19' y2='12'></line>
    <polyline points='12 5 19 12 12 19'></polyline>
  </svg>
);

type ArtigoPreview = {
  id: number;
  slug: string;
  titulo: string;
  resumo: string;
  imagemUrl: string;
  dataPublicacao: string;
};

function ArtigoCard({ artigo }: { artigo: ArtigoPreview }) {
  const dataPub = new Date(artigo.dataPublicacao);
  dataPub.setDate(dataPub.getDate() + 1);
  const dataFormatada = dataPub
    .toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .replace(".", "");

  return (
    <a href={`/artigos/${artigo.slug}`} className='artigo-card-link'>
      <article className='artigo-card'>
        <figure className='artigo-card__imagem-wrapper'>
          <img
            src={artigo.imagemUrl}
            alt={artigo.titulo}
            className='artigo-card__imagem'
          />
        </figure>
        <div className='artigo-card__conteudo'>
          <p className='artigo-card__data'>
            <CalendarIcon /> {dataFormatada}
          </p>
          <h3 className='artigo-card__titulo'>{artigo.titulo}</h3>
          <p className='artigo-card__resumo'>{artigo.resumo}</p>
          <span className='artigo-card__leia-mais'>
            Ler artigo <ArrowRightIcon />
          </span>
        </div>
      </article>
    </a>
  );
}

export default ArtigoCard;
export type { ArtigoPreview };