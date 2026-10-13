let marks = [67,78,89,90,79];
console.log(marks[4]);
console.log(marks.length);

let fruits = ["apple", "banana", "mango", "grapes"];
fruits[2] = "kiwi";
console.log(fruits[2]);
console.log(fruits.length);

//looping over an array
for (let i=0; i<marks.length; i++){
    console.log(marks[i]);
}

//for of loop
for (let fruit of fruits){
    console.log(fruit);
}

//another example
let cities = ["Kathmandu","Waling", "Butwal", "Pokhara"];
for(let city of cities){
    console.log(city.toUpperCase());
}

//some practices
let marks_students = [85, 97, 44, 37, 76,60];
sum = 85+97+44+37+76+60;
console.log(sum/marks_students.length);

// some practices
let price = [250,645,300,900,50]
for(let val of price){
    offer = val/10;
    val -=offer;
    console.log(val);
}

//Array methods
let cars = ["Bmw", "Toyota", "Ferrari", "Audi"];
cars.push("Bugati", "RollsRoyal", "Lamborgini");
console.log(cars);
cars.pop();
console.log(cars);

// converting array into string using array methods
let foodItems = ["potato", "litchi", "apple", "tomato"];
console.log(foodItems);
console.log(foodItems.toString());

//concat array method
let heroes = ["Thor", "Spiderman", "ironman"];
let weapons = ["hammer", "traps", "iron"];
let locations = ["New york", "California", "Ohio"];
let experts = heroes.concat(weapons, locations);
console.log(experts);

//unshift array methods
let heros = ["Thor", "Spiderman", "ironman"];
heros.unshift("villageboy");
console.log(heros);

//shift array methods
let weapon = ["hammer", "traps", "iron"];
let val = weapon.shift();
console.log("deleted weapon is",val);