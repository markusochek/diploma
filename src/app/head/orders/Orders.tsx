import React from "react";
import './Orders.css';
import image from './Orders.png';

export function Orders() {
    return (
        <div className={"Orders"}>
            <img  src={image}  alt={"Заказы"}/>
            <div>Заказы</div>
        </div>
    )
}