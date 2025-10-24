import "./diretoriaCard.css";

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
    style={{ marginRight: "6px", verticalAlign: "middle" }}
  >
    <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
    <circle cx='12' cy='10' r='3'></circle>
  </svg>
);

type Diretoria = {
  id: number;
  nome: string;
  fotoUrl: string;
  cargo: string;
  municipio: string;
};

function DiretoriaCard({ membro }: { membro: Diretoria }) {
  return (
    <article className='diretoria-card'>
      <img
        src={membro.fotoUrl}
        alt={`Foto de ${membro.nome}`}
        className='diretoria-card__foto'
      />
      <div className='diretoria-card__info'>
        <h3 className='diretoria-card__nome'>{membro.nome}</h3>
        <p className='diretoria-card__cargo'>{membro.cargo}</p>
        <p className='diretoria-card__municipio'>
          <LocationIcon />
          {membro.municipio}
        </p>
      </div>
    </article>
  );
}

export default DiretoriaCard;
export type { Diretoria };
