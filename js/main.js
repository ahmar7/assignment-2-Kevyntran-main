const toggles = document.querySelectorAll(".drop-down-menu");
const body = document.getElementById("bodys");

function toggle(id) {
  //close other dropdowns
  for (var i = 0; i < toggles.length; i++) {
    if (toggles[i].id === id) {
      continue;
    }
    toggles[i].style.display = "none";
  }
  var element = document.getElementById(id);
  if (element.style.display === "block") {
    element.style.display = "none";
    body.style.overflow = "auto";
  } else {
    element.style.display = "block";
    body.style.overflow = "hidden";
  }
}
