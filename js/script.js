let count = 0;

const btnDecrease = document.querySelector(".decrease");
const btnIncrease = document.querySelector(".increase");
const btnReset = document.querySelector(".reset");
const value = document.querySelector(".number");

console.log(btnDecrease);

btnDecrease.addEventListener("click", (event) => {
  count -= 1;
  value.textContent = count;
});

btnIncrease.addEventListener("click", (event) => {
  count += 1;
  value.textContent = count;
});

btnReset.addEventListener("click", (event) => {
  count = 0;
  value.textContent = count;
});


