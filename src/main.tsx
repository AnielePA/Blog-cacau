import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.css";
import App from "./App.tsx";
import "./index.css";
import AssociadosPage from "./pages/AssociadosPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DiretoriaPage from "./pages/DiretoriaPage.tsx";
import AgendaEventosPage from "./pages/AgendaEventosPage.tsx";
import ListaArtigosPage from "./pages/ListaArtigosPage.tsx";
import ArtigoIGRondoniaPage from "./pages/artigos/ArtigoIGRondoniaPage.tsx";
import CacauronNaEstradaEmBreve from "./pages/CacauronNaEstradaEmBreve.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/associados",
    element: <AssociadosPage />,
  },

  {
    path: "/diretoria",
    element: <DiretoriaPage />,
  },
  {
    path: "/eventos",
    element: <AgendaEventosPage />,
  },
  {
    path: "/artigos",
    element: <ListaArtigosPage />,
  },
  {
    path: "/artigos/igrondonia",
    element: <ArtigoIGRondoniaPage />,
  },
  {
    path: "/cacauron-na-estrada",
    element: <CacauronNaEstradaEmBreve />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
