import { useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";

type SiteContent = {
  id: string;
  title: string;
  link: string;
  content: string;
};

const siteContentData: SiteContent[] = [
  {
    id: "historia",
    title: "Nossa História e Propósito",
    link: "/institucional/historia",
    content: `Nascida da força da terra e da paixão de seus produtores, a Cacauron - Associação dos Cacauicultores e Chocolateiros do Estado de Rondônia é a materialização de um sonho: posicionar Rondônia como uma referência mundial em cacau de alta qualidade e em chocolates de origem única. Fundada em 20 de agosto de 2021, nossa história é tecida pela união de homens e mulheres que dedicam suas vidas ao cultivo do "fruto dos deuses". Somos uma organização pioneira no Brasil, a única a abraçar em uma só entidade os dois elos fundamentais desta cadeia: os cacauicultores, que com maestria cuidam das lavouras, e os chocolateiros, que transformam amêndoas preciosas em experiências de sabor inesquecíveis. Nossa jornada começou a florescer a partir do projeto "Cacau Sustentável", uma iniciativa visionária em parceria com o SEBRAE Rondônia. O coração da nossa missão é a promoção e a proteção da Indicação de Procedência "Rondônia Cacau". Este não é apenas um selo, mas a certificação de uma herança.`,
  },
  {
    id: "ig-rondonia",
    title: "Selo de Indicação Geográfica (IG) Rondônia",
    link: "/institucional/ig-rondonia",
    content: `O reconhecimento oficial da profunda conexão entre um produto de excelência e seu lugar de origem. Concedida ao cacau em amêndoas de todo o estado, esta certificação atesta a qualidade única e as características singulares que só o terroir amazônico de Rondônia pode oferecer. A Cacauron, como detentora oficial do registro, tem o orgulho de gerir e proteger este patrimônio. O cacau de Rondônia nasce no coração do bioma amazônico, moldado por um clima equatorial perfeito, com chuvas abundantes, temperatura média de 26°C e sol generoso. Por ser uma planta nativa, o cacau é um poderoso aliado da preservação. Sua produção em Sistemas Agroflorestais (SAFs) protege os recursos hídricos, a biodiversidade e o solo, além de gerar renda e fortalecer as comunidades locais.`,
  },
  {
    id: "chocolateiros",
    title: "Nossa Comunidade de Chocolateiros",
    link: "/associados",
    content: `Conheça os rostos e as histórias por trás do cacau de Rondônia. Shalom Chocolates: "tree-to-bar" que cultiva e processa seu próprio cacau. Melí Chocolates: Produz chocolates finos, bombons e trufas com ingredientes amazônicos. D'Amazônia Origens: Marca que representa a 4ª geração de uma família de cacauicultores. Cacauway: A primeira marca de chocolate de agricultura familiar da Amazônia. Filhos do Combu: Chocolate caseiro produzido por uma cooperativa de 110 famílias.`,
  },
  {
    id: "diretoria",
    title: "Nossa Diretoria",
    link: "/diretoria",
    content: `Lideranças comprometidas que guiam a Cacauron com visão, estratégia e uma profunda paixão pelo futuro do cacau em Rondônia. Presidente: Estevam Fernandes Magalhães. Vicê Presidente: Deoclídes Pires da Silva. Diretor Administrativo: Helberte Augusto Neves. Diretor Financeiro: Marta Betânia Ferreira Carvalho. Diretor de Marketing: Marcelo Alves Medeiros. Diretor de Sustentabilidade: Antônio Deusemínio de Almeida. Diretora de Chocolateria: Melissa Barbosa Costa de Almeida.`,
  },
];

const Highlight = ({
  text,
  highlight,
}: {
  text: string;
  highlight: string;
}) => {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }
  const regex = new RegExp(`(${highlight})`, "gi");
  const parts = text.split(regex);
  return (
    <span>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <strong key={i}>{part}</strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
};

const PaginaPesquisa = () => {
  const [searchParams] = useSearchParams();
  const termoPesquisado = searchParams.get("q") || "";

  const resultados = useMemo(() => {
    if (!termoPesquisado.trim()) {
      return [];
    }

    return siteContentData.filter((item) =>
      item.content.toLowerCase().includes(termoPesquisado.toLowerCase())
    );
  }, [termoPesquisado]);

  const criarSnippet = (texto: string, termo: string) => {
    const index = texto.toLowerCase().indexOf(termo.toLowerCase());
    if (index === -1) return texto.substring(0, 150) + "...";

    const start = Math.max(0, index - 50);
    const end = Math.min(texto.length, index + termo.length + 50);
    let snippet = texto.substring(start, end);

    if (start > 0) snippet = "..." + snippet;
    if (end < texto.length) snippet = snippet + "...";

    return snippet;
  };

  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "sans-serif",
        minHeight: "100vh",
        backgroundColor: "#FDFBF8",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1>Resultados da Pesquisa para: "{termoPesquisado}"</h1>

        {resultados.length > 0 ? (
          <div>
            <p>{resultados.length} resultado(s) encontrado(s).</p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                marginTop: "2rem",
              }}
            >
              {resultados.map((item) => (
                <div
                  key={item.id}
                  style={{
                    border: "1px solid #ddd",
                    padding: "1.5rem",
                    borderRadius: "8px",
                    backgroundColor: "white",
                  }}
                >
                  <h3 style={{ margin: "0 0 0.5rem 0" }}>{item.title}</h3>
                  <p style={{ margin: 0, color: "#555" }}>
                    <Highlight
                      text={criarSnippet(item.content, termoPesquisado)}
                      highlight={termoPesquisado}
                    />
                  </p>
                  <Link
                    to={item.link}
                    style={{
                      display: "inline-block",
                      marginTop: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    Ver na página
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>
            Nenhum resultado encontrado para "<strong>{termoPesquisado}</strong>
            ". Tente usar outras palavras-chave.
          </p>
        )}
      </div>
    </div>
  );
};

export default PaginaPesquisa;
