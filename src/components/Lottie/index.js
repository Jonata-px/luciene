"use client"; // this is a client component 👈🏽
import React, {useRef, useEffect} from "react";
import Lottie from "lottie-react";
import footprintsCircleAnimation from "./footprints-circle.json";

const Example = () => {

    const lottieRef = useRef();


    const animateLoattie = ()=>{
        let lottie = lottieRef.current;
        
    }

    useEffect(()=>{
        if(lottieRef?.current)
            animateLoattie();
    },[lottieRef])

    return <Lottie ref={lottieRef} animationData={footprintsCircleAnimation} />;
};

export default Example;