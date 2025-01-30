// console.log(Math) Math is an object in JS

let n=-2
console.log(Math.abs(n)) //Absolute value
console.log(Math.round(5.4)) //Simple rounding off
console.log(Math.ceil(5.1)) //Rounds off to higher number no matter the decimal
console.log(Math.floor(5.9))//Rounds off to lowest value no matter the decimal
console.log(Math.min(1,40,2,8)) //Lowest value in an array.[For highest vale Math.max(array)]

console.log(Math.random()) //Generates a random number between 0 and 1, i.e[0,1]

/*FOR DEFINING A CERTAIN RANGE OF THE GENERATED NUMBER*/

let min=10 //Lower limit(Minimum)
let max=20 //Upper limit(Maximum) 
console.log(Math.floor(Math.random()*(max - min + 1))+min) //This is a general syntax to get a (integer) number within defined range

// Explanation in https://youtu.be/_KqpeDc47Ro?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&t=1104
/* FOR MORE PROPERTIES OF MATH EXECUTE IN CONSOLE:console.log(Math) */
                                                   