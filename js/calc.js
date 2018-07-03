
var allButtons = document.getElementsByTagName("button");
for (var i = 0; i < allButtons.length; i++) {
  allButtons[i].classList.add("numpad");
}

var myButtons = document.getElementsByClassName('numpad');
for (var i = 0; i < myButtons.length; i++){
  myButtons[i].addEventListener("click",function () {
    console.log(this.textContent+" was Clicked.");
  })
}
