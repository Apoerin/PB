'use strict';
document.addEventListener('DOMContentLoaded', function () {

    const btn = document.querySelector('.fa-bars');
    const menu = document.querySelector('.mobile-menu');

    btn.addEventListener("click", function () {

        toggleItemClass(btn, 'fa-bars', 'fa-times');
        toggleItemClass(menu, 'menu-btn-active' , 'mobile-menu')
    });

    function toggleItemClass(item, firstClass, secondClass) {
        item.classList.toggle(firstClass);
        item.classList.toggle(secondClass);
    }

});