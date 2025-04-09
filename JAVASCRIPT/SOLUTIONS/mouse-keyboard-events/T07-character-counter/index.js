const input = document.getElementById("input");
const checkCountBtn = document.getElementById("check-count-btn");
const charCount = document.getElementById("char-count");

checkCountBtn.addEventListener("click", () => {
  charCount.innerText = "Total Character : " + input.value.length;
});
