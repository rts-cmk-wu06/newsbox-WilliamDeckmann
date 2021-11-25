"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Local storage variables
  var archiveArray = JSON.parse(localStorage.getItem("archive"));
  console.log(archiveArray); // Element variable

  var list = document.querySelector("#News-section__list");
  var button = document.querySelector("#News-section__button");
  var arrow = document.querySelector("#News-section__arrow-right"); // List height

  var newHeight = 0; // For each item in the archive array

  archiveArray.forEach(function (element) {
    // Increase list height
    newHeight += 100;
    list.style.height = newHeight + "px"; // Create: item

    var card = document.createElement("li");
    list.appendChild(card);
    card.classList.add("News-card");
    card.setAttribute("id", element.id);
    card.innerHTML = "\n            <button class=\"News-card__button News-card__remove\">\n                <i class=\"fas fa-trash News-card__trash-can\"></i>\n            </button>\n            <a class=\"News-card__container\" href=\"".concat(element.url, "\">\n                <img class=\"News-card__img\" src=\"").concat(element.img, "\" alt=\"News image\">\n                <article class=\"News-card__article\">\n                    <h2 class=\"News-card__title\">\n                        ").concat(element.title, "\n                    </h2>\n                    <p class=\"News-card__text\">\n                    ").concat(element.text, "\n                    </p>\n                </article>\n            </a>\n        ");
  }); // Activate list

  button.addEventListener("click", function () {
    if (list.classList.contains("News-section__list_closed")) {
      list.classList.remove("News-section__list_closed");
      list.style.height = newHeight + "px";
      arrow.classList.remove("News-section__arrow-right_closed");
    } else {
      list.classList.add("News-section__list_closed");
      list.style.height = "0px";
      arrow.classList.add("News-section__arrow-right_closed");
    }

    ;
  });
});