"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Element variables
  var container = document.querySelector("#News-container"); // SwipeFunction

  var SwipeFunction = function SwipeFunction(e) {
    // Target element
    var parent = e.target.parentElement; //let parent = e.target.closest(".Item");
    // Element variables

    var article = parent.querySelector(".News-card__container");
    var button = parent.querySelector(".News-card__button"); // Touch variables

    var touchStart = e.touches[0].clientX;
    var touchMove;
    var touchEnd; // If parent is correct

    if (parent.classList == "News-card") {
      // Touch move
      article.addEventListener("touchmove", function (e) {
        touchMove = Math.floor(e.touches[0].clientX);

        if (touchMove < touchStart && touchMove > touchStart - button.offsetWidth) {
          // button.offsetWidth // viewWidth
          article.style.transform = "translateX(".concat(touchMove - touchStart, "px)");
        }

        ;
      }); // Touch end

      article.addEventListener("touchend", function (e) {
        touchEnd = Math.floor(e.changedTouches[0].clientX);

        if (touchEnd < touchStart - button.offsetWidth / 2) {
          // button.offsetWidth / 2  // viewWidth / 2
          article.style.transform = "translateX(-".concat(button.offsetWidth, "px)");
        } else {
          article.style.transform = "translateX(0px)"; // ${e.target.offsetLeft}
        }

        ;
      });
    }

    ;
  }; // Add event listener


  container.addEventListener("touchstart", function (e) {
    SwipeFunction(e);
  });
});