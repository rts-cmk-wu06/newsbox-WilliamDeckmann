"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // When the page loads for the first time
  window.onload = function () {
    if (localStorage.getItem("alreadyLoaded") === null) {
      // Set all local storage
      localStorage.setItem("alreadyLoaded", true);
      localStorage.setItem("world", true);
      localStorage.setItem("health", true);
      localStorage.setItem("sports", true);
      localStorage.setItem("business", true);
      localStorage.setItem("travel", true);
      localStorage.setItem("archive", []); // Reload page after local storage is set

      window.location.reload();
    }

    ;
  };
});