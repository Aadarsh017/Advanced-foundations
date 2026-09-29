import { getstockData } from "./fackstockAPI.js";
setInterval(function () {
    const stockdata = getstockData()
    renderStockTicker(stockdata)
}, 1500)
let prevPrice = null


function renderStockTicker(stockdata) {
    const stockDisplayName = document.getElementById('name')
    const stockDisplaySymbol = document.getElementById('symbol')
    const stockDisplayPrice = document.getElementById('price')
    const stockDisplayPriceIcon = document.getElementById('price-icon')
    const stockDisplayTime = document.getElementById('time')


const priceDirectionIcon = price > prevPrice ? 'green.svg' : price < prevPrice ? 'red.svg': 'grey.svg'




    const {name , sym , price , time} = stockdata
   stockDisplayName.innerText = name 
   stockDisplaySymbol.innerText = sym 
   stockDisplayPrice.innerText = price 
   stockDisplayTime.innerText = time 


}