const div = document.getElementById("div");

div.addEventListener("keypress", (event) => {
  // div.classList.toggle("my-class")
  console.log(event.target.value);

  // switch (event.key) {
  //   case "ArrowUp":
  //     alert("You pressed ArrowUP key");
  //     break;
  //   case "ArrowLeft":
  //     alert("You pressed ArrowLeft key");
  //     break;
  //   case "ArrowDown":
  //     alert("You pressed ArrowDown key");
  //     break;
  //   case "ArrowRight":
  //     alert("You pressed ArrowRight key");
  //     break;
  //   default:
  //     alert("you pressed " + event.key + " key");
  // }
});

//  ArrowUp
//  ArrowLeft
//  ArrowDown
//  ArrowRight
