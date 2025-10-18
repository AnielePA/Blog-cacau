import { useState } from "react";
import "./associados.css";

import { ChevronLeftIcon, Users } from "lucide-react";
import cacaulandiaLogo from "../assets/images/associados/cacaulandia.png";
import tiengoLogo from "../assets/images/associados/tiengo.png";
import shalomLogo from "../assets/images/associados/shalom.png";
import targaLogo from "../assets/images/associados/targa.jpg";
import francoLogo from "../assets/images/associados/franco.png";
import santanaLogo from "../assets/images/associados/santana.png";


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


const chocolateirosData: Chocolateiro[] = [
  {
    id: 1,
    nomeMarca: "Cacaulândia Chocolates",
    nomesPessoas: "Marli e Israel Barbosa",
    logoUrl: cacaulandiaLogo,
    cidade: "Cacaulândia",
    descricao:
      "Marca pioneira da família Barbosa, produzindo chocolate bean-to-bar com receitas originais e foco na preservação ambiental, fomentando também o ecoturismo.",
  },
  {
    id: 2,
    nomeMarca: "Chocolate Tiengo",
    nomesPessoas: "Deoclides Pires e família",
    logoUrl: tiengoLogo,
    cidade: "Jaru",
    descricao:
      "Chocolate tree-to-bar que une tradição familiar e sustentabilidade. Produzido de forma artesanal, é vegano, sem glúten e lactose, representando o puro sabor da Amazônia.",
  },
  {
    id: 3,
    nomeMarca: "Shalom Cacau",
    nomesPessoas: "Neuzeli e Shalom",
    logoUrl: shalomLogo,
    cidade: "Jaru",
    descricao:
      "Empresa familiar conduzida por mãe e filha, focada na produção artesanal. Cria chocolates que são verdadeiras experiências de afeto, arte e bem-estar.",
  },
  {
    id: 4,
    nomeMarca: "Targa Chocolate",
    nomesPessoas: "Selma Targa",
    logoUrl: targaLogo,
    cidade: "Nova União",
    descricao:
      "Produz chocolates a partir de amêndoas de cacau fino cultivadas em lavoura própria, sem o uso de agroquímicos e com foco total na sustentabilidade.",
  },
  {
    id: 5,
    nomeMarca: "Franco Cacao",
    nomesPessoas: "Jhanne Franco",
    logoUrl: francoLogo,
    cidade: "Ouro Preto do Oeste",
    descricao:
      "Fábrica de chocolate da amêndoa à barra, especializada em opções zero leite, zero glúten e sem açúcar refinado, expressando a identidade do cacau rondoniense.",
  },
  {
    id: 6,
    nomeMarca: "Chocolate Santana",
    nomesPessoas: "Celso José de Abreu Santana",
    logoUrl: santanaLogo,
    cidade: "Presidente Médici",
    descricao:
      "Empresa familiar idealizada por um cacauicultor. Focada em agregar valor ao cacau local, tem como principal missão levar produtos de alta qualidade aos seus clientes.",
  },
];


const ChocolateiroCard = ({ chocolateiro }: { chocolateiro: Chocolateiro }) => {
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
};

function AssociadosPage() {

  const [animationKey] = useState(0);

  return (
    <section className='associados-page'>
      <header className='associados-header'>

        <button onClick={() => window.history.back()} className='back-button'>
          <ChevronLeftIcon />
        </button>
        <h1>
          Nossos Chocolateiros{" "}
          <Users
            size={40}
            style={{ marginRight: "0.5rem", verticalAlign: "middle" }}
          />
        </h1>
        <p>Conheça as marcas que transformam o cacau de Rondônia em arte.</p>
      </header>

      <main className='membros-grid-container'>
        <div className='membros-grid' key={animationKey}>
          {chocolateirosData.map((chocolateiro) => (
            <ChocolateiroCard
              key={chocolateiro.id}
              chocolateiro={chocolateiro}
            />
          ))}
        </div>
      </main>


    </section>
  );
}

export default AssociadosPage;
