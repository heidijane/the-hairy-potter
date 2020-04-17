/*
    PotteryList.js
    Outputs sellable pottery onto the DOM
    
    Author: Heidi
*/

import { potteryToSell } from "./PotteryFactory.js";
import { Pot } from "./Pot.js";

const contentTarget = document.querySelector("#inventory")

export const PotteryList = () => {
    contentTarget.innerHTML = potteryToSell.map(pot => Pot(pot)).join('')
}