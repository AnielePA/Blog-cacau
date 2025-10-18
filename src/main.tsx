import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.css";
import App from "./App.tsx";
import "./index.css";
import AssociadosPage from "./pages/AssociadosPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DiretoriaPage from "./pages/DiretoriaPage.tsx";
import PaginaPesquisa from "./pages/PaginaPesquisa";

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
    path: "/pesquisa",
    element: <PaginaPesquisa />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
