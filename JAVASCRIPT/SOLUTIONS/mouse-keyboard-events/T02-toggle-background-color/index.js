const whiteBtn = document.getElementById("white-btn");
const blackBtn = document.getElementById("black-btn");

whiteBtn.addEventListener("click",()=>{
    document.body.style.backgroundColor = "white" 
    document.body.style.color = "black" 
})

blackBtn.addEventListener("click",()=>{
    document.body.style.backgroundColor = "black" 
    document.body.style.color = "white" 
})