import { getstockData } from "./fackstockAPI.js";

setInterval(function () {

    const stockdata = getstockData();

    renderStockTicker(stockdata);

}, 1500);

let prevPrice = null;

function renderStockTicker(stockdata) {

    const stockDisplayName = document.getElementById('name');
    const stockDisplaySymbol = document.getElementById('symbol');
    const stockDisplayPrice = document.getElementById('price');
    const stockDisplayPriceIcon = document.getElementById('price-icon');
    const stockDisplayTime = document.getElementById('time');

    const { name, sym, price, time } = stockdata;

    const currentPrice = Number(price);

    const priceDirectionIcon =
        prevPrice === null ? 'grey.svg' :
        currentPrice > prevPrice ? 'green.svg' :
        currentPrice < prevPrice ? 'red.svg' :
        'grey.svg';

    const priceIconElement = document.createElement('img');

    priceIconElement.src = `svg/${priceDirectionIcon}`;
    priceIconElement.alt = 'Price direction icon';

    stockDisplayPriceIcon.innerHTML = '';
    stockDisplayPriceIcon.appendChild(priceIconElement);

    stockDisplayName.innerText = name;
    stockDisplaySymbol.innerText = sym;
    stockDisplayPrice.innerText = price;
    stockDisplayTime.innerText = time;

    prevPrice = currentPrice;
}