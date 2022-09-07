const timer = document.querySelector("#_timer");
const text = document.querySelector("#_textOfPredict");
const startBtn = document.querySelector("#_startBtn");
const stopBtn = document.querySelector("#_stopBtn");

// объект с предсказаниями
const predictionsObj = {
  1: "Пришло время закончить старое и начать новое",
  2: "Работа с новыми партнерами будет очень выгодным",
  3: "Размышляйте и не спешите с действиями",
  4: "Разрешите состраданию направлять ваши решения",
  5: "Результат Ваших действий может оказаться неожиданным",
  6: "Сегодня у вас будет красивый день",
  7: "Слушайте каждого. Идеи приходят отовсюду",
  8: "Терпение! Вы почти у цели",
  9: "Уделите особое внимание старой дружбе",
  10: "Хорошее время, чтобы закончить старые начинания",
  11: "Хорошие новости придут к вам по почте",
  12: "Хорошо сделанное лучше, чем хорошо сказанное",
  13: "Человек никогда не  стар, чтобы учиться. Новые знания принесут Вам успех",
  14: "Это время, чтобы двигаться. Ваше настроение улучшится",
  15: "Вам предстоит рассмотреть неожиданное предложение",
  16: "Делайте то, чего просит душа и тело",
  17: "Кто-то нуждается в вашей поддержке",
  18: "Будьте терпеливы, и если решение Ваше правильно, Вселенная поддержит его",
  19: "Не поддавайтесь эмоциям",
  20: "Сосредоточьтесь на настоящем",
  21: "Будьте настойчивы в битве с собственным эгоизмом",
};

let timerId;
let counterTimer = 1;

// функция на запуск таймера
startBtn.addEventListener("click", function () {
  startBtn.classList.add("predictions__button_off");

  stopBtn.classList.remove("predictions__button_off");
  stopBtn.classList.add("predictions__button");

  timerId = setInterval(function () {
    timer.textContent = counterTimer++;
    if (counterTimer > Object.keys(predictionsObj).length) {
      counterTimer = 1;
    }
  }, 100);
});

// функция на остановку таймера
stopBtn.addEventListener("click", function () {
  text.textContent = predictionsObj[Number(counterTimer) - 1];
  clearInterval(timerId);
});
