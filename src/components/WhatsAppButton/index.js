"use client"
import React, {useRef, useEffect, useState} from 'react'
import {FaWhatsapp} from "react-icons/fa";
import styles from "./whatsapp.module.css";

export default function WhatsAppButton() {
    const buttonRef = useRef();
    const [isFixed, setIsFixed] = useState(true); 
    const getScroll = ()=>{
        var body = document.body;

        body.addEventListener('scroll',()=>{
            console.log(elementoVisivel(buttonRef.current))
            if(elementoVisivel(buttonRef.current)){
                setIsFixed(false)
            }else if(!elementoVisivel(buttonRef.current)){
                setIsFixed(true);
            }
        })
    }

    function elementoVisivel(elemento) {
        if(!elemento)
            return false;
            
        var retanguloElemento = elemento.getBoundingClientRect();
        var alturaJanela = window.innerHeight || document.documentElement.clientHeight;
    
        // Verifica se o topo do elemento é maior que 0 e menor que a altura da janela
        var topoVisivel = retanguloElemento.top >= 0 && retanguloElemento.top < alturaJanela;
    
        // Verifica se a parte inferior do elemento está dentro da janela
        var parteInferiorVisivel = retanguloElemento.bottom > 0 && retanguloElemento.bottom <= alturaJanela;
    
        return topoVisivel || parteInferiorVisivel;
    }

    useEffect(()=>{
        if(buttonRef.current)
            getScroll();
    },[buttonRef])
    
    return (
        <div className={styles.button_wrap+' paralax-right'} ref={buttonRef}>
            <a 
            href="https://api.whatsapp.com/send?phone=5511971075540&text=" 
            className={isFixed ? styles.whatsapp_fixed+" btn" : styles.whatsapp+" btn" }>
                <FaWhatsapp/>
            </a>
        </div>
    )
}
