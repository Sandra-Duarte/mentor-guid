// fetch + async/await + .then()
// APIs - API End-Point - Link/URLgewty
// https://restcountries.com/v3.1/all

//fetch Method accepts an API Endpoint
fetch("https://restcountries.com/v3.1/all")
.then((res) => {
    return res.json()
})
.then((data) => {
    console.log(data);
    //1: Fetch teh Element
    const content = document.getElementById("content")
    let output = ""
       
    for(let i = 0; i < data.length; i++){
        console.log(data[i].flags.png)
        output += `<div class="single-country">
        - Coutres: ${data[i].name.official}  <br>
        - capital: ${data[i].capital ? data[i].capital[0] : "Not Found"}  <br> 
        -  Populations:${data[i].population} <br> 
        -  Fifa:${data[i].fifa ? data[i].fifa :"not found"} 
        - <img src="${data[i].flags.png}" >
         </div><br><br>`
    }  

  content.innerHTML = output
})
//Promise: Pending | Fulfilled | Rejected
//Synchronous
//Asynchronous
// let x = 10


// if(x === 5){
//     console.log("Yes")
// }
// else {
// console.log('No');
// }

//Ternary Operator: ?
// x > 5 ?  console.log("Yes") : console.log('No')
// condition ? if true : if false