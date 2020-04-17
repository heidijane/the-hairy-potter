/*
    Pot.js
    Creates an HTML representation of a pot
    
    Author: Heidi
*/

export const Pot = (potteryObject) => {
    return `
    <section class="pot">
    <h3><span class="bold">Shape</span> ${potteryObject.shape}</h3>
    <p><span class="bold">Weight</span> ${potteryObject.weight} lbs</p>
    <p><span class="bold">Height</span> ${potteryObject.height} ft</p>
    <p><span class="bold">Price</span> $${potteryObject.price}</p>
    </section>
    `
}