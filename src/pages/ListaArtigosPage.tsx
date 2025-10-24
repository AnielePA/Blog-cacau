import "./listaArtigosPage.css";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import ArtigoCard, { type ArtigoPreview } from "./ArtigoCard";


const artigosData: ArtigoPreview[] = [
  {
    id: 1,
    slug: "renascimento-cacau-amazonico",
    titulo: "O Renascimento do Cacau Amazônico: A Jornada da Cacauron",
    resumo:
      "Como a união de produtores e a busca pela excelência estão transformando Rondônia...",
    imagemUrl: "https://placehold.co/600x400/49190f/FFFFFF?text=Artigo+1",
    dataPublicacao: "2025-10-20",
  },
  {
    id: 2,
    slug: "igrondonia",
    titulo:
      "Cacauron e a valorização da Identidade Geográfica do Cacau de Rondônia",
    resumo:
      "Descubra como a Indicação Geográfica está redefinindo a qualidade e o reconhecimento do cacau produzido em nosso estado...",
    imagemUrl: "https://placehold.co/600x400/7d4c3b/FFFFFF?text=Artigo+2",
    dataPublicacao: "2025-09-05",
  },
  {
    id: 3,
    slug: "sustentabilidade-na-pratica",
    titulo: "Sustentabilidade na Prática: Os Sistemas Agroflorestais",
    resumo:
      "Descubra como os SAFs ajudam a preservar a Amazônia enquanto produzem cacau de alta...",
    imagemUrl: "https://placehold.co/600x400/312725/FFFFFF?text=Artigo+3",
    dataPublicacao: "2025-08-15",
  },
  {
    id: 4,
    slug: "chocolateiros-parceiros",
    titulo: "Conheça Nossos Chocolateiros: Arte e Sabor Local",
    resumo:
      "Apresentamos as marcas parceiras que transformam nosso cacau em verdadeiras joias...",
    imagemUrl: "https://placehold.co/600x400/fe784f/FFFFFF?text=Artigo+4",
    dataPublicacao: "2025-07-28",
  },
];




function ListaArtigosPage() {
  const navigate = useNavigate();
  return (
    <section className='lista-artigos-page'>
      <header className='artigos-header'>
        <button onClick={() => navigate(-1)} className='back-button-artigos'>
          <ChevronLeftIcon />
        </button>
        <h1 className='artigos-header__title'>Nossos Artigos</h1>
        <p className='artigos-header__subtitle'>
          Explore as histórias, conhecimentos e novidades do universo Cacauron e
          do cacau amazônico.
        </p>
      </header>

      <main className='artigos-grid-container'>
        <div className='artigos-grid'>
          {artigosData.map((artigo) => (
            <ArtigoCard key={artigo.id} artigo={artigo} />
          ))}
        </div>
      </main>
    </section>
  );
}

export default ListaArtigosPage;
