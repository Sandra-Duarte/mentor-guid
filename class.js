/* order if codes;
const totalMoney = 100;


const customer = () =>{



//function customer (){
    //calculeter total money
const totalMoney = 33; //se comentar essa linha java vai buscar outra declaraclao que ja foi feita que e 100

if (totalMoney>0){
    const totalMoney = 10;
;console.log(totalMoney);
}
};
customer();

//customer();
//console.log(totalMoney);*/



// diference betwen var const and let

/*function GreaBritain(params){
    let secund_count = 4;
    console.log();
    if (secund_count >3){
        let t

    }
}*/



/*function bank (){
    const totalMoney = 55;
    console.log();
    }

    customer();
   // bank();*/

   // Destructuring
   let Array = ["sandra", "Leida", "Noah"];

   //const firstIndex = array[0];
   //const secundtIndex = array[1];
   // const thirdtIndex = array[];

   //const [firstIndex, secundtIndex  ] = Array;

   const [firstIndex, ,thirdtIndex  ] = Array;
   //console.log(`These are the names of the array ${firstIndex}, ${secundtIndex}, and `)

   console.log(`These are the names of the array ${firstIndex}, ${thirdtIndex
}, and `)



function sumArray(a, b){
    return [a + b, a * b];
}
let array = sumArray(2, 4);
console.log(array);// we can call bay firstItens and secundItens

let arrayOfNames = ["sandra", "Millan", "Ana"];
let [firstName, ...rest] = arrayOfNames;
console.log(firstName, rest);


function names (...rest){
    console.log(rest);
}
names ("sandra", "ze", "Altom");



function names (){
    console.log(arguments);
}
names ("sandra", "ze", "Altom",);


















 
