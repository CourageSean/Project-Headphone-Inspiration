function menuSlide() {
  document.getElementById("nav-bar").style.left = "30px";
  document.getElementById("close").style.display = "inline-block";
  document.getElementById("nav-bar").style.transition = "1s";
  document.getElementById("menu-section").style.display = "none";
}

function menuBackSlide() {
  document.getElementById("nav-bar").style.left = "-200px";
  document.getElementById("close").style.display = "none";
  document.getElementById("menu-section").style.display = "inline-block";
}
