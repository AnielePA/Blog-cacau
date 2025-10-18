import ChamadaListasSection from "./components/ChamadaListasSection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import IndicacaoGeograficaSection from "./components/IndicacaoGeograficaSection";
import NoticiasSection from "./components/NoticiasSection";
import OurStory from "./components/OurStory";
import Parceiros from "./components/Parceiros";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <NoticiasSection />
      <OurStory />
      <IndicacaoGeograficaSection />
      <ChamadaListasSection />

      <Parceiros />
    </div>
  );
}

export default App;
