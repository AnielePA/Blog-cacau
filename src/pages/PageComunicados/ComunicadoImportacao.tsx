import './comunicadoImportacao.css';
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

function ComunicadoImportacao() {
  const navigate = useNavigate();
  const { t } = useTranslation();


  const handleBack = () => {
    navigate('/comunicados');
    console.log("Navegando de volta para /comunicados");
  };

  return (
    <section className="comunicado-detalhe-page">
      
 
      <div className="back-button-container">
        <button onClick={handleBack} className="back-btn">
          <ChevronLeftIcon size={20} />
          {t("comunicadoDetalhe.voltar", "Voltar para Comunicados")}
        </button>
      </div>

      <article className="comunicado-paper">
        
        <header className="document-header">
          <h1>
            {t("comunicado001.titulo", "COMUNICADO OFICIAL CACAURON Nº 001/2026")}
          </h1>
          <div className="meta-info">
            <span className="assunto">
              <strong>{t("comunicado001.labelAssunto", "Assunto:")}</strong> {t("comunicado001.assuntoTexto", "Posicionamento sobre a importação de amêndoas de cacau africano e defesa da cacauicultura de Rondônia.")}
            </span>
          </div>
        </header>

        <main className="document-body">
          <p>
            {t("comunicado001.paragrafo1", "A Associação dos Cacauicultores e Chocolateiros de Rondônia (CACAURON), na qualidade de entidade representativa dos produtores de cacau e chocolateiros do estado, vem a público manifestar seu posicionamento e profunda preocupação em relação à recente chegada de carregamentos de cacau provenientes do continente africano ao Porto de Ilhéus.")}
          </p>

          <p>
            {t("comunicado001.paragrafo2", "Reafirmamos nosso compromisso inabalável com a defesa dos interesses dos produtores rondonienses. A entrada de amêndoas estrangeiras em território nacional, sem o devido rigor de transparência, pode representar não apenas uma ameaça ao equilíbrio econômico da nossa cadeia produtiva, mas também um risco fitossanitário imensurável para o parque cacaueiro nacional e regional.")}
          </p>

          <p>
            {t("comunicado001.introLista", "Nesse sentido, a Diretoria da CACAURON informa as seguintes ações imediatas:")}
          </p>

          <ol>
            <li>
              <strong>{t("comunicado001.item1.titulo", "Solicitação de Esclarecimentos Fitossanitários:")}</strong>
              {t("comunicado001.item1.texto", "Estamos enviando ofício ao órgão competente, o Ministério da Agricultura e Pecuária (MAPA), exigindo o detalhamento das etapas de checagem das amêndoas importadas e a apresentação do laudo de classificação das amêndoas importadas. É imperativo que se comprove o cumprimento rigoroso de todos os protocolos de segurança para evitar a introdução de pragas e doenças inexistentes em nosso território.")}
            </li>
            
            <li>
              <strong>{t("comunicado001.item2.titulo", "Apoio da CNA:")}</strong>
              {t("comunicado001.item2.texto", "Reforçamos a solicitação de apoio para que a Confederação de Agricultura CNA realize novos estudos técnicos sobre o Drawback do cacau, avaliando critérios que possam prejudicar o comércio de amêndoas nacionais e apresentar novos critérios que beneficiem a compra de produtos nacionais.")}
            </li>

            <li>
              <strong>{t("comunicado001.item3.titulo", "Questionamento à Indústria:")}</strong>
              {t("comunicado001.item3.texto", "Encaminharemos comunicações formais às indústrias processadoras solicitando esclarecimentos sobre a real necessidade técnica e econômica dessas importações, visto que o Brasil, e especialmente Rondônia, tem investido maciçamente no aumento da produtividade e na qualidade das amêndoas, visando a autossuficiência e o fortalecimento do mercado interno.")}
            </li>

            <li>
              <strong>{t("comunicado001.item4.titulo", "Valorização da Produção Local:")}</strong>
              {t("comunicado001.item4.texto", "Ressaltamos que o cacau brasileiro possui diferenciais competitivos, como os selos de Indicação Geográfica (IG), que atestam nossa qualidade e originalidade, e também possui qualidades regionais que reforçam a produção com qualidade dos produtores. Reforçamos que a cadeia produtiva é de importância para a agricultura familiar, fortalecendo a renda familiar. A importação desenfreada desvaloriza o esforço do produtor local em fornecer um produto de excelência \"bean to bar\" e \"tree to bar\".")}
            </li>
          </ol>

          <p>
            {t("comunicado001.conclusao", "A CACAURON permanece vigilante e em constante diálogo com as redes de produtores nacionais para garantir que a soberania da cacauicultura brasileira seja respeitada. Não aceitaremos que a renda e o sustento de nossas famílias de agricultores sejam comprometidos por decisões que ignorem o potencial e a segurança da nossa produção.")}
          </p>
        </main>

        <footer className="document-footer">
          <p>
            {t("comunicado001.dataLocal", "Rondônia, 29 de Janeiro de 2026")}
          </p>
          <span className="signature">
            {t("comunicado001.assinatura", "CACAURON - Diretoria")}
          </span>
        </footer>

      </article>
    </section>
  );
}


export default ComunicadoImportacao;