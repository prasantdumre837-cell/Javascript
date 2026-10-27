let mode = document.querySelector("#mode");
let currentmode = "light";


mode.addEventListener("click", () => {
   if(currentmode === "light"){
    currentmode = "dark";
    document.querySelector("body").classList.add("dark");
    document.querySelector("body").classList.remove("light");
   }else{
    currentmode = "light";
    document.querySelector("body").classList.add("light");
    document.querySelector("body").classList.add("dark");
   }

   console.log(currentmode);
});