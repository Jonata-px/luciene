"use client"
import React from 'react'
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Swiper, SwiperSlide} from "swiper/react";
import styles from "./depoiments.module.css";

// import Swiper core and required modules
import SwiperCore, {
    Pagination,
    Navigation,
    Autoplay
} from 'swiper';
SwiperCore.use([Autoplay,Pagination,Navigation]);

export default function Depoiments({depoimentImages = []}) {

    return (
        <section className={styles.depoiments} id="depoimentos">

            <div className={styles.border_top}>
                <div className="container"></div>
            </div>

            <div className='container'>

                <h2 className="paralax-right">Depoimentos</h2>

                <div className='paralax'>
                    <Swiper slidesPerView={3}
                    // loop={true} loopFillGroupWithBlank={true}
                    // autoplay={{
                    //     "delay": 5000,
                    //     "disableOnInteraction": false
                    // }} 
                    spaceBetween={50} 
                    // freeMode={true} 
                    pagination={{
                    "clickable": true,
                    }} 
                    navigation={true}  
                    breakpoints={{
                        "0": {
                            "slidesPerView": 1,
                            "spaceBetween": 20
                        },
                        "500": {
                            "slidesPerView": 2,
                            "spaceBetween": 50
                        },
                        "600": {
                            "slidesPerView": 3,
                            "spaceBetween": 50
                        },
                        }} >
                        {
                            depoimentImages.map((val,key)=>{
                                return(
                                    <SwiperSlide key={key} className={styles.slide_single}>
                                        <img src={val} alt={`Depoiment ${key+1}`} title={`Depoiment ${key+1}`}/>
                                    </SwiperSlide>  
                                )
                            })
                        }      
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
