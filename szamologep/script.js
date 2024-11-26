
dragElement(document.getElementById("calculator"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// ------------------------------------ //

var number = 0;
var reset = false;
var calculation = 0;


function NumButton(num){
    
    if(number == calculation && document.getElementById('main-disp').innerHTML != 0) {
        document.getElementById('side-disp').innerHTML += (' ' + number);
        document.getElementById('main-disp').innerHTML = ""
        calc = false;
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
        case '.':
          document.getElementById('main-disp').innerHTML += ".";
          break;
    }
}

function SetSideDisplay(operation){
  if(reset){
    document.getElementById('side-disp').innerHTML = "";
    reset = false;
  }
    document.getElementById('side-disp').innerHTML += (' ' + number + ' ' + operation);
    SetToZero();

}

function Calculate(){
    if(reset){
      document.getElementById('side-disp').innerHTML = "";
      reset = false;
    }
    document.getElementById('side-disp').innerHTML += (' ' + number);
    number = eval(document.getElementById('side-disp').innerHTML);
    document.getElementById('main-disp').innerHTML = number;
    calculation = number;
    document.getElementById('side-disp').innerHTML += (' ' + '=');
    reset = true;
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

function CloseCalculator(){
  ResetCalculator();
  document.getElementById("calculator").innerHTML.style.display = "none";
}

function _Calculator(){
  document.getElementById("calculator").innerHTML.style.display = "none";
}

function ShowCalculator(){
  console.log("aaa");
  document.getElementById("calculator").innerHTML.style.visibility = "visible";
}

document.addEventListener(
  "keydown",
  (event) => {
    var keyName = event.key;
    if(keyName == ',') { FunctionalButton('.'); }
    else if(keyName == 'Enter') { Calculate(); }
    else if(!isNaN(keyName)) { NumButton(keyName); }
    else { SetSideDisplay(keyName); }
  }
)
