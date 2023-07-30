// Arrays, Array Methods, Objects

let numbers = [1,2,3,5,10,5]

//Task1: Modify this code so that it sums only the numbers greater than 3.
for (let i = 3; i < numbers.length; i++){
    sum = sum + numbers[i]
}
console.log(sum)
//Task2: Modify this code so that it sums only even numbers.

// x +=  3 => x += 3 => x = x + 3

//Summing All Numbers
let sum = 0;
for(let i=0; i < numbers.length; i++){
    //if condition {}
    sum = sum + numbers[i]  //sum = 3 + 3
}



//Task3: Modify the current code so that it counts for vowels in the array. a,e,i,o,u
let messages = ['a', 'b', 'e', 'o', 'a', 'i', 'p', 'i', 'm']

let count = 0   //Act like a counter
for(let i = 0; i < messages.length; i++){ // 0 - 5
    
    //Check if messages[i] === 'a'
    if(messages[i] == 'b' || messages[i] == 'a' ){ //i = 1
        count++  //| count += 1 | count++
    }
    
}

// console.log(count);

//pop(), push(), unshift(), shift()

let num = [1,2,3,4]

//Inserting (push())
// varName.methodName()
num.push(5, 100, 3000) //[1,2,3,4,5, 100, 3000]
console.log("After Push:", num);


//Removal from then End (pop())
num.pop()           //[1,2,3,4,5, 100, 3000]
console.log("After Pop, ", num);

// Insert to the Start (unshift())
num.unshift(1)   //Accepts in Data.
console.log('Data Inserted.');
console.log(num);

// Remove from the start (shift())
num.shift()
num.shift()
console.log('Removed first Element,', num);

//push | unshift (Opposite)
//pop | shift (Opp.)

//splice() - Method used to Add/Remove from any index in an Array.

console.log('Num Array before splice: ', num);
//1 arg: location,
// 2 arg: Number of elements you want to remove
// If it is zero, it means you are inserting
//Further arguments are the data you want to insert.
num.splice(1, 1)    //Deletion
// num.splice(1, 0, -99)    //Insertion
console.log(num);

//Arrays/Strings
let str= "test is the message" //['test', 'is', 'the']
//Converting string to An Array.
//split()

console.log('Original:', str);
let splitted = str.split(' ') //Returns the Splitted Array.

console.log('Splitted', splitted);


//Converting Array to String. (.join())
let myarr = ["test", "message", "hello"]
console.log('Original:', myarr);    //["test", "message", "hello"]
let joined = myarr.join("---")    //"testmessagehello"
console.log(joined);

//indexOf, lastIndexOf,  includes

//indexOf (To find the Element)
let cars = ['audi', 'audi', 'honda', 'tesla']
let location = cars.indexOf("audi")
console.log(location);

//includes ()
let found = cars.includes("java")
console.log(found);

if(cars.includes("tesla")){
    console.log('My car is there')
}


// Array Iteration Methods - Array Loops - Array Methods
// forEach, map, filter, reduce, some, every, find, findIndex

console.log('////////////////////////////////////////////////');
const mysum = (fun) => {
console.log('Sum');
fun()
}

const myfunc = () => {
    console.log('myfunc');
}

//Calling Functions
let x = 5
mysum(myfunc)
// myfunc()

//forEach

//Array Method.
let days = [1,2,3,5,4,3,2,1,2]
//forEach is a method, which accepts another method.
days.forEach((item) => {

    console.log('foreach Loop Ran');
    console.log(item * 2);
})

