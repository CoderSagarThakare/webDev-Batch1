
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
