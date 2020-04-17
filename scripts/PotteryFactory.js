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