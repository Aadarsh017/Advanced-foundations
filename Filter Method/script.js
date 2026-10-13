const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const words = ['apple', 'banana', 'cherry', 'date', 'elder']

const products = [
    { id: 1, name: "Shirt", price: 20, discount: 19 },
    { id: 2, name: "Hat", price: 14, discount: 16 },
    { id: 3, name: "T-shirt", price: 34, discount: 17 },
]
// console.log(numbers);

// let evenNumber= numbers.filter((a,b,c)=>{

//     return a % 2 === 0;

// }).filter((a)=>a%3===0)

// console.log(evenNumber);
// console.log(numbers);

// let x = words.filter((a) => {
//     return a.length > 5
// }
// )
// console.log(x);


let lessThan20 = products.filter((arr)=>{

    return arr.price > 20
        
   

})
console.log(lessThan20);
