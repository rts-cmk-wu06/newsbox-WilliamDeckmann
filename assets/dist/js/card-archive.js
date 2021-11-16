"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Element variables
  var list = document.querySelector(".News-section__list"); // Array variables

  var archiveArray = []; // SwipeFunction

  var ArchiveFunction = function ArchiveFunction(e) {
    // Target element
    var parent = e.target.parentElement; // Element variables

    var article = parent.querySelector(".News-card__container");
    var button = parent.querySelector(".News-card__button"); // If parent is correct

    if (parent.classList == "News-card") {
      // Delete
      button.onclick = function () {
        // "onclick" instead of "event-listener", since it only runs once!
        // User object
        var userObject = {
          url: parent.querySelector(".News-card__container").href,
          img: parent.querySelector(".News-card__container .News-card__img").src,
          title: parent.querySelector(".News-card__container .News-card__article .News-card__title").textContent,
          text: parent.querySelector(".News-card__container .News-card__article .News-card__text").textContent
        }; // Push deleted items

        archiveArray.push(userObject); // JSON.stringify(userObject)

        localStorage.setItem("deleted", JSON.stringify(archiveArray)); // Animate
        // mainElement.style.transform = "scale(0, 0)";

        article.style.transform = "translateX(0px)";
        parent.classList.add("animate__animated", "animate__backOutLeft");
        setTimeout(function () {
          parent.classList.add("News-card_collapsed");
        }, 500);
        setTimeout(function () {
          parent.remove();
        }, 500 + 500); // Wait the time it takes for all animations to run
        // Log the local storage

        console.log(JSON.parse(localStorage.getItem("deleted")));
      };
    }

    ;
  }; // Add event listener


  list.addEventListener("touchstart", function (e) {
    ArchiveFunction(e);
  });
});