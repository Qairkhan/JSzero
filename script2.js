// var buttonPlus = document.getElementById('buttonPlus');
// var buttonMinus = document.getElementById('buttonMinus');
// var buttonMulti = document.getElementById('buttonMulti');
// var buttonDel = document.getElementById('buttonDel');

// var operationButton = [buttonPlus, buttonMinus, buttonMulti, buttonDel] ;

var operationButton = document.getElementsByClassName('operation-button');

var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');



function makeOperation(OperationCode) {
    var number1 = Number (input1.value);
    var number2 = Number (input2.value);
    if (OperationCode === '+') {
        var summ = number1 + number2;
    } else  if (OperationCode === '-') {
        var summ = number1 - number2;
    } else if (OperationCode === '*') {
        var summ = number1 * number2;

    } else if (OperationCode === '/') {
        var summ = number1 / number2;

    } else {
        window.alert('HZ');
    }
    window.alert(summ);
}


function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation)
}




// addComandEventListener(0);
// addComandEventListener(1);
// addComandEventListener(2);
// addComandEventListener(3);



for (var i = 0; i < operationButton.length; i++) {
    var button = operationButton[i];
    button.addEventListener('click', onOperationButtonClick);
}


