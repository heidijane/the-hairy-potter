/*
    Pottery Factory
    Functions that create a piece of pottery, fire it, and then determine if it can be sold
    
    Author: Heidi
*/

//empty array to store pottery inventory
const potteryToSell = []


//generator function to create an ID
function* autoIncrement() {
    var index = 1
    while (true)
        yield index++
}

//assign the generator function to a variable
let potteryId = autoIncrement()

export const PotteryFactory = (shape, weight, height) => {

    return {
        "id": potteryId.next().value,
        "shape": shape,
        "weight": weight,
        "height": height
    }
}

export const FirePottery = (potteryObject, kilnTemp) => {
    //add two new properties to the pottery object
    potteryObject.fired = true
    potteryObject.cracked = false

    //if kiln temperature is too high, the pottery will crack
    if (kilnTemp > 2200) {
        potteryObject.cracked = true
    }

    return potteryObject
}

//determine if a piece of pottery can be sold and if so, give it a price and push it into our sellable pottery array
export const assessPottery = (potteryObject, potteryToSellArray) => {
    if (potteryObject.cracked === false) {
        if (potteryObject.weight >= 3) {
            potteryObject.price = 40
        } else {
            potteryObject.price = 20
        }
        potteryToSellArray.push(potteryObject)
    }
}

//create 5 pieces of pottery
const potteryArray = [
    PotteryFactory("bowl", 2, .5),
    PotteryFactory("bottle vase", 3, 3),
    PotteryFactory("urn", 10, 2),
    PotteryFactory("cylinder vase", 1, 2),
    PotteryFactory("botanical jar", 5, 3)
]

potteryArray.forEach(pot => {
    //create a random numer to simulate kiln temp fluctuations
    const kilnTemp = Math.floor(Math.random() * (3000 - 1500)) + 1500;
    assessPottery(FirePottery(pot, kilnTemp), potteryToSell)
})