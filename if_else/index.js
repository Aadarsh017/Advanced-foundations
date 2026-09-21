// const exerciseTime = 70
// const msg = exerciseTime < 30 ? "you need to try hard"
//     : exerciseTime < 60 ? "doing good!"
//     : "excllent!"
// console.log(msg);

const playerGuess = 6
const correctAnswer = 4

let msg = playerGuess > correctAnswer ? "too high"
     : playerGuess < correctAnswer ? "too low":
     " Exactly right"
    
     

    console.log(msg);
