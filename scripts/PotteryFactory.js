/*
    Pottery Factory
    
    Author: Heidi
*/

//generator function to create an ID
function* autoIncrement() {
    var index = 0
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