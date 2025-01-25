import React from "react";
import { useState, useEffect } from "react";

const RandomizeCount = ({target, duration, className}) => {
const [effectRandom, setEffectRandom] = useState(0);
const [targetNumber, setTargetNumber] = useState(false);


useEffect(() => {
    const interval = setInterval(() => {
        if(!targetNumber){
            setEffectRandom(Math.floor(Math.random() * 1000));
        }
    }, 60)


    const timeout = setTimeout(() => {
        setTargetNumber(true);
        clearInterval(interval)
    }, duration)


    return () => {
        clearInterval(interval)
        clearTimeout(timeout)
    }


},[targetNumber, duration]);

    return(
        <div>
            <h1 className={`${className}`}>
            {targetNumber ? target : effectRandom}
            </h1>
        </div>
    )
}

export default RandomizeCount;