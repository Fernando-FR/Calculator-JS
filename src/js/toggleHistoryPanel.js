const blackscreen = document.getElementById('blackscreen');
const history_open = document.getElementById('button-history');
const history_close = document.getElementById('history-close');

const toggle_history = ()=>{
    blackscreen.classList.toggle('active');
    document.body.classList.toggle('noscroll');
}

history_open.addEventListener('click',toggle_history);
history_close.addEventListener('click',toggle_history);