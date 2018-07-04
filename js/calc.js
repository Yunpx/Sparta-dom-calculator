
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

      //equals
    }else if(this.className=="operator"){// or any operators, class == equals or operators, if this class is operator
      currentOperator = this.textContent;
      myString+=this.textContent;
      document.getElementById("screen").textContent=myString;

      console.log(currentOperator);
      if(numbersEntered.length>2){
        result = processing(currentOperator,numbersEntered[j],numbersEntered[j+1]);
        console.log("operator"+result);
        numbersEntered = [];
        numbersEntered[0]=result;
      }
    }else if (this.className=="equals") {
      finalResult= processing(currentOperator,numbersEntered[j],numbersEntered[j+1]);
      console.log(finalResult);
      document.getElementById("screen").textContent= finalResult;
      clear();
    }else{
       numbersEntered.push(this.textContent);
       myString+=this.textContent;
       document.getElementById("screen").textContent=myString;
       console.log(this.textContent+"is pushed");
      //othter
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
    return "Error: Operation not exist";
  }
}
