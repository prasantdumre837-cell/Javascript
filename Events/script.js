let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("Congrats! you are registered for an event");
};

let btn2 = document.querySelector("#btn2");
btn2.ondblclick = () => {
    console.log("You clicked it twice")
};

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("You are on a div");
};


//event object
btn1.onclick = (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);

};


btn2.ondblclick = (e) => {
     console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
};

div.onmouseover = (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
};

