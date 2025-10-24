import "./diretoria.css";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import DiretoriaCard, { type Diretoria } from "./DiretoriaCard";

const diretoriaData: Diretoria[] = [
  {
    id: 1,
    nome: "Estevam Fernandes Magalhães",
    fotoUrl: "https://placehold.co/400x400/795548/FFFFFF?text=Estevam",
    cargo: "Presidente",
    municipio: "Teixeirópolis",
  },
  {
    id: 2,
    nome: "Deoclídes Pires da Silva",
    fotoUrl: "https://placehold.co/400x400/5D4037/FFFFFF?text=Deoclídes",
    cargo: "Vicê Presidente",
    municipio: "Jaru",
  },
  {
    id: 3,
    nome: "Helberte Augusto Neves",
    fotoUrl: "https://placehold.co/400x400/8D6E63/FFFFFF?text=Helberte",
    cargo: "Diretor Administrativo",
    municipio: "Theobroma",
  },
  {
    id: 4,
    nome: "Flávio Teixeira da Silva",
    fotoUrl: "https://placehold.co/400x400/795548/FFFFFF?text=Flávio",
    cargo: "Diretor Administrativo - Suplente",
    municipio: "Jaru",
  },
  {
    id: 5,
    nome: "Marta Betânia Ferreira Carvalho",
    fotoUrl: "https://placehold.co/400x400/5D4037/FFFFFF?text=Marta",
    cargo: "Diretor Financeiro",
    municipio: "Ji-Paraná",
  },
  {
    id: 6,
    nome: "Israel Barbosa da Silveira",
    fotoUrl: "https://placehold.co/400x400/8D6E63/FFFFFF?text=Israel",
    cargo: "Diretor Financeiro - Suplente",
    municipio: "Cacaulândia",
  },
  {
    id: 7,
    nome: "Marcelo Alves Medeiros",
    fotoUrl: "https://placehold.co/400x400/795548/FFFFFF?text=Marcelo",
    cargo: "Diretor de Marketing",
    municipio: "Jaru",
  },
  {
    id: 8,
    nome: "Jhanne Cleice Silva Franco",
    fotoUrl: "https://placehold.co/400x400/5D4037/FFFFFF?text=Jhanne",
    cargo: "Diretor de Marketing - Suplente",
    municipio: "Ouro Preto do Oeste",
  },
  {
    id: 9,
    nome: "Antônio Deusemínio de Almeida",
    fotoUrl: "https://placehold.co/400x400/8D6E63/FFFFFF?text=Antônio",
    cargo: "Diretor de Sustentabilidade",
    municipio: "Ouro Preto do Oeste",
  },
  {
    id: 10,
    nome: "Assis Pereira de Morais",
    fotoUrl: "https://placehold.co/400x400/795548/FFFFFF?text=Assis",
    cargo: "Diretor de Sustentabilidade - Suplente",
    municipio: "Ouro Preto do Oeste",
  },
  {
    id: 11,
    nome: "Melissa Barbosa Costa de Almeida",
    fotoUrl: "https://placehold.co/400x400/5D4037/FFFFFF?text=Melissa",
    cargo: "Diretora de Chocolateria",
    municipio: "Ouro Preto do Oeste",
  },
  {
    id: 12,
    nome: "Shalom Oliveira Mendes Silva",
    fotoUrl: "https://placehold.co/400x400/8D6E63/FFFFFF?text=Shalom",
    cargo: "Diretora de Chocolateria - Suplente",
    municipio: "Jaru",
  },
  {
    id: 13,
    nome: "Deborah Regina",
    fotoUrl: "https://placehold.co/400x400/8D6E63/FFFFFF?text=Deborah",
    cargo: "Executiva",
    municipio: "Ji-Paraná",
  },
];



function DiretoriaPage() {
  const navigate = useNavigate();
  return (
    <section className='diretoria-page'>
      <header className='diretoria-header'>
        <button onClick={() => navigate(-1)} className='back-button-diretoria'>
          <ChevronLeftIcon />
        </button>
        <h1 className='diretoria-header__title'>Nossa Diretoria</h1>
        <p className='diretoria-header__subtitle'>
          Lideranças comprometidas que guiam a Cacauron com visão, estratégia e
          uma profunda paixão pelo futuro do cacau em Rondônia.
        </p>
      </header>

      <main className='diretoria-grid-container'>
        <div className='diretoria-grid'>
          {diretoriaData.map((membro) => (
            <DiretoriaCard key={membro.id} membro={membro} />
          ))}
        </div>
      </main>
    </section>
  );
}

export default DiretoriaPage;
