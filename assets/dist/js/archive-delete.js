"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Element variables
  var container = document.querySelector("#News-container"); // Array variables

  var archiveArray = JSON.parse(localStorage.getItem("archive")); // SwipeFunction

  var ArchiveFunction = function ArchiveFunction(e) {
    // Target element
    var parent = e.target.parentElement; // Element variables

    var list = parent.parentElement;
    var article = parent.querySelector(".News-card__container");
    var button = parent.querySelector(".News-card__button"); // List height

    var newHeight = list.offsetHeight; // If parent is correct

    if (parent.classList == "News-card") {
      // Delete
      button.onclick = function () {
        // "onclick" instead of "event-listener", since it only runs once!
        // User object
        var userObject = {
          id: parent.id,
          url: parent.querySelector(".News-card__container").href,
          img: parent.querySelector(".News-card__container .News-card__img").src,
          title: parent.querySelector(".News-card__container .News-card__article .News-card__title").textContent,
          text: parent.querySelector(".News-card__container .News-card__article .News-card__text").textContent
        }; // Filter archived items

        archiveArray = archiveArray.filter(function (item) {
          return userObject.id != item.id;
        });
        localStorage.setItem("archive", JSON.stringify(archiveArray)); // Animate

        article.style.transform = "translateX(0px)";
        parent.classList.add("animate__animated", "animate__backOutLeft");
        setTimeout(function () {
          parent.classList.add("News-card_collapsed");
        }, 500);
        newHeight -= 100;
        setTimeout(function () {
          return list.style.height = newHeight + "px";
        }, 400); // Set to 400 instead of 500 because of code delay

        setTimeout(function () {
          parent.remove();
        }, 500 + 500); // Wait the time it takes for all animations to run
        // Log the local storage

        console.log(JSON.parse(localStorage.getItem("archive")));
      };
    }

    ;
  }; // Add event listener


  container.addEventListener("touchstart", function (e) {
    ArchiveFunction(e);
  });
});