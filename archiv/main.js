/*
function moveLeft() {
  document.getElementById("ctverecek").style.margin = "20px 50px";
}
*/

function moveLeft() {
    var mov = window.getComputedStyle("ctverecek").margin;
    mov.margin = "0 50px 10px";
    }