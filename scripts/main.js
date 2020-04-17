import { getPottery } from "./pottery/potteryProvider.js";
import { PotteryList } from "./pottery/PotteryList.js";

getPottery()
    .then(PotteryList)