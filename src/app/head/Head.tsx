import React from "react";
import './Head.css';
import {Search} from "./search/Search";
import {Enter} from "./enter/Enter";
import {Orders} from "./orders/Orders";
import {Favourites} from "./favourites/Favourites";
import {Basket} from "./basket/Basket";

export function Head() {
    return (
        <div className={"Head"}>
            <Search />
            <Enter />
            <Orders />
            <Favourites />
            <Basket />
        </div>
    )
}