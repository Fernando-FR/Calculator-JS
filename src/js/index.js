import '../sass/index.scss';
import './toggleHistoryPanel';
import Calculator from './calculator';
const calc = new Calculator();


const clear = document.querySelector('#clear');
const back = document.querySelector('#back');
const numbers = document.querySelectorAll('button[input]');
const equal = document.querySelector('#equal');


for(let number of numbers) {
    number.addEventListener('click',()=>{
        calc.setDisplayValue(number.innerText);
    });
}

clear.addEventListener('click',()=>{
    calc.clearDisplay();
});
back.addEventListener('click',()=>{
    calc.removeLastDisplayChar();
})

equal.addEventListener('click',()=>{
    calc.calculate();
})