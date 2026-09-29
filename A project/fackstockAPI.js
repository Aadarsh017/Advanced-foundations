export  function getstockData() {

    return {
        name: 'XtechAI',
        sym: 'QTA',
        price: (Math.random()*(3)).toFixed(2),
        time: new Date().toLocaleTimeString()

    }
}



// console.log(getstockData());







