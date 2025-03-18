const btn = document.getElementsByTagName("button");

btn[0].addEventListener("mouseover",()=>{
  console.log("Hover : Mouseover event triggered")
  btn[0].style.background = "pink"
})

btn[0].addEventListener("mousedown",()=>{
  console.log("mousedown event triggered")
})

btn[0].addEventListener("click",()=>{
  console.log("click event triggered")
})

btn[0].addEventListener("mouseout",()=>{
  console.log("mouseout event triggered")
  btn[0].style.background = "none"
})
