import React from 'react'
import styles from "./contact.module.css";
import {FaPhoneAlt, FaWhatsapp} from "react-icons/fa";
import TicTic from '../TicTic';
export default function Contact() {
    return (
        <section id="contato" className={styles.contact}>
            <TicTic top={true} color={"#fff"}/>
            <div className="container">
                <h2 className="paralax-right">Entre em Contato</h2>

                <div className={styles.contacts_wrap}>
                    <div className='paralax-left'>
                        <h3>Atendimento em <span>Pinhalzinho SP</span></h3>
                        <p>Entre em contato e agende uma sessão</p>
                    </div>
                    <div className={styles.btn_wrap}>
                        <div className='paralax-left'>
                            <a href="" className="btn">
                                <FaPhoneAlt/>
                            </a>
                        </div>

                        <div className='paralax-right'>
                            <a href="" className={styles.whatsapp+" btn"}>
                                <FaWhatsapp/>
                            </a>
                        </div>
                    </div>

                    <h4 className="paralax">Luciene Gonsalves</h4>
                </div>
            </div>
        </section>
    )
}
