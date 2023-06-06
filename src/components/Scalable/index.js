"use client"; // this is a client component 👈🏽
import React, {useEffect, useRef} from 'react';
export default function Banner({children}) {
    const scalableRef = useRef();


    const animateBanner = ()=>{
        let scalableItem = scalableRef.current;
        document.body.addEventListener('scroll',(e)=>{
            let offsetTop = (e.target.scrollTop - scalableItem.parentNode.parentNode.offsetTop - scalableItem.offsetHeight + 100);
            let scrollTop = offsetTop < 0 ? 0 : offsetTop / 1000;
            let scale = 1 - scrollTop;
            scalableItem.style.scale = scale < 0 ? 0 : scale;
        });
    }

    useEffect(()=>{
        if(scalableRef?.current)
            animateBanner();
    },[scalableRef])

    return (
        <div ref={scalableRef}> 
            {children}
        </div>
    );
}
