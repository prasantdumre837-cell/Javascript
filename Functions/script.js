function whatever() {
    console.log("I am learnig functions");
    console.log("Learning js is fun");
     console.log("I am learnig functions");
    console.log("Learning js is fun");
}

whatever();
whatever();


function myfunction(msg){
    console.log(msg)
}

myfunction("I am on learnig phase");


//function that can calculate a sum of two numbers
function sum(m, n){
   
    s = m + n;
    return s;
}
let value = sum(5,6);
console.log(value);


//Arrow functions
function add(a, b){
    return a+b;
}

const arrowSum = (a, b) =>{
    console.log(a+b);
};

function multip(a, b){
    return a*b;
}
const arrowmultip = (a, b) =>{
 console.log(a*b); 
};

const printHello = () =>{
    console.log("Hello boy");
};

//practice questions
function countVowels(str){
    let count = 0;
    for(const char of str){
       if(char == "a"|| char == "e" || char == "i" || char == "o" || char == "u"){
        count ++ ;
       }
    
    }
    return(count);
}

//practice
const countVow = (str) => {
let count = 0;
    for(const char of str){
       if(char == "a"|| char == "e" || char == "i" || char == "o" || char == "u"){
        count ++ ;
       }
    
    }
    return(count);

};


//forEach loop
let arr = ["ktm", "Butwal", "Waling"];
arr.forEach((val, i, arr) => {
    console.log(val.toUpperCase(), i, arr);
});

//practice Qns to print square of given array numbers
let num = [100, 223, 389, 409 , 505];
num.forEach ((num) => {
    console.log(num * num);
});

//map array methods
let nums = [34, 45, 67];
let newArr = nums.map((val) =>{
    return val * val ;
});
console.log(newArr);

//filter array methods
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let newarr = array.filter((val) =>{
    return val % 2 === 0;
});
console.log(newarr);

//reduce array methods
let items = [1,2,3,4,5];
const output = items.reduce((prev, curr) => {
    return prev + curr;
});
console.log(output);

//finding largest number in an array using reduce array merthods
let larnum = [1,2,3,4,5];
const result = larnum.reduce((prev, curr) => {
    return prev > curr ? prev : curr
});
console.log(result);

//practice Qns to filter students who scored equal to and greater than 90.
let marks = [87, 89, 99, 90, 93, 80];
let newmarks = marks.filter((val) => {
    return val >= 90;
});
console.log(newmarks);

//practice Qns
let n = prompt("enter a number:");
let arrr = [];
for(let i = 1; i <= n; i++){
    arrr[i-1] = i;
}
console.log(arrr);

 sum = arrr.reduce((res, curr) => {
 
    return res + curr;
});
console.log("sum =", sum);
factorial= arrr.reduce((res, curr) => {
 
    return res * curr;
});
console.log("factorial =", factorial);