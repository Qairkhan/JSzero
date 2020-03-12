var buttonPlus = document.getElementById('buttonPlus');
var buttonMinus = document.getElementById('buttonMinus');
var buttonMulti = document.getElementById('buttonMulti');
var buttonDel = document.getElementById('buttonDel');
var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');

function getNumber1() {
    return Number (input1.value);
    
}
function getNumber2() {
    return Number (input2.value);
    
}

function makeOperation(OperationCode) {
    if (OperationCode === '+') {
        var summ = getNumber1() + getNumber2();
    } else  if (OperationCode === '-') {
        var summ = getNumber1() - getNumber2();
    } else if (OperationCode === '*') {
        var summ = getNumber1() * getNumber2();

    } else if (OperationCode === '/') {
        var summ = getNumber1() / getNumber2();

    } else {
        window.alert('HZ');
    }
    window.alert(summ);
}
function onButtonPlusClick() {
   
    makeOperation('+');
}

function onButtonMinusClick() {
   
    makeOperation('-');
}

function onButtonMultiClick() {
  
    makeOperation('*');
}

function onButtonDelClick() {
  
    makeOperation('/');
}

buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
buttonMulti.addEventListener('click', onButtonMultiClick);
buttonDel.addEventListener('click', onButtonDelClick);
