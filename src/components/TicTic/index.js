"use client"; // this is a client component 👈🏽
import React, {useEffect, useRef} from 'react';
import styles from './tictic.module.css';
export default function TicTic({top = false, color = "rgb(207, 222, 224)"}) {

    const ticticRef = useRef();

    const addTIcTic = ()=>{
        var janela = document.documentElement.offsetWidth + 40;
        let tictic = ticticRef?.current;
        let pixels = "";
        if(tictic){
            for(let i=0; i<janela / 20; i++){
                tictic.parentNode.style.position = "relative";
                pixels +=`<pixel style="background-color:${color}" ></pixel>`;
            }   
            
            tictic.innerHTML = pixels;
        }
    }

    useEffect(()=>{
        if(ticticRef?.current){
            addTIcTic();
            window.addEventListener('resize',()=>{addTIcTic();});
        }
    },[ticticRef])

    return (
        <div className={styles.tictic} ref={ticticRef} style={top? {top: "-10px",bottom:"unset"} : {bottom:"-10px",top:"unset"}} />
    );
}
