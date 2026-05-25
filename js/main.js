import { translation } from './translation.js';

const menuButton = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn_burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav_item');

const toggleLangIcon = document.querySelector('.toggle-language_icon');
const toggleLangText = document.querySelector('.toggle-language_lang');

translatePage('en');
let showMenu = false;

menuButton.addEventListener('click', () => {
  if(!showMenu){
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach(item => item.classList.add('open'));
    
    showMenu = true;
  }else{
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));

    showMenu = false; 
  }
});

toggleLangIcon.addEventListener('click', () => {
  if(toggleLangText.textContent === 'ENG'){
    toggleLangText.textContent = 'FR';
    translatePage('fr');
  } else {
    toggleLangText.textContent = 'ENG';
    translatePage('en');
  }
});

function translatePage(lang) {
  document.querySelectorAll('[data-lang]').forEach(element => {

    const key = element.getAttribute('data-lang');

    element.innerHTML = translation[lang][key] || element.innerHTML;
  });
}