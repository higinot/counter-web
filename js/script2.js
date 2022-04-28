let count = 0;

const btns = document.querySelectorAll(".btn");
const value = document.querySelector(".number");

btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const style = event.target.classList;
    if (style.contains("decrease")) {
      count -= 1;
    }

    if (style.contains("increase")) {
      count += 1;
    }

    if (style.contains("reset")) {
      count = 0;
    }
    value.textContent = count;
  });
});
