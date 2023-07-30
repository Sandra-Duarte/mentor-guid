//Functions Returning Value.
//1: Write a function named 'combineStrings', takes 3 arguments that multiplies 3 numbers,
//and returns back the result
//2: Write a function named 'checkifEven', accepts 1 argument(number).
//Checks if the number is even or odd. If even, return 'EVEN',
// if odd return 'ODD' 
//3: try toUpperCase()
//4: Write a program to search 'V' in 'Hello'. If found, log 'FOUND'.
//If not found, log 'ERROR'
function sum(x, y){ //local var
   let sum = x + x //4 + 15 = 19
   return sum
}


let result = sum(4, 15)

function concat(x, y){  
    //Anything can be returned from a function.
    //Return is not mandatory.
   let combined = x + " " + y + "" // 5 + 3 = 8 , "H" + "T" ="HT"
//    console.log(combined);

   return combined
}

// console.log(result);
let str1 = "Hello"
let str2 = "World"
let message = concat(str1, str2)
// console.log(message);


//Functions/Methods

//String Methods
let myMessage = "This is a MesSAGe"
//length
let len = myMessage.length   //returns a number
// console.log(len);

// slice()
//slice: can accept 1 or two arguments.
//1 arg means, go uptil the end.
//2 args mean, the starting and ending point.
let sliced = myMessage.slice(5, 7)   //String Index included, ending one not included.
let sliced2 = myMessage.slice(5)   //String Index included
// console.log(myMessage[2]);
// console.log(sliced2);

let lowerCased = myMessage.toLowerCase()
console.log(lowerCased);
//toLowerCase()
//toUpperCase()

// indexOf(): To find something in a string
// Can pass in, a character or a word.
//Returns the location/index
//If the data is not found, it gives back -1.
let location = myMessage.indexOf("MesSAGe")
// console.log(location);

//lastIndexOf(): Give it a try yourself


//includes()

let found = myMessage.includes("a")

// console.log(found);

//Number Methods
let num = 100
// console.log(num);
// toString()
let str = num.toString()    //Converting Number to a String.
// console.log(str[0]);

//Number()
let myNum = "200"
// console.log(myNum);
let z = Number(myNum)   //Converting String to A Number
// console.log(z);
//toFixed()
//1.23 => 1


// Arrays.
let arr = [1, 2, 45]
let arr1 = ["hello", "World", "Message", "test", "yz"]

// console.log(arr1[0]);   //Accessing an Index.

//Array Methods

//.length
let arrLength = arr1.length  //Len: 3
console.log(arrLength);

for(let i = 0; i < arrLength; i++){
    
    console.log(arr1[i]);
}

// .indexOf(), includes(), pop(), push(), 

