import ChamadaListasSection from "./components/ChamadaListasSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import IndicacaoGeograficaSection from "./components/IndicacaoGeograficaSection";
import NoticiasSection from "./components/NoticiasSection";
import OurStory from "./components/OurStory";
import Parceiros from "./components/Parceiros";
import { ModalProvider } from "./context/ModalProvider";
import ImageModal from "./components/ImageModal";
import "./index.css";
import DocumentosSection from "./components/DocumentosSection";
import ComunicadosSection from "./components/ComunicadosSection";

function App() {
  return (
    <div>
      <ModalProvider>
        <Header />
        <Hero />
        <NoticiasSection />
        <OurStory />
        <IndicacaoGeograficaSection />
        <DocumentosSection />
        <ComunicadosSection />
        <Parceiros />
        <ChamadaListasSection />
        <Footer />
        <ImageModal />
      </ModalProvider>
    </div>
  );
}

export default App;
