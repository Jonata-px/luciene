import React from 'react'
import styles from "./about.module.css";
import Scalable from "../Scalable";
export default function About() {
    return (
        <section className={styles.about} id={"sobre"}>
            <div className="container">
                <Scalable>
                    <h2 className='paralax-right'>Refrexologia Podal</h2>
                    <div className={styles.about_wrap}>
                        <div className={styles.about_text+" paralax-left"}>
                            <p>A REFLEXOLOGIA PODAL é uma técnica de pressão em zonas reflexas dos pés, capaz de atuar na prevenção e auxilio ao tratamento de disfunções no corpo.</p>
                            <p>Essa técnica tem sido usada há milhares de anos em todo o mundo. Ela tem sido utilizada para tratar uma ampla variedade de condições de saúde e tem um histórico comprovado de eficácia.</p>
                            <p>Se você está buscando uma forma segura e eficaz de aliviar o estresse, reduzir a dor e promover o  bem-estar., a reflexologia pode ser uma opção confiável.</p>
                            <p>Além disso, a reflexologia é uma terapia natural e não invasiva, o que significa que não há risco de efeitos colaterais graves ou danos ao seu corpo. Ao contrário de outras formas de tratamento, como medicamentos ou cirurgias, a reflexologia trabalha com o próprio corpo para estimular a cura e o equilíbrio.</p>
                            {/* <p>Por fim, a reflexologia é uma prática que tem sido usada há milhares de anos em todo o mundo. Ela tem sido utilizada para tratar uma ampla variedade de condições de saúde e tem um histórico comprovado de eficácia. Milhões de pessoas em todo o mundo relataram resultados positivos após a realização de sessões de reflexologia.</p> */}
                        </div>
                    </div>
                </Scalable>
            </div>
        </section>
    )
}
