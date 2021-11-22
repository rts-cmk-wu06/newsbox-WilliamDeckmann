"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Element variables
  var world = document.querySelector("#Settings-panel__world");
  var health = document.querySelector("#Settings-panel__health");
  var sports = document.querySelector("#Settings-panel__sports");
  var business = document.querySelector("#Settings-panel__business");
  var travel = document.querySelector("#Settings-panel__travel"); // Category switch function

  function CategorySwitchFunction(a) {
    if (localStorage.getItem(a.id.replace("Settings-panel__", "")) == "true") {
      a.classList.add("Settings-panel__button_active");
    } else {
      a.classList.remove("Settings-panel__button_active");
    }

    ;
    a.addEventListener("click", function () {
      if (a.classList.contains("Settings-panel__button_active")) {
        localStorage.setItem(a.id.replace("Settings-panel__", ""), "false");
        a.classList.remove("Settings-panel__button_active");
      } else {
        localStorage.setItem(a.id.replace("Settings-panel__", ""), "true");
        a.classList.add("Settings-panel__button_active");
      }

      ;
      console.log("\"".concat(a.id.replace("Settings-panel__", ""), "\" is now: ").concat(localStorage.getItem(a.id.replace("Settings-panel__", ""))));
    });
  }

  ; // Initiators

  CategorySwitchFunction(world);
  CategorySwitchFunction(health);
  CategorySwitchFunction(sports);
  CategorySwitchFunction(business);
  CategorySwitchFunction(travel);
});