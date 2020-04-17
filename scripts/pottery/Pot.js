/*
    Pot.js
    Creates an HTML representation of a pot along with a sell button event listener
    
    Author: Heidi
*/

const eventHub = document.querySelector("#container")

export const Pot = (potteryObject) => {
    return `
    <section id="pot--${potteryObject.id}" class="pot">
    <h3>${potteryObject.shape}</h3>
    <p><span class="bold">Weight</span> ${potteryObject.weight} lbs</p>
    <p><span class="bold">Height</span> ${potteryObject.height} ft</p>
    <p><span class="bold">Price</span> $${potteryObject.price}</p>
    <p><button id="sellButton--${potteryObject.id}" value="You sold a ${potteryObject.shape} for $${potteryObject.price}">Sell</button></p>
    </section>
    `
}

eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("sellButton")) {
        const [prefix, potId] = event.target.id.split("--")
        document.querySelector(`#pot--${potId}`).classList.add("hide")
        window.alert(event.target.value)
    }
})