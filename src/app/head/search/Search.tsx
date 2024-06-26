import React from "react";
import './Search.css';
import image from './Search.png';

export function Search() {
    return (
        <div className={"Search"}>
            <img  src={image}  alt={"Поиск"}/>
        </div>
    )
}