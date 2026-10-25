// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);


let para  = document.querySelector("p");
console.log(para.getAttribute("class"));
console.log(para.setAttribute("class", "section"));

//accesing style of div
let div = document.querySelector("div");

div.style.backgroundColor = "red";
div.style.fontSize = "15px";
div.innerText = "JavaScript";
div.style.visibility = "hidden";
