console.log(1+"2"+3)
console.log("1+"+3)
console.log(1+"3")
console.log(1+2+"3")
//console.log(3 + 4 * 5 % 3)
let c="2">1
console.log(c)
console.log(typeof c )
console.log(null>0 )//Treats null as a number i.e 0
console.log(null<0)
console.log(null==0) //Treats null as a datatype.
console.log(null<=0)     
console.log(null>=0)
console.log ("2"==2) //checks only the value(True)
console.log("2"==2) //checks the value as well as the datatype(False)
let any=Symbol('123') 
let any1=Symbol('123')
console.log(any===any1)//(False--> Two same symbols are not equal)
let number=67347845859690676723 //Very big number(Result is not accurate.Output:67347845859690680000)
let number1=67347845859690676723n// BigInt(Accurate result for big number.Output:67347845859690676723n)
console.log(number)
console.log(number1)