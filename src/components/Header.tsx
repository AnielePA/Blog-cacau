import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";
import "./header.css";
import logo from "../assets/images/LOGO_BRANCO.png";


type SearchableItem = {
  keywords: string[];
  title: string;
  destination: string;
  type: "navigate" | "scroll";
  isFallback?: boolean;
};

const searchableContent: SearchableItem[] = [
  {
    keywords: ["notícias", "novidades", "imprensa", "blog"],
    title: "Ver as Últimas Notícias",
    destination: "#noticias",
    type: "scroll",
  },
  {
    keywords: ["associados", "chocolateiros", "produtores", "comunidade"],
    title: "Conhecer Nossos Chocolateiros",
    destination: "/associados",
    type: "navigate",
  },
  {
    keywords: ["diretoria", "liderança", "presidente", "quem somos"],
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
];


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});


  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<SearchableItem[]>([]);

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
      // type === 'scroll'
      if (window.location.pathname !== "/") {
        window.location.href = `/${item.destination}`;
      } else {
        const element = document.querySelector(item.destination);
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setSearchTerm("");
    setSuggestions([]);
    setIsMenuOpen(false); // Fecha o menu mobile após a ação
  };


  const handleSearch = () => {
    if (suggestions.length > 0) {
      // Se houver sugestões, a primeira é sempre a melhor correspondência ou o fallback
      goToDestination(suggestions[0]);
    } else if (searchTerm.trim() !== "") {
      // Caso o utilizador clique no ícone sem sugestões visíveis, vai para a página de pesquisa
      window.location.href = `/pesquisa?q=${encodeURIComponent(searchTerm)}`;
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

      const fallbackSuggestion: SearchableItem = {
        keywords: [],
        title: `Pesquisar por "${value}"`,
        destination: `/pesquisa?q=${encodeURIComponent(value)}`,
        type: "navigate",
        isFallback: true,
      };


      if (keywordSuggestions.length === 0) {
        setSuggestions([fallbackSuggestion]);
      } else {
        setSuggestions(keywordSuggestions);
      }
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
    <header className='header-principal'>
      <div className='container'>
        <div className='logo'>
          <img src={logo} alt='Logo Cacauron' />
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
                    <li
                      key={index}
                      onClick={() => goToDestination(item)}
                      className={item.isFallback ? "fallback-suggestion" : ""}
                    >
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
                  <a href='/imprensa/artigos'>Artigos</a>
                </li>
              </ul>
            </li>
            <li className={openSubmenus["eventos"] ? "open" : ""}>
              <a
                href='/eventos'
                aria-haspopup='true'
                onClick={(e) => {
                  e.preventDefault();
                  toggleSubmenu("eventos");
                }}
              >
                Eventos
                <ChevronDownIcon
                  style={{
                    transform: openSubmenus["eventos"]
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                />
              </a>
              <ul>
                <li>
                  <a href='/eventos/agenda'>Agenda de Eventos</a>
                </li>
              </ul>
            </li>
            <li>
              <a href='/associados'>Chocolateiros</a>
            </li>
            <li>
              <a href='/convenios'>Cacauron na Estrada</a>
            </li>
            <li>
              <a href='/contato'>Contato</a>
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
              <li
                key={index}
                onClick={() => goToDestination(item)}
                className={item.isFallback ? "fallback-suggestion" : ""}
              >
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
