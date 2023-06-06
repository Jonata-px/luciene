import React from 'react'
import styles from "./benefits.module.css";
import Scalable from "../Scalable";
import Link from 'next/link';
export default function Extra() {
    return (
        <section className={styles.benefits} >
            <div className={styles.border_top}>
                <div className="container"></div>
            </div>

            <div className="container">
                <Scalable>
                    <h2 className="paralax-right">{"Conheça Tambem"}</h2>
                    <div className={styles.btn_wrap+" btn paralax"}>
                        <Link href={"/sais"} className={styles.btn}>SAIS DE SCHÜSSLER</Link>
                    </div>
                    
                </Scalable>
            </div>
        </section>
    )
}
