var buttonPlus = document.getElementById('buttonPlus');
var buttonMinus = document.getElementById('buttonMinus');
var buttonMulti = document.getElementById('buttonMulti');
var buttonDel = document.getElementById('buttonDel');

function onButtonPlusClick() {
    var input1 = document.getElementById('number1');
    var input2 = document.getElementById('number2');

    var number1 = Number (input1.value);
    var number2 = Number (input2.value);

    var summ = number1 + number2;
    window.alert(summ);
}

function onButtonMinusClick() {
    var input1 = document.getElementById('number1');
    var input2 = document.getElementById('number2');

    var number1 = Number (input1.value);
    var number2 = Number (input2.value);

    var summ = number1 - number2;
    window.alert(summ);
}

function onButtonMultiClick() {
    var input1 = document.getElementById('number1');
    var input2 = document.getElementById('number2');

    var number1 = Number (input1.value);
    var number2 = Number (input2.value);

    var summ = number1 * number2;
    window.alert(summ);
}

function onButtonDelClick() {
    var input1 = document.getElementById('number1');
    var input2 = document.getElementById('number2');

    var number1 = Number (input1.value);
    var number2 = Number (input2.value);

    var summ = number1 / number2;
    window.alert(summ);
}

buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
buttonMulti.addEventListener('click', onButtonMultiClick);
buttonDel.addEventListener('click', onButtonDelClick);