"use strict";

const $selectButton = document.querySelector(".crypto-select");
const $selectBlock = document.querySelector(".select-block");

const label = document.querySelector(".crypto-select__wrp");
const options = Array.from(document.querySelectorAll(".item-select"));
const itemSelect = document.querySelector(".item-select__wrp");

//замена контента при виборе
options.forEach((option) => {
  option.addEventListener("click", (e) => {
    const clone = e.target.cloneNode(true);
    label.innerHTML = clone;

    // пока работает это
    // label.textContent = option.textContent;
    $selectBlock.classList.remove("select-block__active");
  });
});

$selectButton.addEventListener("click", (e) => {
  e.preventDefault();
  $selectBlock.classList.toggle("select-block__active");
});

