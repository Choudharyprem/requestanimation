var start;
var stopId;
var progress;
var toggle = false;

var element = document.getElementById("element");
element.setAttribute("class", "democlass");

function step(timestamp) {
  if (!start || progress > 400) start = timestamp;
  progress = (timestamp - start) / 10 + 50;
  element.style.top = progress + "px";
  stopId = window.requestAnimationFrame(step);
}
function toggleAnimation() {
  if (!toggle) {
    toggle = true;
    window.requestAnimationFrame(step);
  } else {
    toggle = false;
    cancelAnimationFrame(stopId);
  }
}
