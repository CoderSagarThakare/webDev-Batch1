const heading = document.getElementById("heading");
const btn = document.getElementById("btn");

console.log(heading,btn)

btn.addEventListener("click",()=>{
    heading.innerText = "This is Updated Heading"
})