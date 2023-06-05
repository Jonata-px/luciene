"use client"
import React, {useEffect} from 'react'
import styles from "./footer.module.css";
export default function index() {

    const getScroll = ()=>{
        var body = document.body;

        body.addEventListener('scroll',()=>{
            var paralaxB = document.querySelectorAll('.paralax');
            var paralaxL = document.querySelectorAll('.paralax-left');
            var paralaxR = document.querySelectorAll('.paralax-right');
            var header = document.querySelector('header');
            // if(alturaScroll > 10 && window.innerWidth > 768){
            //     header.style.backgroundImage = 'linear-gradient(#eef0fd 5%,rgb(250, 250, 250))';
            // }else{
            //     header.style.backgroundImage = 'linear-gradient(#eef0fd 5%,white)';
            // }
            if(typeof paralaxB === 'object'){

                paralaxB.forEach(async(val,index)=>{
                    if(elementoVisivel(val)){
                        
                        // setTimeout(()=>{
                            val.style.opacity = 1;
                            val.style.bottom = 0;
                        // },parseInt(time));
                    }else{
                        val.style.opacity = 0;
                        val.style.bottom = "-80px";
                    }
                })
            }

            if(typeof paralaxL === 'object'){
                paralaxL.forEach((val,index)=>{
                    if(elementoVisivel(val)){
                        val.style.opacity = 1;
                        val.style.left = 0;
                    }else{
                        val.style.opacity = 0;
                        val.style.left = "-80px";
    
                    }
                })
            }
            if(typeof paralaxR === 'object'){
                paralaxR.forEach((val,index)=>{
                    if(elementoVisivel(val)){
                        val.style.opacity = 1;
                        val.style.right = 0;
                    }else{
                        val.style.opacity = 0;
                        val.style.right = "-80px";
                    }
                })
            }

        })

        body.scrollTop = body.scrollTop + 1;
    }

    function elementoVisivel(elemento) {
        var retanguloElemento = elemento.getBoundingClientRect();
        var alturaJanela = window.innerHeight || document.documentElement.clientHeight;
    
        // Verifica se o topo do elemento é maior que 0 e menor que a altura da janela
        var topoVisivel = retanguloElemento.top >= 0 && retanguloElemento.top < alturaJanela;
    
        // Verifica se a parte inferior do elemento está dentro da janela
        var parteInferiorVisivel = retanguloElemento.bottom > 0 && retanguloElemento.bottom <= alturaJanela;
    
        return topoVisivel || parteInferiorVisivel;
    }
    
    useEffect(()=>{
        getScroll();
    },[])

    return (
        <footer className={styles.footer}>
            <div className="container">
                <small><a href="https://jfcoder.com.br/" >@ site developed by jfcoder · 2023</a></small>
            </div>
        </footer>
    )
}
