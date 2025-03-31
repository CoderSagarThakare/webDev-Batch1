const showBtn = document.getElementById("show-btn");
const hideBtn = document.getElementById("hide-btn");
const heading = document.getElementById("heading");

showBtn.addEventListener("click",()=>{
    heading.hidden = false;

})

hideBtn.addEventListener("click",()=>{
    heading.hidden = true;

})