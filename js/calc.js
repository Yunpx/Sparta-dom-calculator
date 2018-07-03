
var allButtons = document.getElementsByTagName("button");
var clearButtons= document.getElementsByClassName('buttonClear');
var currentText =document.getElementById("screen").textContent;

var myString="";
for (var i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click",function () {
    if(this.textContent==clearButtons[0].textContent){
      myString = "";
      document.getElementById("screen").textContent="0";
    }else{
      myString+=this.textContent;
      document.getElementById("screen").textContent=myString;
      console.log(this.textContent+" was Clicked.");
    }
  })
}
