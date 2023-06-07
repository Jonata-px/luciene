import React from 'react'
import styles from "./contact.module.css";
import {FaPhoneAlt, FaWhatsapp} from "react-icons/fa";
import TicTic from '../TicTic';
import Link from 'next/link';
import WhatsAppButton from '../WhatsAppButton';
export default function Contact({isRefexologia = true}) {
    

    return (
        <section id="contato" className={styles.contact}>
            <TicTic top={true} color={"#fff"}/>
            <div className="container">
                <h2 className="paralax-right">Agende uma {isRefexologia ? "Sessão" : "Avaliação"}</h2>

                <div className={styles.contacts_wrap}>
                    {isRefexologia &&
                        <div className='paralax-left'>
                            <h4>Atendimento a domicílio em <span>Pinhalzinho, SP</span></h4>
                        </div>
                    }
                    <div className={styles.btn_wrap}>
                        <div className='paralax-left'>
                            <a href="tel:+5511971075540" className="btn">
                                <FaPhoneAlt/>
                            </a>
                        </div>
                        
                        <WhatsAppButton/>

                    </div>

                    <h3 className='paralax-right'>Luciene Gonsalves</h3>
                    <h4 className='paralax-left'> Reflexoterapeuta </h4>

                    <div className={styles.certification_wrap+' paralax'}>
                        <Link className={styles.certification} href={"/certificado/Reflexologia.pdf"}>Certificação Refrexologia Podal</Link>
                        <Link className={styles.certification} href={"/certificado/Sais_de_Schussler.pdf"}>Certificação Sais de Schüssler</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
