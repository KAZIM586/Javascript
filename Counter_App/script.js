const decrement = document.getElementById("decrement");
const increment = document.getElementById("increment");
const reset = document.getElementById("reset");
const display = document.getElementById("display");

decrement.addEventListener("click", () => {
  const value = Number(display.innerText);
  if (value > 0) {
    display.innerText = value - 1;
  } else {
    alert("Negative value not allowed");
  }
});

increment.addEventListener("click", () => {
  const value = Number(display.innerText);
  if (value >= 30) {
    alert("30+ values are not allowed");
  } else {
    display.innerText = value + 1;
  }
});

reset.addEventListener("click", () => {
  display.innerText = 0;
});
