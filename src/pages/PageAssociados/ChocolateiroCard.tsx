import "./chocolateiroCard.css";

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
    style={{ marginRight: "6px", verticalAlign: "middle", opacity: 0.7 }}
  >
    <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
    <circle cx='12' cy='10' r='3'></circle>
  </svg>
);

type Chocolateiro = {
  id: number;
  nomeMarca: string;
  nomesPessoas: string;
  logoUrl: string;
  cidade: string;
  descricao: string;
};

function ChocolateiroCard({ chocolateiro }: { chocolateiro: Chocolateiro }) {
  return (
    <article className='membro-card'>
      <figure className='membro-card__imagem-wrapper'>
        <img
          src={chocolateiro.logoUrl}
          alt={`Logo de ${chocolateiro.nomeMarca}`}
          className='membro-card__imagem'
        />
      </figure>
      <div className='membro-card__conteudo'>
        <header>
          <h3 className='membro-card__marca'>{chocolateiro.nomeMarca}</h3>
          <p className='membro-card__pessoas'>
            por {chocolateiro.nomesPessoas}
          </p>
        </header>
        <p className='membro-card__descricao'>{chocolateiro.descricao}</p>
        <footer className='membro-card__footer'>
          <p className='membro-card__cidade'>
            <LocationIcon /> {chocolateiro.cidade}
          </p>
        </footer>
      </div>
    </article>
  );
}

export default ChocolateiroCard;
export type { Chocolateiro };