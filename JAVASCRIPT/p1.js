// const btn = document.getElementsByTagName("button");
// // console.log(btn)

// btn[0].addEventListener("mouseover",()=>{
//   console.log("Hover : Mouseover event triggered")
//   btn[0].style.background = "pink"
// })

// btn[0].addEventListener("mousedown",()=>{
//   console.log("mousedown event triggered")
// })

// btn[0].addEventListener("click",()=>{
//   console.log("click event triggered")
// })

// btn[0].addEventListener("mouseout",()=>{
//   console.log("mouseout event triggered")
//   btn[0].style.background = "none"
// })

const heading = document.getElementById("heading");
const buttons = document.getElementsByTagName("button");

buttons[0].addEventListener("mouseover", () => {
  heading.innerText = "Welcome, Sagar";
});

buttons[1].addEventListener("mouseover", () => {
  heading.innerText = "Welcome, Kranti";
});

buttons[2].addEventListener("mouseover", () => {
  heading.innerText = "Welcome, Kavita";
});

// var arr = Array.from(buttons);

// arr.map((ele)=>{
//   ele.addEventListener("mouseover",()=>{
//     console.log("j")
//   })
// })