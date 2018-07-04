
var allButtons = document.getElementsByTagName("button");
var currentText =document.getElementById("screen").textContent;
var result;
var numbersEntered = [];
var currentOperator="";

var myOperators = [
  subtracting,
  adding,
  multiplying,
  dividing
];

var myString="";
var j= 0;
var finalResult;
for (var i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click",function () {
    //clear
    if(this.className=="buttonClear"){
      clear();
      document.getElementById("screen").textContent="0";
    //operator
    }else if(this.className=="operator"){
      currentOperator = this.textContent;
      myString+=this.textContent;
      document.getElementById("screen").textContent=myString;
      if(numbersEntered.length>=2){
        result = processing(currentOperator,numbersEntered[j],numbersEntered[j+1]);
        numbersEntered = [];
        numbersEntered[0]=result;
      }
    //equals
    }else if (this.className=="equals") {
      finalResult= processing(currentOperator,numbersEntered[j],numbersEntered[j+1]);
      document.getElementById("screen").textContent= finalResult;
      clear();
    //number
    }else{
       numbersEntered.push(this.textContent);
       myString+=this.textContent;
       document.getElementById("screen").textContent=myString;
    }
  })
}

function clear(){
  myString = "";
  result="";
  numbersEntered = [];
  currentOperator ="";
}

function subtracting(n1,n2) {
  return n1-n2;
}
function adding(n1,n2) {
  return n1+n2;
}
function multiplying(n1,n2) {
  return n1*n2;
}
function dividing(n1,n2) {
  return n1/n2;
}


function processing(currentOperator,number1,number2) {
  number1=parseInt(number1);
  number2=parseInt(number2);
  switch (currentOperator) {
    case "+":
    return myOperators[1](number1,number2);

    case "-":
    return myOperators[0](number1,number2);

    case "*":
    return myOperators[2](number1,number2);

    case "/":
    return myOperators[3](number1,number2);

    default:
    return "nothing";
  }
}
