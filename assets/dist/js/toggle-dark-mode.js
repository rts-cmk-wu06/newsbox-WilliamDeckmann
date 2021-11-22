"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Element variables
  var wrapper = document.querySelector("#Wrapper");
  var button = document.querySelector("#Dark-mode-toggle"); // Check for dark-mode

  if (localStorage.getItem("dark-mode") == "true") {
    wrapper.classList.add("dark-mode");
  } else {
    wrapper.classList.remove("dark-mode");
  }

  ; // Toggle dark-mode

  if (typeof button != "undefined" && button != null) {
    button.addEventListener("click", function () {
      if (localStorage.getItem("dark-mode") == "true") {
        localStorage.setItem("dark-mode", "false");
        wrapper.classList.remove("dark-mode");
      } else {
        localStorage.setItem("dark-mode", "true");
        wrapper.classList.add("dark-mode");
      }

      ;
      console.log("\"dark-mode\" is now: ".concat(localStorage.getItem("dark-mode", "")));
    });
  }

  ;
});