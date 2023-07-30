//Reduce
let numbers = [1,2,4,5,4,67,54,4]
let strs = ['A','B', 'C', 'D'] //ABCD
//ABCD
let sum = strs.reduce((acc, item, index ) => { //acc = 0
   //acc = ABCD
    return acc + ' ' + item  //acc = acc + item
})
//When acc's initiaql value not specified, then arrays' first element is acc
console.log(sum);

// some, every, find
let b = numbers.every((item, index) => {
    // if(item > 5){
    //     return true
    // }
    return item > 0
})

let c = numbers.some((item, index) => {
    // if(item > 5){
    //     return true
    // }
    return item > 5
})

// console.log(c);

let numbers2 = [1,2,4,5,4,6,5,14]
let data = numbers2.find((item, index) => {
    return item > 4
})
// console.log(data);

//1: Write a program to find the first even number in numbers2.
//2: Write a program that filters out  an array of strings, where length is greater than 5.


//Objects:
//key/value pairs | property/value pairs
let user = {
    name: "John Doe",   //key/value pair
    hobbies: ['Cricket', 'Swimming'],
    age: 100,
    city: "New York",
    address: {
        "street Add": "3, House. 8",
        "streetName": "Fake Street",
        country: "US",
        
        
    }
}


//forEach
//[ '0 is Amazing', '1 is Amazing' ]
user.hobbies = user.hobbies.map((item, index) => {
    return index + ' is Amazing'

})

console.log(user.hobbies);




//Add/Update
user.age = 35
user.contact = "+1234567"
user.address.continent = "Europe"


// console.log(user);
//Dot Notation | Square Brackets Notation (Ways of Accessing)

//Array of Objects
let users = [
    { name: "John", age: 30, income: "$24000" },
    { name: "Vanessa", age: 19, income: "$120000" },
    { name: "Robert", age: 41, income: "$30000" }
]


//forEach

users.forEach((item, index) => {
    console.log(item);
})

//Map
let newUsers = users.map((item, index) => {
    //{ name: 'John', age: 30, income: '$24000' }
    item.age = item.age + 10
    item.income = item.income + "0"
    item.gender = "M"
    item.ukCitizen = false
    return item
})

console.log(newUsers);


//3:  Write a program that maps over an array of countries, adds a property population to it.
//spread Operator => ...
let country = {
name: "Japan",
population: "300000",
capital: "Tokyo",
//as many
}

//for In.
//Object Oriented Programming.
//Async/Await | .then() => https://restcountries.com/v3.1/all

country =  {...country, border: "X"}

let num = [1,2,3,4]
let num3 = [...num, 10,20,30]

console.log(num3);