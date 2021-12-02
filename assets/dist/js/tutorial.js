"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Element variables
  var wrapper = document.querySelector("#Wrapper");
  var tutorial = document.querySelector("#Tutorial");
  var item_1 = document.querySelector("#Tutorial__item_1");
  var item_2 = document.querySelector("#Tutorial__item_2");
  var item_3 = document.querySelector("#Tutorial__item_3");
  var item_4 = document.querySelector("#Tutorial__item_4");
  var item_5 = document.querySelector("#Tutorial__item_5"); // Other element variables

  var archive = document.querySelector("#Header__inbox");
  var settings = document.querySelector("#Header__gear"); // Check if tutorial has run before

  if (localStorage.getItem("already-loaded") == "true") {
    if (localStorage.getItem("tutorial-loaded") == "false") {
      // Lock the screen
      wrapper.classList.add("Wrapper_tutorial"); // Activate tutorial

      item_1.querySelector(".Tutorial__button").addEventListener("click", function () {
        item_1.classList.remove("Tutorial__item_active");
        item_2.classList.add("Tutorial__item_active");
      });
      item_2.querySelector(".Tutorial__button").addEventListener("click", function () {
        item_2.classList.remove("Tutorial__item_active");
        item_3.classList.add("Tutorial__item_active");
        archive.classList.add("Header__inbox_active");
      });
      item_3.querySelector(".Tutorial__button").addEventListener("click", function () {
        item_3.classList.remove("Tutorial__item_active");
        archive.classList.remove("Header__inbox_active");
        item_4.classList.add("Tutorial__item_active");
        settings.classList.add("Header__gear_active");
      });
      item_4.querySelector(".Tutorial__button").addEventListener("click", function () {
        item_4.classList.remove("Tutorial__item_active");
        settings.classList.remove("Header__gear_active");
        item_5.classList.add("Tutorial__item_active");
      }); // End tutorial

      item_5.querySelector(".Tutorial__button").addEventListener("click", function () {
        item_5.classList.remove("Tutorial__item_active");
        wrapper.classList.remove("Wrapper_tutorial");
        tutorial.classList.add("Tutorial_state_completed");
        localStorage.setItem("tutorial-loaded", "true");
      });
    } else {
      // If tutorial has run before
      wrapper.classList.remove("Wrapper_tutorial");
      tutorial.classList.add("Tutorial_state_completed");
      localStorage.setItem("tutorial-loaded", "true");
    }

    ;
  }

  ;
});