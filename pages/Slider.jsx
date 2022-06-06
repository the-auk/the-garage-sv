import React, {Component, useState, useRef} from 'react'
import styles from "../styles/Slider.module.css"

export default function Slider(props) {
        // const [before, setBefore] = useState(props.beforeimg)
        // const [after, setAfter] = useState(props.afterimg)

        // if(props.beforeimg!=before || props.afterimg!=after){ 
        //     setBefore(props.beforeimg)
        //     setAfter(props.afterimg)
        // }

        const [imageRevealFraq, setImageRevealFrag] = useState(0.5);
        const imageContainer = useRef();
        const slide = (xPos) => {
            const containerBoundingRect = imageContainer.current.getBoundingClientRect()
            setImageRevealFrag(()=>{
                if(xPos < containerBoundingRect.left){
                    return 0
                }
                else if(xPos > containerBoundingRect.right){
                    return 1
                }else{
                return (xPos-containerBoundingRect.left)/ containerBoundingRect.width
            }});
        }
        const handleTouchMove =(event) =>{
            slide(event.touches.item(0).clientX)
        }
        const handleMouseDown = () =>{
            window.onmousemove = handleMouseMove;
            window.onmouseup = handleMouseUp;
        }
        const handleMouseUp = () =>{
            window.onmousemove=undefined;
            window.onmouseup=undefined;
        }
        const handleMouseMove = (event) =>{
            slide(event.clientX)
        }
        return (
            <div className={styles.slider} ref={imageContainer}>
                <img className={styles.afterimage} src={props.afterimg} alt="" />
                <img style={{ clipPath: `polygon(0 0, ${imageRevealFraq*100}% 0, ${imageRevealFraq*100}% 100%, 0 100%)` }} className={styles.beforeimage} src={props.beforeimg} alt="" />
            <div style={{left:`${imageRevealFraq*100}%`}} className={styles.movingBar}>
                <div style={{touchAction:"none"}} onMouseDown={handleMouseDown} onTouchMove={handleTouchMove}
                className={styles.movingIcon}>
                    <img src="favicon.ico" style={{userSelect:"none", pointerEvents: "none", height:"70%"}}></img>
                </div>
            </div>
            </div>
        )
    };