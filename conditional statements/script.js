let age= 12;
if(age > 18){
    console.log("Mature");
}
else{
    console.log("Bachhu");
}

let mode = "light";
let color;

if(mode === "dark"){
    color= "black";
}

else{
    color= "white";
}

console.log(color);

let a="num is even";
let b= "num is odd";
let num = 10;
if(num % 2 === 0){
    console.log(a);
}
else{
    console.log(b);
}

let background = "dark";

if(background === "dark"){
    color = "black";
}
else if(background === "blue"){
color = "blue";
}
else if(background === "pink"){
    color = "pink";
}
else{
    color = "White";
}

console.log(color);

if(background === "dark"){
    console.log(background);
}

//ternary oprerators
let ages = 22;
 age >= 18 ? console.log("adult") : console.log("Minnow");
