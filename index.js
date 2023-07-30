console.log('Connected');
//Node | Element
//getElementById
//camel Case


// Typecasting
let num = "100.5" //100
console.log(num);
// let num2 = "50"
// let newNumber = Number(num2)
// console.log(newNumber);
//Number()
//parseInt() vai transformar numero decimal em numero inteiro
//10050
let a = parseInt(num)   //100
console.log(a);
//Accessing Element
let element = document.getElementById("robert")
// element.innerHTML = "JS"

//innerHTML: Used to get text/HTML of a text Element
//value: Used to get value of an Input Field


// Styling In Javascript
element.style.color = "yellow"
element.style.fontSize = "72px"



// let x = element.innerHTML
// console.log(x);


//Events | Event Handlers/Listeners

//click
//keypress
//change
//Event Listeners/Handlers are the functions that run/get triggered
// based on the event
const formSubmitted = () => {
   //Getting the value of the input field on button click
   //Getting 1st Input
    

    let val = inputElement.value

    //Getting 2nd Input
    let inputElement2 = document.getElementById("myinputtwo")
    let val2 = inputElement2.value
    
    console.log(val, val2);
    let first = Number(val)
    let second = Number(val2)
    //Find Sum
    let sum = first + second
    //Putting the Input value in p tag
    element.innerHTML = `The Sum is: ${sum}`
}


//2nd Way of dealing with Event Handlers
const button = document.getElementById("mybtn")


button.addEventListener("click", () => {
    console.log('2nd Button Pressed');
})


    let numButton = document.getElementById("numButton")
    numButton.addEventListener("click", () => {
        //
    })
const countries = [{name:"UK", capital: "ABC", lang: "Eng"}, {name: "US", capital: "ABC", lang: "Eng"}]
    // Fetch the Element
    let myButton = document.getElementById("show-btn")
    myButton.addEventListener("click", () => {
        let output = ""
        //Fetching Element
       const content = document.getElementById("content")
        for(let i= 0; i < countries.length; i++){
           
         //<option>US</option><option>UK</option>   
         
        output += `<option>${countries[i].name} - ${countries[i].lang}</option>`  //output = output + countrries[i] 
            //countries[i]
        }
        console.log(output);
        content.innerHTML = output
    })

    //querySelector
    const e = document.querySelector(".show-btn")
    e.addEventListener("click", () => {
        console.log('Test');
    })

    // Fetching Form
    const form = document.querySelector("#myform")
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        console.log('Test');
    })

    // getElementsByClassName("")
    // querySelectorAll(".show-btn")

//Task1: Create an array of objects(cities), and show their name and population in options

//const countriesName = [{name:"CV", population:"400 000", capital:"Praia"}, {name:"PT", population:"40 000 000", capital:"Lisboa"}, {name:"Brazil", population:"40 000 000 000", capital:"Brazilia"}]

//for (let count = 0; count < countriesName.length; count++){

//}
//Task2: On form Submit, get the value of the input field.

// _______________________
// Task1: Modify this code to add a red border to p tag.
//Task2: Create three input fields, get their values, and then multiply them, and display them on browser.
// And change background to blue