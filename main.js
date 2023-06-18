function opentab(tabname) {
  var i;
  var x = document.getElementsByClassName("tab-contents");
  var links = document.getElementsByClassName("tab-links");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < links.length; i++) {
    links[i].classList.remove("active-link");
  }
  document.getElementById(tabname).style.display = "block";
  event.currentTarget.classList.add("active-link");
}
