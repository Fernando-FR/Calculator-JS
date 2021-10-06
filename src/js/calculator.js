export default class Calculator
{
    constructor()
    {
        this.display = document.querySelector('#display');
    }
    removeLastDisplayChar()
    {
        let value = this.display.innerText;
        this.display.innerHTML = value.slice(0,-1);
    }
    setDisplayValue(value)
    {
        let operators = ['*','+','/','-','%'];
        let lastChar = this.display.innerText.substr(this.display.innerText.length - 1);
        
        if (operators.includes(lastChar) && operators.includes(value)) {
            return;
        }

        if (operators.includes(value) && this.display.innerText.length === 0) {
            return;
        }

        if (value === '.' && this.display.innerText.includes('.')) {
            return;
        }
        this.display.innerHTML += value; 
    }
    clearDisplay()
    {
        this.display.innerHTML = '';
    }
    calculate()
    {
        try {
            let value = this.display.innerText;
            let result = eval(value);
            this.display.innerText = result;
            this.setHistory(value,result);
        } catch (e) {
            if (e instanceof SyntaxError) {
                this.display.innerText = 'Error!'

                setTimeout(()=>{
                    this.display.innerText = '';
                },1000)
            }
        }
    }
    setHistory(value,result)
    {
        let history = document.querySelector('#history');
        let section = document.createElement('section');
        let header = document.createElement('header');
        let footer = document.createElement('footer');
        
        section.setAttribute('class','history-item');
        header.setAttribute('class','calc');
        footer.setAttribute('class','result');

        header.innerText = value;
        footer.innerText = result;

        section.appendChild(header);
        section.appendChild(footer);
        
        history.appendChild(section);
    }
}