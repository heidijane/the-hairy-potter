/*
    PotteryList.js
    Outputs sellable pottery onto the DOM
    
    Author: Heidi
*/

import { Pot } from "./Pot.js";
import { usePottery } from "./potteryProvider.js";

const contentTarget = document.querySelector("#inventory")

export const PotteryList = () => {
    const potteryToSell = usePottery()
    contentTarget.innerHTML = potteryToSell.map(pot => Pot(pot)).join('')
}