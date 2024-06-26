import React from "react";
import './Favourites.css';
import image from './Favourites.png';

export function Favourites() {
    return (
        <div className={"Favourites"}>
            <img  src={image}  alt={"Избранное"}/>
            <div>Избранное</div>
        </div>
    )
}