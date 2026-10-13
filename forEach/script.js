const numbers = [2,3,4,6,9,14] 
let sqr = []
// numbers.forEach((a,b,c)=> {
// let squred = `the ${a} square is ${a *a }`
    
//  sqr.push = squred
// })

// console.log(sqr);

numbers.forEach((a)=>{   // most improtant thing it doesnot return anything , its void
    if (a % 2 === 0) {
       sqr.push(a)
    }
   


})

console.log(sqr)
