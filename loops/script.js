// for loop
for(let i=1;i<=5;i++){
    console.log("i=",i);
}
console.log("i Ended");


//while loop
let j=6;
while(j<=10){
    console.log("j=",j);
    j++;
}
console.log("j ended");



//do-while loop
let k=11;
do{
    console.log("k=",k);
    k++;
}while(k<=15);
console.log("k ended");



//for-of loop
let str = "Prashant";
let size = 0;
for(let val of str){
    console.log("val=",val);
    size++;
}
console.log("string size is =",size);



//for-in loop
let student ={
    name : "Prashant",
    age : 20,
    gpa : 3.43,
    isPass : true,
};

for(let key in student){
    console.log("key=", key, "value=", student[key]);
}
