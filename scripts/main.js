import { PotteryFactory, FirePottery } from "./PotteryFactory.js";

console.log(FirePottery(PotteryFactory("round", 1, 2), 9000))
console.log(FirePottery(PotteryFactory("square", 2, 3), 2200))
console.log(FirePottery(PotteryFactory("long", 1, 1), 2100))