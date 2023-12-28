function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example: Generate a random integer between 1 and 100
let randomNum = getRandomInteger(1, 100);
//   console.log(randomNum);
let n, chance = 0;
do {
    n = prompt("ENter your Guess");
    if (n != randomNum) {
        chance++;
        console.log("try again");
        console.log(n>randomNum?"Less than your input":"More than your input");
    }

}while(n!=randomNum);
console.log("Your score is",100-chance);
console.log("The number is ",randomNum);