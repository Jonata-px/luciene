
import About from '@/components/About';
import Benefits from '@/components/Benefits';
import Contact from "@/components/Contact";
import Header from '@/components/Header';
import Depoiments from "@/components/Depoiments";

export default function Home() {
  const depoimentImages = [
    "/depoiment_sais_1.jpg",
    "/depoiment_sais_2.jpg",
  ];

  return (
    <>
      <Header isHome={false}/>
      <div style={{paddingTop:40}} className="background_gradient">
        <About title={"Sais de Schüssler"}>
          <p>Você já ouviu falar dos incríveis Sais de Schüssler? Eles são a solução perfeita para o equilíbrio do seu organismo!</p>
          <p>Existem 12 tipos de Sais de Schüssler e eles têm os mais diversos usos terapêuticos. Podem ser indicados para tratar a depressão, a ansiedade e nervosismo, para emagrecer, para tratar doenças ósseas, dentárias, pulmonares, infecções, enxaquecas, úlceras entre muitos outros males.</p>
          <p>Aqui, oferecemos uma linha de sais formulados especificamente para atender às suas necessidades individuais. </p>
          <p>Experimente a poderosa natureza desses sais e transforme sua saúde e bem-estar!</p>
        </About>
        <Benefits title={"Sais Personalizados"} image={"/benefitsSais.jpg"}>
          <li className="paralax-left">Para Energia e Vitalidade.</li>
          <li className="paralax-right">Para Relaxamento e Equilíbrio.</li>
          <li className="paralax-left">Para uma Pele Radiante.</li>
          <li className="paralax-right">Para Clareza Mental e Foco.</li>
          <li className="paralax-right">Para Dores Fisicas e Fibromialgia</li>
          <li className="paralax-right">Para Dependencia Quimica</li>
          <li className="paralax-right">Para Sistema Nervoso Abalado</li>
          <li className="paralax-right">E Muito Mais...</li>
        </Benefits>
        <Depoiments depoimentImages={depoimentImages}/>
      </div>
      <Contact isRefexologia={false}/>
    </>
  );
}
