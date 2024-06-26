import React from "react";
import './Basket.css';
const image = require('./Basket.png');

export function Basket() {
    return (
        <div className={"Basket"}>
            <img  src={image}  alt={"Корзина"}/>
            <div>Корзина</div>
        </div>
    )
}