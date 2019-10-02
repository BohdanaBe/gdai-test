/*
from tutorial by Kirupa Chinnathambi
*/

var theThing = document.querySelector("#thing");
var container = document.querySelector("#contentContainer");

container.addEventListener("click", getClickPosition, false);

function getClickPosition(e) {
  var xPosition = e.clientX;
  var yPosition = e.clientY;

  var translate3dValue = "translate3d(" + xPosition + "px, " + yPosition + "px, 0)";

  theThing.style.transform = translate3dValue;

}
