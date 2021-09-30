// const toggleBtns = document.querySelectorAll('.q-btn');

// toggleBtns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         btn.nextSibling.classList.toggle('visible');
//     });
// });

const btn1 = document.querySelector('.q-btn-1');
const btn2 = document.querySelector('.q-btn-2');
const btn3 = document.querySelector('.q-btn-3');
const btn4 = document.querySelector('.q-btn-4');
const btn5 = document.querySelector('.q-btn-5');
const qText1 = document.querySelector('.q-text-1');
const qText2 = document.querySelector('.q-text-2');
const qText3 = document.querySelector('.q-text-3');
const qText4 = document.querySelector('.q-text-4');
const qText5 = document.querySelector('.q-text-5');

btn1.addEventListener('click', () => { qText1.classList.toggle('visible') });
btn2.addEventListener('click', () => { qText2.classList.toggle('visible') });
btn3.addEventListener('click', () => { qText3.classList.toggle('visible') });
btn4.addEventListener('click', () => { qText4.classList.toggle('visible') });
btn5.addEventListener('click', () => { qText5.classList.toggle('visible') });

// function toggleVisible() {
//     qText1.classList.toggle('visible');
// }