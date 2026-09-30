// const getSpendAlart = (amount , x) => {
//     return `warning!${x} you just spent ${amount} ` 
// }

// console.log(getSpendAlart(17 ,33));


// let  x = (amount) =>{
//     if (amount < 20 ) {
//         return ' u are poor'
//     }
//     else
//     {
//         return 'u are not that poor'
//     }
// } 

// console.log(x(22));

// _________________________________________________________

// challange

//  let speedWarning=  (speed,speedLimit) => {
//     // console.log(`u are going at ${speed} km/h and the speed limit is ${speedLimit} km/h` );
//     if (speed >speedLimit) {
//         return (`your car speed is ${speed} and you  are under the speed  limit`)
//         }
//         else {
//         return (`your car speed is ${speed} and u are brack the rule`)

//         }
    
// }

// console.log( speedWarning(88 , 100));

// ________________________________________________________________________________

// Another challange 

const DTM = [267 , 345 , 234 , 190 ,299]

const DTkm = DTM.map((x)=>Math.round(x*1.6))

console.log(DTkm);


// const DTkm = (DTM) => {
//     return (`${.mapDTM*1.60934}`)
// }
// miles * 1.60934