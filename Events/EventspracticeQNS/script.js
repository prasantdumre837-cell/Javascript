let mode = document.querySelector("#mode");
let currentmode = "light";


mode.addEventListener("click", () => {
   if(currentmode === "light"){
    currentmode = "dark";
    document.querySelector("body").style.backgroundColor = "black";
   }else{
    currentmode = "light";
    document.querySelector("body").style.backgroundColor = "white";
   }

   console.log(currentmode);
});