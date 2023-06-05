"use client"; // this is a client component 👈🏽
import React, {useEffect, useRef} from 'react';
import styles from './header.module.css';
import {FaAngleRight } from "react-icons/fa";
export default function Header() {
    const headerRef = useRef();

    const animateHeader = ()=>{
        let optiosMenu = headerRef.current.children;
        let inicio = document.getElementById("inicio");
        let sobre = document.getElementById("sobre");
        let beneficios = document.getElementById("beneficios");
        let contato = document.getElementById("contato");

        const sessions = [inicio, sobre, beneficios, contato];

        document.body.addEventListener("scroll",(e)=>{
            let scrollTop = e.target.scrollTop;
            for(let i = 0; i < optiosMenu.length ;i++){
                if(scrollTop + 200 >= sessions[i].offsetTop && scrollTop + 200 <= sessions[i].offsetTop + sessions[i].offsetHeight){
                    optiosMenu[i].classList.add(styles.selectes);
                }else{
                    optiosMenu[i].classList.remove(styles.selectes);
                }
                
            }
        });
    
    }


    useEffect(()=>{
        if(headerRef?.current)
            animateHeader();
    },[headerRef])
    return (
        <header className={styles.header}>
            <div className="container">
                <nav>
                    <ul ref={headerRef}>
                        <li>
                            <a href="#inicio">Início</a>
                            <FaAngleRight/>
                        </li>
                        <li>
                            <a href="#sobre">Sobre</a>
                            <FaAngleRight/>
                        </li>
                        <li>
                            <a href="#beneficios">Benefícios</a>
                            <FaAngleRight/>
                        </li>
                        <li>
                            <a href="#contato">Contato</a>
                            <FaAngleRight/>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
