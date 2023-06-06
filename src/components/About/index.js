import React from 'react'
import styles from "./about.module.css";
import Scalable from "../Scalable";
export default function About({children,title}) {
    return (
        <section className={styles.about} id={"sobre"}>
            <div className="container">
                <Scalable>
                    <h2 className='paralax-right'>{title}</h2>
                    <div className={styles.about_wrap}>
                        <div className={styles.about_text+" paralax-left"}>
                            {children}
                            {/* <p>Por fim, a reflexologia é uma prática que tem sido usada há milhares de anos em todo o mundo. Ela tem sido utilizada para tratar uma ampla variedade de condições de saúde e tem um histórico comprovado de eficácia. Milhões de pessoas em todo o mundo relataram resultados positivos após a realização de sessões de reflexologia.</p> */}
                        </div>
                    </div>
                </Scalable>
            </div>
        </section>
    )
}
