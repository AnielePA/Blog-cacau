import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";
import "./header.css";
import logo from "../assets/images/LOGO_BRANCO.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});

  const toggleSubmenu = (menuName: string) => {
    setOpenSubmenus((prevState) => ({
      ...prevState,
      [menuName]: !prevState[menuName],
    }));
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
        <nav className={isMenuOpen ? "nav-open" : ""}>
          {isMenuOpen && (
            <div className='search mobile-search'>
              <input type='text' placeholder='Pesquisar...' />
              <i className='fas fa-search'></i>
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
                  <a href='/institucional/diretoria'>Diretoria</a>
                </li>
                <li>
                  <a href='/institucional/historia'>História</a>
                </li>
                <li>
                  <a href='/institucional/missao-e-valores'>Missão e Valores</a>
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
                <li>
                  <a href='/imprensa/revistas'>Revistas</a>
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
              <a href='/publicacoes'>Chocolateiros</a>
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
        <input type='text' placeholder='Pesquisar...' />
        <i className='fas fa-search'></i>
      </div>
    </header>
  );
}

export default Header;
