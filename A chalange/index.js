import { itemBoughtArr } from "./itemsBoughtArr.js";

function totalcost(itemBoughtArr ) {
    
    const total = itemBoughtArr.reduce((total , item) =>
     total + item.price , 0)
      return total
}

console.log(totalcost(itemBoughtArr));