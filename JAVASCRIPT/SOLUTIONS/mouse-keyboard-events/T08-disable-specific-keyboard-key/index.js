const input = document.getElementById("input");

input.addEventListener("keyup", () => {

  if (input.value.includes(" ")) {
    alert("Space is not allowed in username.");
    input.value = input.value.substring(0, input.value.length - 1);
  }
});