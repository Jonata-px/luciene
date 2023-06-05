"use client"; // this is a client component 👈🏽
import React, {useEffect, useRef} from 'react';
import styles from './banner.module.css';
import Scalable from "../Scalable";
import ScalableImage from "../ScalableImage";
import TicTic from "../TicTic";
export default function Banner() {

    return (
        <section id={"inicio"} className={styles.banner}>
            <ScalableImage imagePath={"/banner-2.jpg"}/>
            <div className={"container "+styles.container}>
                <Scalable>
                    <div className={styles.content_wrap+" paralax-right"} >
                        
                            <h2>Luciene</h2>
                            <h1>Reflexologia Podal <span>Em Pinhalzinho SP</span></h1>
                            <h3>Seu bem estar começa pelos pés!</h3>
                            <a href={"#sobre"} className='btn'>
                                Saiba Mais!
                            </a>
                        
                    </div>
                </Scalable>
            </div>
            
            <TicTic/>
        </section>
    );
}
