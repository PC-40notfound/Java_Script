//Concatination

let name="Prajwal"
let address="Hattiban"
//console.log(name+address+"something") [Not recommended]
console.log(`Hello my name is ${name} and i live at ${address}`)//Sting interpolation
//Back ticks, i.e. ` is used not aphostrophe, i.e.'
// //Output is same as using '+' 

//Declaration of string(using object of JS)
let name2=new String("Prajwal")
console.log(name2)

//Accessing keys in a string.Keys:In string Prajwal keys are 0:P 1:r 2:a.....7:l
console.log(name2[1]) 
console.log(name.length)
console.log(name2.toUpperCase())
console.log(name2.charAt(2)) //to check which character is at which position.[2=>a]
console.log(name2.indexOf('a')) //to check the position of character.[a=>2]
 
//String slicing:
console.log(name2.substring(1,4)) //End position is not included, i.e Output=>Praj
 /*         OR 
let newname=name2.substring(0,4)
console.log(newname)
*/
//For reverse:
console.log(name2.slice(-7,4))
// .slice(start,end) the counting starts from the end of the string if negative number is given, i.e in prajwal -7=p(counting from right to left) & 4=j (from left to right)[Output:Praj]
//If negative value is given in substring it becomes 0, i.e(-1,4)=>(0,4)

//Trim(.trim() removes the space in the variable)
let new1="   Prajwal   "
console.log(new1)
console.log(new1.trim())

//Generally for removing unnecessary spacing in a string such as gmail

//Replace(.replace() Replaces characters in a string)
let any_url="https://prajwal.com/b1c07"
console.log(any_url)//Output: https://prajwal.com/b1c07
console.log(any_url.replace("b1c07","1234"))//Output: https://prajwal.com/1234

//Generally used for removing unneccessary characters in a URL

//includes(Checks whether the string contains the given character pattern)
console.log(any_url.includes("b1c07"))//Output: true
//Boolean datatype(true or false)

//split()[Splits a variable on basis of given separator]
console.log(any_url.split("/"))//Splits the keywords after '/' into an array
//Output: https:, prajwal.com, b1c07

/* FOR MORE PROPERTIES OF STRING EXECUTE IN CONSOLE:let any=new String("Anything")
                                                    console.log(any) */
                                                                                        