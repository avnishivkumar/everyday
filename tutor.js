//SELECT THE ELEMENTS
var loader = document.getElementById("loader");
var links = document.getElementsByTagName("a");

//PAGE LOAD animation
window.addEventListener("DOMContentLoaded", function () {
  loader.classList.add("fully-loaded");
});

//PAGE UNLOAD ANIMATION
for (var i = 0; i < links.length; i++) {

  links[i].addEventListener("click", function (event) {
    event.preventDefault();
    var link = event.currentTarget;

    var listener = function () {
      window.location = link.href;
      loader.removeEventListener("transitionend", listener);
    }

    loader.addEventListener("transitionend", listener);

    loader.classList.remove("fully-loaded");
  });
}
