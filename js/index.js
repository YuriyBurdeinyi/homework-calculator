const display = document.querySelector('#viewdisplay');
const digits = document.querySelectorAll('.digits');
const opers = document.querySelectorAll('.opers');
const result = document.querySelector('#result');
const reset = document.querySelector('#reset');
  

digits.forEach(btn => btn.addEventListener('click', digitPressed));
opers.forEach(btn => btn.addEventListener('click', operPressed));

function digitPressed(e) {
    e.preventDefault();
    display.value += e.target.innerText;
}

function operPressed(e){
    e.preventDefault();
    display.value += e.target.innerText;
}


result.addEventListener('click', resultPressed);
function resultPressed(e) {
    e.preventDefault();
    display.value = eval(display.value);
}


reset.forEach(btn => btn.addEventListener('click', resetPressed));
function resetPressed(){
    return document.querySelector('#viewdisplay').reset();
}
