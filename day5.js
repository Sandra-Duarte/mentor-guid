//Passing function as an argument to another function

//function sum() {}
const sum = (str, num, fun) =>  {

    //Call the function
    fun()
    console.log(str);
    console.log(num);
   
    // console.log('Sum Function');
}
//function fun() {}
const fun = () => {
    console.log('Hello World');
}

//

// let x = "this is a string"
let y = 50
let z = 20
//fun passed as an argument.
sum(x, y, fun)     // 3 Arguments