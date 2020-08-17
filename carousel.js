'use strict';

let carousel = document.getElementById('carousel');
let list = carousel.querySelector('ul');
let listItems = carousel.querySelectorAll('li');

let position = 0;
let width = 350;
let count = 2;

carousel.querySelector('.previous').onclick = function() {
    position = Math.min(position + width * count, 0);
    list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
    position = Math.max(position - width * count, -width * (listItems.length - count));
    list.style.marginLeft = position + 'px';
};