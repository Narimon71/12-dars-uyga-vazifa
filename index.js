
//1-vazifa
/*
const sotrDrinkByPrike = (drinks) => {
    return drinks.sort((a, b) => a.price - b.price )
}

const drinks = [
    { name: "lemonade", price: 50 },
  { name: "lime", price: 10 }
]
const sorteDrinks = sotrDrinkByPrike(drinks)
console.log(sorteDrinks)
*/

//2-vazifa
/*
const objecToArray = (obj) => {
    return Object.entries(obj)
}

console.log(objecToArray ({
    D:1,
    B:2,
    C:3,
}))

console.log(objecToArray({
    likes: 2,
  dislikes: 3,
  followers: 10
}))
*/

//3-vazifa
/*
let names = [];

let users = [
  { name: "John", email: "john@example.com" },
  { name: "Jason", email: "jason@example.com" },
  { name: "Jeremy", email: "jeremy@example.com" },
  { name: "Jacob", email: "jacob@example.com" }
];

for (let { name } of users) {
  names.push(name);
}

console.log(names); 
*/

//4-vazifa

const afterNYears = (people, n) => {
    const yearsToAdd = Math.abs(n);
    const updatedAges = {};
  
    for (let person in people) {
      updatedAges[person] = people[person] + yearsToAdd;
    }
  
    return updatedAges;
  };
  
  console.log(afterNYears({
    "Joel": 32,
    "Fred": 44,
    "Reginald": 65,
    "Susan": 33,
    "Julian": 13
  }, 1));
  
  console.log(afterNYears({
    "Baby": 2,
    "Child": 8,
    "Teenager": 15,
    "Adult": 25,
    "Elderly": 71
  }, 19));

  console.log(afterNYears({
    "Genie": 1000,
    "Joe": 40
  }, 5));

  