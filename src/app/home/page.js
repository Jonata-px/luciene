
import Banner from '@/components/Banner';
import About from '@/components/About';
import Benefits from '@/components/Benefits';
import Contact from "@/components/Contact";
import Header from '@/components/Header';
import Depoiments from "@/components/Depoiments";
import Extra from "@/components/Extra";

export default function Home() {
  const depoimentImages = [
      "/depoiment_2.jpg",
      "/depoiment_1.jpg",
      "/depoiment_4.jpg",
      "/depoiment_3.jpg",
  ];

  return (
    <>
      <Header isHome={true}/>
      <Banner/>
      <div className="background_gradient">
        <About title="Refrexologia Podal">
          <p>A REFLEXOLOGIA PODAL é uma técnica de pressão em zonas reflexas dos pés, capaz de atuar na prevenção e auxilio ao tratamento de disfunções no corpo.</p>
          <p>Essa técnica tem sido usada há milhares de anos em todo o mundo. Ela tem sido utilizada para tratar uma ampla variedade de condições de saúde e tem um histórico comprovado de eficácia.</p>
          <p>Se você está buscando uma forma segura e eficaz de aliviar o estresse, reduzir a dor e promover o  bem-estar., a reflexologia pode ser uma opção confiável.</p>
          <p>Além disso, a reflexologia é uma terapia natural e não invasiva, o que significa que não há risco de efeitos colaterais graves ou danos ao seu corpo. Ao contrário de outras formas de tratamento, a reflexologia trabalha com o próprio corpo para estimular a Harmonia e o equilíbrio.</p>
        </About>
        <Benefits title={"Alguns dos Benefícios"} image={"/benefits.jpg"}>
          <li className="paralax-left">Redução do estresse e da ansiedade.</li>
          <li className="paralax-right">Alívio da dor.</li>
          <li className="paralax-left">Melhoria da circulação sanguínea.</li>
          <li className="paralax-right">Promoção de um sono melhor.</li>
          <li className="paralax-left">Estimulação do sistema imunológico.</li>
          <li className="paralax-right">Equilíbrio hormonal.</li>
          <li className="paralax-left">Redução da pressão arterial.</li>
          <li className="paralax-right">Melhora a digestão.</li>
          <li className="paralax-left">Alivia as dores de cabeça.</li>
          <li className="paralax-right">Reduzir a fadiga.</li>
          <li className="paralax-left">Promover uma sensação geral de bem-estar.</li>
        </Benefits>
        
        <Depoiments depoimentImages={depoimentImages}/>
        <Extra/>
      </div>
      
      <Contact/>
    </>
  );
}
