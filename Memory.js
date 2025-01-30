//Stack memory(Copy)

let value1="Hello world"
let value2=value1
console.log(value1)
console.log(value2)

//After changing the value

value2="Only hello"
console.log(value2)//[Output(Changed):Only hello]
console.log(value1)//(Output: Hello world)
//Stack memory stores the primitive datatypes and calls by value

//Heap memory(Reference)

let user1={                                      //This is an object
        email:"Fake@gmail.com",
        id:1223
}
let user2=user1
console.log(user1.email) //(.email is used to access the email component of the function, user1)
console.log(user2.email) //(.email is used to access the email component of the function, user2)

//After changing value of email in one function

user2.email="New@gmail.com"
console.log(user1.email)
console.log(user2.email)

//Heap memory uses calling by reference, .user2 takes the reference from the memory of user1
//In heap memory the value of the component changes in both the functions on changing value of the component in any one of the function.