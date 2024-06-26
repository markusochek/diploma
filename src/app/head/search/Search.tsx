import React from "react";
import './Search.css';
const image = require('./Search.png');

export function Search() {
    return (
        <div className={"Search"}>
            <img src={image} className={"SearchImg"}  alt={"Поиск"}/>
        </div>
    )
}