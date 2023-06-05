"use client"; // this is a client component 👈🏽
import React, {useEffect, useRef} from 'react';
import styles from './image.module.css';
export default function Banner({imagePath, opacity = "0.2", dark = false}) {
    const bannerRef = useRef();


    const animateBanner = ()=>{
        let banner = bannerRef.current;
        document.body.addEventListener('scroll',(e)=>{
            let offsetTop = e.target.scrollTop - banner.parentNode.offsetTop - 100;
            let scrollTop = offsetTop < 0 ? 0 : offsetTop / 2500;
            let scale = 1 + scrollTop;
            banner.style.scale = scale < 1 ? 1 : scale;
        });

    }

    useEffect(()=>{
        if(bannerRef?.current)
            animateBanner();
    },[bannerRef])

    return (
        <div ref={bannerRef} style={{backgroundImage: "url('"+imagePath+"')",backgroundColor:"rgba(0, 0, 0,"+opacity+")",backgroundBlendMode:dark ? "darken" : "lighten"}} className={styles.background}/> 
    );
}
