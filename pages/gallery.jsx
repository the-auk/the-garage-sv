import React, {Component, useState, useRef} from 'react'
import styles from "../styles/SliderSection.module.css"
import Slider from "./Slider"
import { bikeList } from "../components/Bikelist"
import Navigation from "./Navigation"
import Footer from "./Footer"
import Head from 'next/head'

export default function SliderSection(){
    const [beforeBike, setBeforeBike] = useState(bikeList[0].beforeImg);
    const [afterBike, setAfterBike] = useState(bikeList[0].afterImg);
    const [active, setActive] = useState(1);

    const ChangeHandler = (event) =>{
        setActive(event.target.getAttribute('id'));
        var bikeid=event.target.getAttribute('id');
        bikeList.forEach((el)=>{
            if(el.key==bikeid){
                setBeforeBike(el.beforeImg)
                setAfterBike(el.afterImg)
            }
        });
    }

    const renderList = bikeList.map((bike) => 
    <button key={bike.key} id={bike.key} className={active==bike.key ? styles.activebutton : styles.bikebutton} 
    onClick={ChangeHandler}>{bike.name}</button>);

    return(
        <div className={styles.contentwrapper}>
            <Navigation />
            <div className={styles.galleryHero}>
                <div className={styles.galleryHeroText}>
                    Coming Soon...
                </div>
            </div> 
        {/* <div className={styles.slidersectionwrapper}>
            <div className={styles.sliderlist}>
            {renderList}
            </div>
            <div className={styles.sliderwrap}>
                <Slider beforeimg={beforeBike} afterimg={afterBike} />
            </div>
        </div> */}
            <Footer />
            <Head>
            <title>The Garage of Silicon Valley</title>
            <meta name="description" content="The Garage of Silicon Valley" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>    
    )
}