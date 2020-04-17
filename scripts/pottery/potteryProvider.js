/*
    potteryProvider.js
    Gets pottery objects from the pottery API resource
    
    Author: Heidi
*/

let pottery = []

export const getPottery = () => {
    return fetch("http://localhost:8088/pottery")
        .then(response => response.json())
        .then(response => pottery = response)
}

export const usePottery = () => pottery.slice()