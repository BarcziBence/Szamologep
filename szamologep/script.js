
var number = 0;
var oper = 0;

var numbers = [];
var operations = [];



function NumButton(num){
    if(document.getElementById('main-disp').innerHTML == 0){
        document.getElementById('main-disp').innerHTML = "";
    }
    number = document.getElementById('main-disp').innerHTML += num;
    
}

function FunctionalButton(func){
    switch(func){
        case 'SetOpposite':
            number = number * -1;
            document.getElementById('main-disp').innerHTML = number;
            break;
        case 'Square':
            number = number * number;
            document.getElementById('main-disp').innerHTML = number;
            break;
    }
}

function SetSideDisplay(operation){
    document.getElementById('side-disp').innerHTML += (' ' + number + ' ' + operation);
    numbers[numbers.length] = number
    operations[operations.length] = operation
    number = 0;
    document.getElementById('main-disp').innerHTML = number;

}

function Calculate(){
    document.getElementById('side-disp').innerHTML += (' ' + '=');
    
}

function ResetCalculator(){
    number = 0;
    document.getElementById('main-disp').innerHTML = number;
    document.getElementById('side-disp').innerHTML = "";
}

function SetToZero(){
    number = 0;
    document.getElementById('main-disp').innerHTML = number;
}