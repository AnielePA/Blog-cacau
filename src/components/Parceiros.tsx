import "./parceiros.css";
import logoSebrae from "../assets/images/logo-sebrae.jpg";
import logoSicoob from "../assets/images/logo-sicoob1.jpg";

const parceirosData = [
  {
    nome: "Sebrae",
    logoUrl: logoSebrae,
    descricao:
      "Apoio fundamental na capacitação dos nossos produtores e no desenvolvimento estratégico da cacauicultura em Rondônia.",
  },
  {
    nome: "Sicoob",
    logoUrl: logoSicoob,
    descricao:
      "Parceiro financeiro que acredita e investe no crescimento sustentável das cooperativas e dos nossos associados.",
  },
];

function Parceiros() {
  return (
    <section className='parceiros-section'>
      <h2 className='parceiros-title'>Parceiros Estratégicos</h2>
      <div className='parceiros-grid'>
        {parceirosData.map((parceiro) => (
          <div key={parceiro.nome} className='parceiro-card'>
            <img
              src={parceiro.logoUrl}
              alt={`Logo ${parceiro.nome}`}
              className='parceiro-card__logo'
            />
            <p className='parceiro-card__descricao'>{parceiro.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Parceiros;
