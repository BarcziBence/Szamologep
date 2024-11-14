

dragElement(document.getElementById("calculator"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// ------------------------------------ //

var number = 0;
var calc = false;


function NumButton(num){
    if(calc) {
        document.getElementById('side-disp').innerHTML += (' ' + number);
        calc = false;
        document.getElementById('main-disp').innerHTML = ""
    }
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
    SetToZero();

}

function Calculate(){
    document.getElementById('side-disp').innerHTML += (' ' + number);
    number = eval(document.getElementById('side-disp').innerHTML);
    document.getElementById('main-disp').innerHTML = number;
    document.getElementById('side-disp').innerHTML += (' ' + '=');
    calc = true;
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

