
var allButtons = document.getElementsByTagName("button");
var myString="";
for (var i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click",function () {
    myString+=this.textContent;
    document.getElementById("screen").textContent=myString;

    console.log(this.textContent+" was Clicked.");
  })
}
