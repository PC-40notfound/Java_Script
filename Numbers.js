let any=400
//       OR
let any2=new Number(400) //Declaring using object
console.log(any)
console.log(any2) //Specifically a number 

//Change into string:
console.log(typeof(any)) //before changing into string
new_any=any.toString()
console.log(typeof(new_any))

//Change to a floating point number:
console.log(any.toFixed(2)) //Here toFixed(2) creates two decimal places after the original number i.e. 400.00
//toFixed() is used to create more precison in the calculations 

//Rounding off or discarding unrequired digits:
let another=35.879
console.log(another.toPrecision(2)) //Here it will round off to make only 2 significant digits  
another=234.123
console.log(another.toPrecision(4)) //Here it will only keep upto 4 significant digits, i.e. 234.1
another=0.40201
console.log(another.toPrecision(4)) //Here 0.40201 becomes 0.4020,keeping only 4 significant digits
another=0.4020 //The number of significant digits here is already 4 because trailing zero is not significant 
console.log(another.toPrecision(4)) //Output:[0.4020] Here '0' is also included because ,chatgpt

//Changing into International Number System:
let new1=1434530
console.log(new1.toLocaleString()) //Changes the digits the positions of tens hundreds so on(with commas) 
// This increases the Readability of the number 
//console.log(new1.toLocaleString('en-IN')) changes into the Hindu Arabic number system

/* FOR MORE PROPERTIES OF NUMBER EXECUTE IN CONSOLE:let any=new Number("Any number")
                                                    console.log(any) */