let familyMembers = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];

// Create variables to store the values here
let [dad, mum, son, daughter, baby] = familyMembers;


console.log(
  `In the Simpsons family, ${dad} and ${mum} are the parents. ${son} is the son, ${daughter} is the daughter, and ${baby} is the baby.`);



 // When you do array destructuring, the array can be of any data type. Try destructuring with the next array, which contains objects.

let citiesByPopulation = [
  { name: "London", population: 8000000 },
  { name: "birmingham", population: 1000000 },
  { name: "Glasgow", population: 600000 },
  { name: "Manchester", population: 500000 },
];

// Assign variables using array destructuring on this line
let [london, birmingham, glasgow, manchester] = citiesByPopulation;

console.log(`${london.name} population is ${london.population}`);
console.log(`${birmingham.name} population is ${birmingham.population}`);
console.log(`${glasgow.name} population is ${glasgow.population}`);
console.log(`${manchester.name} population is ${manchester.population}`);