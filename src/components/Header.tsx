import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { useState, useEffect, useMemo, useRef } from "react";
import "./header.css";
import logo from "../assets/images/LOGO_BRANCO.png";
import logoVerde from "../assets/images/LOGO_VERDE_BANDEIRA.png";
import { useTranslation } from "react-i18next";

type SearchableItem = {
  keywords: string[];
  title: string;
  destination: string;
  type: "navigate" | "scroll";
};

const generateNameKeywords = (name: string): string[] => {
  const lowerCaseName = name.toLowerCase();
  const firstName = lowerCaseName.split(" ")[0];
  return [lowerCaseName, firstName].filter(Boolean);
};

const generateRoleKeywords = (role: string): string[] => {
  const lowerCaseRole = role.toLowerCase();
  const parts = lowerCaseRole
    .split(/[\s-]+/)
    .filter((part) => part.length > 2 || !["de", "da", "do"].includes(part));
  return [lowerCaseRole, ...parts].filter(Boolean);
};

const diretoriaDataForKeywords = [
  { nome: "Estevam Fernandes Magalhães", cargo: "Presidente" },
  { nome: "Deoclídes Pires da Silva", cargo: "Vicê Presidente" },
  { nome: "Helberte Augusto Neves", cargo: "Diretor Administrativo" },
  {
    nome: "Flávio Teixeira da Silva",
    cargo: "Diretor Administrativo - Suplente",
  },
  { nome: "Marta Betânia Ferreira Carvalho", cargo: "Diretor Financeiro" },
  {
    nome: "Israel Barbosa da Silveira",
    cargo: "Diretor Financeiro - Suplente",
  },
  { nome: "Marcelo Alves Medeiros", cargo: "Diretor de Marketing" },
  {
    nome: "Jhanne Cleice Silva Franco",
    cargo: "Diretor de Marketing - Suplente",
  },
  {
    nome: "Antônio Deusemínio de Almeida",
    cargo: "Diretor de Sustentabilidade",
  },
  {
    nome: "Assis Pereira de Morais",
    cargo: "Diretor de Sustentabilidade - Suplente",
  },
  {
    nome: "Melissa Barbosa Costa de Almeida",
    cargo: "Diretora de Chocolateria",
  },
  {
    nome: "Shalom Oliveira Mendes Silva",
    cargo: "Diretora de Chocolateria - Suplente",
  },
  { nome: "Deborah Regina", cargo: "Executiva" },
];
const chocolateirosDataForKeywords = [
  {
    nomeMarca: "Cacaulândia Chocolates",
    nomesPessoas: "Marli e Israel Barbosa",
  },
  { nomeMarca: "Chocolate Tiengo", nomesPessoas: "Deoclides Pires e família" },
  { nomeMarca: "Shalom Cacau", nomesPessoas: "Neuzeli e Shalom" },
  { nomeMarca: "Targa Chocolate", nomesPessoas: "Selma Targa" },
  { nomeMarca: "Franco Cacao", nomesPessoas: "Jhanne Franco" },
  {
    nomeMarca: "Chocolate Santana",
    nomesPessoas: "Celso José de Abreu Santana",
  },
];

const availableLanguages = [
  { code: "pt-BR", label: "PT", longLabel: "Português" },
  { code: "en", label: "EN", longLabel: "English" },
  { code: "es", label: "ES", longLabel: "Español" },
];

function Header() {
  const { t, i18n } = useTranslation();

  const searchableContent: SearchableItem[] = useMemo(() => {
    let diretoriaKeywords =
      (t("header.searchSuggestions.conhecerDiretoria.keywords", {
        returnObjects: true,
        defaultValue: [],
      }) as string[]) || [];
    diretoriaDataForKeywords.forEach((d) => {
      diretoriaKeywords = [
        ...diretoriaKeywords,
        ...generateNameKeywords(d.nome),
        ...generateRoleKeywords(d.cargo),
      ];
    });
    diretoriaKeywords = [...new Set(diretoriaKeywords)];

    let chocolateirosKeywords =
      (t("header.searchSuggestions.conhecerChocolateiros.keywords", {
        returnObjects: true,
        defaultValue: [],
      }) as string[]) || [];
    chocolateirosDataForKeywords.forEach((c) => {
      chocolateirosKeywords.push(c.nomeMarca.toLowerCase());
      const nomes = c.nomesPessoas
        .toLowerCase()
        .split(/[\s,e]+/)
        .filter(Boolean);
      chocolateirosKeywords = [...chocolateirosKeywords, ...nomes];
    });
    chocolateirosKeywords = [...new Set(chocolateirosKeywords)];

    const destinationMap: Record<
      string,
      { destination: string; type: "navigate" | "scroll" }
    > = {
      verNoticias: { destination: "#noticias", type: "scroll" },
      conhecerChocolateiros: { destination: "/associados", type: "navigate" },
      conhecerDiretoria: { destination: "/diretoria", type: "navigate" },
      lerHistoria: { destination: "#our-story", type: "scroll" },
      saberMaisIG: { destination: "#ig-rondonia", type: "scroll" },
      verParceiros: { destination: "#parceiros", type: "scroll" },
      faleConosco: { destination: "#footer", type: "scroll" },
      verArtigos: { destination: "/artigos", type: "navigate" },
      verDocumentos: { destination: "#documentos", type: "scroll" },
      verEventos: { destination: "/eventos", type: "navigate" },
      verCacauronNaEstrada: {
        destination: "/cacauron-na-estrada",
        type: "navigate",
      },
    };

    const suggestionsFromT = t("header.searchSuggestions", {
      returnObjects: true,
    }) as Record<string, { title: string; keywords: string[] }>;

    return Object.entries(suggestionsFromT).map(([key, value]) => {
      const destInfo = destinationMap[key] || {
        destination: "#",
        type: "scroll",
      };
      let finalKeywords = value.keywords || [];

      if (key === "conhecerDiretoria") finalKeywords = diretoriaKeywords;
      if (key === "conhecerChocolateiros")
        finalKeywords = chocolateirosKeywords;

      return {
        keywords: finalKeywords,
        title: value.title,
        destination: destInfo.destination,
        type: destInfo.type,
      };
    });
  }, [t]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<SearchableItem[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);

  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langSwitcherRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langSwitcherRef.current &&
        !langSwitcherRef.current.contains(event.target as Node)
      ) {
        setIsLangMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [langSwitcherRef]);

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

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLangLabel =
    availableLanguages.find((lang) =>
      i18n.language.startsWith(lang.code.split("-")[0])
    )?.label || availableLanguages[0].label;

  return (
    <header className={`header-principal ${isScrolled ? "scrolled" : ""}`}>
      <div className='container'>
        <div className='logo'>
          <img src={isScrolled ? logoVerde : logo} alt={t("header.logoAlt")} />
          <p>{t("header.logoText")}</p>
        </div>
        <button
          className={`mobile-menu-btn ${isMenuOpen ? "open" : ""}`}
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            setOpenSubmenus({});
          }}
          aria-label={t("header.toggleMenuAriaLabel")}
        >
          {isMenuOpen ? <XMarkIcon /> : <Bars3Icon />}
        </button>
        <nav className={`header-nav ${isMenuOpen ? "nav-open" : ""}`}>
          {isMenuOpen && (
            <div className='search mobile-search'>
              <input
                type='text'
                placeholder={t("header.searchPlaceholder")}
                value={searchTerm}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
              <i className='fas fa-search' onClick={handleSearch}></i>
              {suggestions.length > 0 && (
                <ul className='search-suggestions'>
                  {suggestions.map((item, index) => (
                    <li key={index} onClick={() => goToDestination(item)}>
                      {" "}
                      {item.title}{" "}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
          <ul>
            <li>
              <a href='/'>{t("header.nav.inicio")}</a>
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
                {t("header.nav.institucional")}
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
                  <a href='/diretoria'>
                    {t("header.nav.institucionalSub.diretoria")}
                  </a>
                </li>
                <li>
                  <a href='#our-story'>
                    {t("header.nav.institucionalSub.historia")}
                  </a>
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
                {t("header.nav.imprensa")}
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
                  <a href='#noticias'>{t("header.nav.imprensaSub.noticias")}</a>
                </li>
                <li>
                  <a href='/artigos'>{t("header.nav.imprensaSub.artigos")}</a>
                </li>
              </ul>
            </li>
            <li>
              <a href='/eventos'>{t("header.nav.eventos")}</a>
            </li>
            <li>
              <a href='/associados'>{t("header.nav.chocolateiros")}</a>
            </li>
            <li>
              <a href='/cacauron-na-estrada'>
                {t("header.nav.cacauronNaEstrada")}
              </a>
            </li>
            <li>
              <a href='#footer'>{t("header.nav.contato")}</a>
            </li>
          </ul>

          <div
            className='language-switcher'
            ref={langSwitcherRef}
            style={{
              marginLeft: isMenuOpen ? "0" : "auto",
              alignSelf: "center",
            }}
          >
            <button onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}>
              {currentLangLabel}
              <ChevronDownIcon
                className={`chevron-icon ${isLangMenuOpen ? "rotated" : ""}`}
              />
            </button>

            {isLangMenuOpen && (
              <div className='language-dropdown'>
                <ul>
                  {availableLanguages.map((lang) => (
                    <li key={lang.code}>
                      <button
                        onClick={() => {
                          changeLanguage(lang.code);
                          setIsLangMenuOpen(false);
                        }}
                        className={
                          i18n.language.startsWith(lang.code.split("-")[0])
                            ? "active"
                            : ""
                        }
                      >
                        {lang.longLabel} ({lang.label})
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
      <div className='search desktop-search'>
        <input
          type='text'
          placeholder={t("header.searchPlaceholder")}
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <i className='fas fa-search' onClick={handleSearch}></i>
        {suggestions.length > 0 && (
          <ul className='search-suggestions'>
            {suggestions.map((item, index) => (
              <li key={index} onClick={() => goToDestination(item)}>
                {" "}
                {item.title}{" "}
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}

export default Header;

declare global {
  interface Window {
    google?: { translate?: unknown };
    googleTranslateElementInit?: () => void;
  }
}
