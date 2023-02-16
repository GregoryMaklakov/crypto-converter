"use strict";


const $selectButton = document.querySelector('.crypto-select');
$selectButton.addEventListener('click', (e) => {
    e.preventDefault();
    const $selectBlock = document.querySelector('.select-block');
    $selectBlock.classList.toggle('select-block__active');
});

//
// const $itemSelect = document.querySelector('.item-select');

// $itemSelect.addEventListener('click', () => {
//    const $inpSelect = document.querySelectorAll('.item-select__checkbox');
//    console.log($inpSelect);
// });