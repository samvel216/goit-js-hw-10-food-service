import dataMenu from './data-menu.json';
import sampleMenu from './templatens/sample-menu.hbs';
import './styles.css';
const bodyEl = document.querySelector('body');
const menu = document.querySelector('.js-menu');
const label = document.querySelector('.theme-switch__toggle');
console.log(label);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
let localKey = localStorage.getItem('key');
const localStor = (localKey) => {
   
   bodyEl.classList.add(localKey);
}
localStor(localKey);
const removeListener = (event) => {
   event.preventDefault();
   localStorage.setItem('keyLight', Theme.LIGHT);
   localStorage.setItem('keyDark', Theme.DARK);
   const keyLight = localStorage.getItem('keyLight');
   const keyDark = localStorage.getItem('keyDark');
   if (bodyEl.classList.contains(Theme.DARK) === true) {
      bodyEl.classList.remove(keyDark);
      bodyEl.classList.add(keyLight);
      localStorage.setItem('key', keyLight);
      console.log(keyLight);
   } else  {
      bodyEl.classList.remove(keyLight);
      bodyEl.classList.add(keyDark);
      localStorage.setItem('key', keyDark);
      console.log(keyDark);   
   }
}
label.addEventListener('input', removeListener);
const funk = (array) => {
   array.forEach(element => {
      menu.insertAdjacentHTML("beforeend", sampleMenu(element));
   }); 
}
funk(dataMenu);
console.log(menu);



