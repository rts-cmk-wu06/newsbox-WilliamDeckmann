"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Array varible
  var archiveArray = []; // When the page loads for the first time

  window.onload = function () {
    if (localStorage.getItem("already-loaded") === null) {
      // Set all local storage
      localStorage.setItem("already-loaded", "true");
      localStorage.setItem("tutorial-loaded", "false");
      localStorage.setItem("dark-mode", "false");
      localStorage.setItem("archive", JSON.stringify(archiveArray));
      localStorage.setItem("world", "true");
      localStorage.setItem("health", "true");
      localStorage.setItem("sports", "true");
      localStorage.setItem("business", "true");
      localStorage.setItem("travel", "true"); // Reload page after local storage is set

      window.location.reload();
    }

    ;
  };
});