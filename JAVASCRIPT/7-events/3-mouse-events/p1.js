

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      alert("You pressed ArrowUP key");
      break;
    case "ArrowLeft":
      alert("You pressed ArrowLeft key");
      break;
    case "ArrowDown":
      alert("You pressed ArrowDown key");
      break;
    case "ArrowRight":
      alert("You pressed ArrowRight key");
      break;
    default:
      alert("you pressed " + event.key + " key");
  }
});

// ArrowUp
//  ArrowLeft
//  ArrowDown
//  ArrowRight
