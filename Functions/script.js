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