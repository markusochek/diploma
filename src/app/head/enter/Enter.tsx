import React from "react";
import './Enter.css';
import image from './Enter.png';

export function Enter() {
    return (
        <div className={"Enter"}>
            <img  src={image}  alt={"Войти"}/>
            <div>Войти</div>
        </div>
    )
}