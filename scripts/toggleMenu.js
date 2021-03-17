'use strict';
function toggleMenu(){
    const menyToggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation');
    menyToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}