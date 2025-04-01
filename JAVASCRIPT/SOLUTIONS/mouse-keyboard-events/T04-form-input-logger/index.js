const input = document.getElementById("input");
const output = document.getElementById("output");

input.addEventListener("keyup",(e)=>{
   output.innerText = e.target.value;
})