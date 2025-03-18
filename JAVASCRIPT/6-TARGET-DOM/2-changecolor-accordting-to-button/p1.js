
const yellowBtn = document.getElementById("yellow-btn");
const blueBtn = document.getElementById("blue-btn");
const myClass = document.getElementsByClassName("my-class");

yellowBtn.addEventListener("click", () => {
  myClass[0].style.background = "yellow";
  myClass[0].style.color = "purple";

  yellowBtn.style.background = "yellow";

  blueBtn.style.background= "none"
  blueBtn.style.color = "black"
});

blueBtn.addEventListener("click", () => {
  myClass[0].style.background = "blue";
  myClass[0].style.color = "white";

  blueBtn.style.background = "blue";
  blueBtn.style.color = "white";

  yellowBtn.style.background = "none"
});


// ----------------------------------------------------------

