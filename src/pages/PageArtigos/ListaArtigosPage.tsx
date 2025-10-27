import "./listaArtigosPage.css";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import ArtigoCard, { type ArtigoPreview } from "./ArtigoCard";
// import seloIG from "../../assets/images/selo-rondonia-cacau.jpg";

const artigosData: ArtigoPreview[] = [
  {
    id: 1,
    slug: "igrondonia",
    titulo:
      "Cacauron e a valorização da Identidade Geográfica do Cacau de Rondônia",
    resumo:
      "Descubra como a Indicação Geográfica está redefinindo a qualidade e o reconhecimento do cacau produzido em nosso estado...",
    imagemUrl: "https://placehold.co/600x400/49190f/FFFFFF?text=Artigo+1",
    dataPublicacao: "2025-10-22",
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
