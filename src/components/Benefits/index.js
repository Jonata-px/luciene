import React from 'react'
import styles from "./benefits.module.css";
import Scalable from "../Scalable";
import ScalableImage from "../ScalableImage";
export default function Benefits({children, title,image}) {
    return (
        <section className={styles.benefits} id={"beneficios"}>
            <div className={styles.border_top}>
                <div className="container"></div>
            </div>

            <div className="container">
                <Scalable>
                    <h2 className="paralax-right">{title}</h2>
                    <div className={styles.benefits_wrap}>
                        <ul>
                            {children}
                        </ul>

                        <div className={styles.image+" paralax"}>
                            <ScalableImage imagePath={image} />
                        </div>
                    </div>
                </Scalable>
            </div>
        </section>
    )
}
