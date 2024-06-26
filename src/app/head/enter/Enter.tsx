import React from "react";
import './Enter.css';
const image = require('./Enter.png');

export function Enter() {
    return (
        <div className={"Enter"}>
            <img  src={image}  alt={"Войти"}/>
            <div>Войти</div>
        </div>
    )
}