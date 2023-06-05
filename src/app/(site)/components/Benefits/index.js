import React from 'react'
import styles from "./benefits.module.css";
import Scalable from "../Scalable";
import ScalableImage from "../ScalableImage";
export default function Benefits() {
    return (
        <section className={styles.benefits} id={"beneficios"}>
            <div className={styles.border_top}>
                <div className="container"></div>
            </div>

            <div className="container">
                <Scalable>
                    <h2 className="paralax-right">Alguns dos Benefícios</h2>
                    <div className={styles.benefits_wrap}>
                        <ul>
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
                        </ul>

                        <div className={styles.image+" paralax"}>
                            <ScalableImage imagePath={"/benefits.jpg"} />
                        </div>
                    </div>
                </Scalable>
            </div>
        </section>
    )
}
