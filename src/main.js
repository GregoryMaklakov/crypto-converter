"use strict";

// Получаем элементы формы
const $select = document.getElementById("select");
const $input = document.querySelector(".input--receive");
const $image = document.querySelector(".crypto-select__image");
const $ticker = document.querySelector(".crypto-select__coin");
const $selectItems = document.querySelectorAll(".item-select");

// Добавляем обработчик события на клик к выпадающему списку
document.querySelector(".crypto-select").addEventListener("click", () => {
  // Показываем список криптовалют
  $select.classList.toggle("select-block__active");
});
// Обновляем содержимое элементов формы
$selectItems.forEach((item) => {
  item.addEventListener("click", () => {
    const $itemIcon = item
      .querySelector(".item-select__icon")
      .getAttribute("src");
    const $itemTicker = item.querySelector(".item-select__ticker").textContent;

    $input.placeholder = `0.00 ${$itemTicker}`;
    $image.setAttribute("src", $itemIcon);
    $ticker.textContent = $itemTicker;
    $select.classList.remove("select-block__active");
  });
});
