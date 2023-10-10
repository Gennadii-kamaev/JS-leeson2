// Задача 1
let number = 97;

let message = number % 2 === 0 ? "Парне" : "Непарне";

console.log(message);

//  Задача 2
const phone = {
  make: "Apple",
  model: "X",
  year: 2019,
  owner: {
    country: "USA",
  },
  state: "California",
};

const tv = {
  make: "Samsung",
  model: "5520",
  year: 2018,
  owner: {
    country: "Corea",
  },
  state: "Seul",
};

const tablet = {
  make: "Apple",
  model: "Ipad",
  year: 2022,
  owner: {
    country: "USA",
  },
  state: "California",
};

const myHome = [phone, tv, tablet];
myHome.push("Lampe");
// myHome.unshift("table");
// myHome.shift();
// myHome.pop();
console.log(myHome);

// Задача 3

const fruits = ["Aplle", "Banane", "Orange"];
fruits.push("Kiwi");
fruits[2] = "pear";
delete fruits[1];
console.log(fruits);
