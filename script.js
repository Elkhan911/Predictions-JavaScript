const startBtn = document.querySelector("#_startBtn");
const stopBtn = document.querySelector("#_stopBtn");
const text = document.querySelector("#_textOfPredict");
const timer = document.querySelector("#_timer");

const predictionsObj = {
  1: "предсказание 1",
  2: "предсказание 2",
  3: "предсказание 3",
  4: "предсказание 4",
  5: "предсказание 5",
  6: "предсказание 6",
  7: "предсказание 7",
  8: "предсказание 8",
  9: "предсказание 9",
  10: "предсказание 10",
};

startBtn.addEventListener("click", function () {
  startBtn.classList.add("buttonOff");

  stopBtn.classList.remove("buttonOff");
  stopBtn.classList.add("buttonOn");
});

stopBtn.addEventListener("click", function () {
  text.textContent = "предсказание";
});
let i = 0;

setInterval(function () {
  console.log(i++);
}, 1000);

setInterval(1000);
