'use client'
import React from "react"
import { TypeAnimation } from 'react-type-animation';
import './../assets/css/textAnimation.css';

export default function TextAnimation(){
    return(
        <p className="heading heading-mb fw-bold text-white title-dark mb-3">We will help you find <br/> your
        <TypeAnimation
            sequence={[
                'Wonderful',
                1000, 
                'Dream',
                1000,
            ]}
            wrapper="span"
            speed={5}
            repeat={Infinity}
            className="typewrite text-primary ms-2"
            cursor={false}
        /> home</p>
    )
}