// function selectItem(item) {
//     let price = ""

//     switch (item) {
//         case 'coffee':
//             price = 3
//             break;

//         case 'sandwiches':
//             price = 5
//             break;

//         case 'Salad':
//             price = 4
//             break;

//         case 'Lemon cake ':
//             price = 9
//             break;

//         default:
//             return `Sorry , we don't sell ${item}`

//     }
//     return `you select ${item}. that will be $${price}`
// }

// console.log(selectItem('bread'));

// ________________________________________________________________________________________

// const DreamHoliday = {
//     distination: 'kasmir',
//     acitivity: "sit side of a water fall and talk to our friends ",
//     accommodation: "camp",
//     companion: "Raunak and aditya "
// }


// const{ distination,acitivity,accommodation,companion } = DreamHoliday


// console.log(`"I would love to go ${distination}
//     ,${acitivity} and than go to our ${accommodation}
//      or hang out with ${companion} "`);


// ____________________________________________________________________________________________________

// function traficLight(light) {
//     console.log(light);
//     setTimeout(traficLight , 3000 , "🤢")

// }

// traficLight("🔴")

// `the answer is ${x}  of course ! if u got right
//      , give yourself ${y} point`



let stop_el = document.getElementById("stop")

function answer(x, y) {
     console.log(`the answer is ${x}  of course ! if u got right
     , give yourself ${y} point`);


}
let time = setTimeout(answer, 3000, "pihu", 9)

console.log('What is the capital of peru');
stop_el.addEventListener("click", function () {
     clearTimeout(time)
     console.log("the answer will me stoped")
}



)



