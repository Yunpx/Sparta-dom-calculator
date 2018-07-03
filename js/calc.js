
var allButtons = document.getElementsByTagName("button");
for (var i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click",function () {
    console.log(this.textContent+" was Clicked.");
  })
}
