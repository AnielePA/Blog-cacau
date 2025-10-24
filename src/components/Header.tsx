import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";
import "./header.css";
import logo from "../assets/images/LOGO_BRANCO.png";
import logoVerde from "../assets/images/LOGO_VERDE_BANDEIRA.png";

type SearchableItem = {
  keywords: string[];
  title: string;
  destination: string;
  type: "navigate" | "scroll";
};

const searchableContent: SearchableItem[] = [
  {
    keywords: [
      "notícias",
      "novidades",
      "imprensa",
      "blog",
      "atualizações",
      "news",
      "noticias",
    ],
    title: "Ver as Últimas Notícias",
    destination: "#noticias",
    type: "scroll",
  },
  {
    keywords: [
      "associados",
      "chocolateiros",
      "produtores",
      "comunidade",
      "cacaulândia chocolates",
      "chocolate tiengo",
      "shalom cacau",
      "targa chocolate",
      "franco cacao",
      "chocolate santana",
      "marli barbosa",
      "israel barbosa",
      "marli",
      "israel",
      "deoclides pires",
      "deoclides",
      "neuzeli",
      "shalom",
      "selma targa",
      "selma",
      "jhanne franco",
      "jhanne",
      "celso josé de abreu santana",
      "celso santana",
      "celso",
    ],
    title: "Conhecer Nossos Chocolateiros",
    destination: "/associados",
    type: "navigate",
  },
  {
    keywords: [
      "diretoria",
      "liderança",
      "presidente",
      "quem somos",
      "diretores",
      "estevam fernandes magalhães",
      "estevam",
      "presidente",
      "deoclídes pires da silva",
      "deoclídes",
      "vicê presidente",
      "helberte augusto neves",
      "helberte",
      "diretor administrativo",
      "flávio teixeira da silva",
      "flávio",
      "diretor administrativo suplente",
      "marta betânia ferreira carvalho",
      "marta",
      "diretor financeiro",
      "israel barbosa da silveira",
      "israel",
      "diretor financeiro suplente",
      "marcelo alves medeiros",
      "marcelo",
      "diretor de marketing",
      "jhanne cleice silva franco",
      "jhanne",
      "diretor de marketing suplente",
      "antônio deusemínio de almeida",
      "antônio",
      "diretor de sustentabilidade",
      "assis pereira de morais",
      "assis",
      "diretor de sustentabilidade suplente",
      "melissa barbosa costa de almeida",
      "melissa",
      "diretora de chocolateria",
      "shalom oliveira mendes silva",
      "shalom",
      "diretora de chocolateria suplente",
      "deborah regina",
      "deborah",
      "executiva",
    ],
    title: "Conhecer a Diretoria",
    destination: "/diretoria",
    type: "navigate",
  },
  {
    keywords: ["história", "sobre", "origem", "cacauron"],
    title: "Ler a História da Cacauron",
    destination: "#our-story",
    type: "scroll",
  },
  {
    keywords: ["ig", "indicação geográfica", "selo", "qualidade"],
    title: "Saber Mais sobre o Selo IG Rondônia",
    destination: "#ig-rondonia",
    type: "scroll",
  },
  {
    keywords: ["parceiros", "sicoob", "sebrae", "apoio"],
    title: "Veja Nossos Parceiros",
    destination: "#parceiros",
    type: "scroll",
  },
  {
    keywords: [
      "contato",
      "fale conosco",
      "email",
      "instagram",
      "facebook",
      "youtube",
      "redes sociais",
      "whatsapp",
    ],
    title: "Fale Conosco",
    destination: "#footer",
    type: "scroll",
  },
  {
    keywords: ["artigos", "blog", "novidades", "imprensa", "materia", "posts"],
    title: "Ver artigos",
    destination: "/artigos",
    type: "navigate",
  },
  {
    keywords: [
      "eventos",
      "feiras",
      "workshops",
      "seminários",
      "conferências",
      "concursos",
    ],
    title: "Ver eventos",
    destination: "/eventos",
    type: "navigate",
  },
  {
    keywords: [
      "cacauron na estrada",
      "série",
      "historia",
      "cacau em rondonia",
      "documentário",
      "video",
      "rondônia",
    ],
    title: "Ver Cacauron na Estrada: A Série sobre o Cacau em Rondônia",
    destination: "/cacauron-na-estrada",
    type: "navigate",
  },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<SearchableItem[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSubmenu = (menuName: string) => {
    setOpenSubmenus((prevState) => ({
      ...prevState,
      [menuName]: !prevState[menuName],
    }));
  };

  const goToDestination = (item: SearchableItem) => {
    if (item.type === "navigate") {
      window.location.href = item.destination;
    } else {
      if (window.location.pathname !== "/") {
        window.location.href = `/${item.destination}`;
      } else {
        const element = document.querySelector(item.destination);
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setSearchTerm("");
    setSuggestions([]);
    setIsMenuOpen(false);
  };

  const handleSearch = () => {
    if (suggestions.length > 0) {
      goToDestination(suggestions[0]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 1) {
      const keywordSuggestions = searchableContent.filter((item) =>
        item.keywords.some((keyword) =>
          keyword.toLowerCase().includes(value.toLowerCase())
        )
      );
      setSuggestions(keywordSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className={`header-principal ${isScrolled ? "scrolled" : ""}`}>
      <div className='container'>
        <div className='logo'>
          <img src={isScrolled ? logoVerde : logo} alt='Logo Cacauron' />
          <p>Cacauron</p>
        </div>
        <button
          className={`mobile-menu-btn ${isMenuOpen ? "open" : ""}`}
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            setOpenSubmenus({});
          }}
          aria-label='Toggle menu'
        >
          {isMenuOpen ? <XMarkIcon /> : <Bars3Icon />}
        </button>
        <nav className={`header-nav ${isMenuOpen ? "nav-open" : ""}`}>
          {isMenuOpen && (
            <div className='search mobile-search'>
              <input
                type='text'
                placeholder='Pesquisar...'
                value={searchTerm}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
              <i className='fas fa-search' onClick={handleSearch}></i>
              {suggestions.length > 0 && (
                <ul className='search-suggestions'>
                  {suggestions.map((item, index) => (
                    <li key={index} onClick={() => goToDestination(item)}>
                      {item.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
          <ul>
            <li>
              <a href='/'>Início</a>
            </li>
            <li className={openSubmenus["institucional"] ? "open" : ""}>
              <a
                href='/institucional'
                aria-haspopup='true'
                onClick={(e) => {
                  e.preventDefault();
                  toggleSubmenu("institucional");
                }}
              >
                Institucional
                <ChevronDownIcon
                  style={{
                    transform: openSubmenus["institucional"]
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                />
              </a>
              <ul>
                <li>
                  <a href='/diretoria'>Diretoria</a>
                </li>
                <li>
                  <a href='#our-story'>História</a>
                </li>
              </ul>
            </li>
            <li className={openSubmenus["imprensa"] ? "open" : ""}>
              <a
                href='/imprensa'
                aria-haspopup='true'
                onClick={(e) => {
                  e.preventDefault();
                  toggleSubmenu("imprensa");
                }}
              >
                Imprensa
                <ChevronDownIcon
                  style={{
                    transform: openSubmenus["imprensa"]
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                />
              </a>
              <ul>
                <li>
                  <a href='#noticias'>Notícias</a>
                </li>
                <li>
                  <a href='/artigos'>Artigos</a>
                </li>
              </ul>
            </li>
            <li>
              <a href='/eventos'>Eventos</a>
            </li>
            <li>
              <a href='/associados'>Chocolateiros</a>
            </li>
            <li>
              <a href='/cacauron-na-estrada'>Cacauron na Estrada</a>
            </li>
            <li>
              <a href='#footer'>Contato</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className='search desktop-search'>
        <input
          type='text'
          placeholder='Pesquisar...'
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <i className='fas fa-search' onClick={handleSearch}></i>
        {suggestions.length > 0 && (
          <ul className='search-suggestions'>
            {suggestions.map((item, index) => (
              <li key={index} onClick={() => goToDestination(item)}>
                {item.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}

export default Header;
