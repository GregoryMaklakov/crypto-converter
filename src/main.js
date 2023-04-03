"use strict";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

document.addEventListener("DOMContentLoaded", () => {
  // Получаем элементы формы
  const $select = document.getElementById("select");
  const $input = document.querySelector(".input--receive");
  const $image = document.querySelector(".crypto-select__image");
  const $ticker = document.querySelector(".crypto-select__coin");
  const $selectItems = document.querySelectorAll(".item-select");

  $input.addEventListener("click", () => {
    // Проверяем наличие класса select-block__active на элементе $select
    if (!$select.classList.contains("select-block__active")) {
      // Если класса нет, показываем список криптовалют
      $select.classList.add("select-block__active");
    } else {
      // Если класс есть, скрываем список
      $select.classList.remove("select-block__active");
    }
  });

  document.addEventListener(
    "blur",
    (event) => {
      const target = event.target;
      // Если кликнули не на выпадающий список или его потомка, скрываем его
      if (!target.closest(".crypto-select")) {
        setTimeout(() => {
          $select.classList.remove("select-block__active");
        }, 100); // задержка в 100 миллисекунд
      }
    },
    true
  );

  // Обновляем содержимое элементов формы
  $selectItems.forEach((item) => {
    item.addEventListener("click", () => {
      const $itemIcon = item
        .querySelector(".item-select__icon")
        .getAttribute("src");
      const $itemTicker = item.querySelector(
        ".item-select__ticker"
      ).textContent;

      $input.placeholder = `0.00 ${$itemTicker}`;
      $image.setAttribute("src", $itemIcon);
      $ticker.textContent = $itemTicker;
    });
  });
});

// Tippy ========================================================================
tippy("#info", {
  content:
    "There is a dynamic blockchain fee, a.k.a. miner fee, on every transfer and we pay this fee on behalf of you to deliver your crypto to your own wallet address!",
});
