function addErrorClass(elementId) {
    var element = document.getElementById(elementId);
    element.className = "error-input";
}

function addErrorClassToAllInputs() {
    addErrorClass ("first-name") ;   
    addErrorClass ("last-name")  ;  
    addErrorClass ("address")    ;
}

//window.setTimeout(addErrorClassToAllInputs, 5000);

var sendButton = document.getElementById('send-button');
sendButton.addEventListener('click' , onSendButtonClick);

function  onSendButtonClick() {
    addErrorClass('last-name');
}

function  onFirstNameKeyup() {
    addErrorClass('first-name');
} 

var firstNameEl = document.getElementById('first-name');
firstNameEl.addEventListener('keyup', onFirstNameKeyup);


// var tratratra;
// var blablabla;
// blablabla='input';
// tratratra = document.getElementById(blablabla);
// window.alert(tratratra.value);
// var classs;
// classs=('4ina')



// function alertvalue() {
//     console.log ('1');
//     console.log ('2');
//     console.log ('3');
//     console.log ('4');
    
// }

// alertvalue();