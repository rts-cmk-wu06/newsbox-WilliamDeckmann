"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // API variables
  var world = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=4TFLMLQoawDilugcroiDSgofs6otpAi5";
  var health = "https://api.nytimes.com/svc/topstories/v2//health.json?api-key=4TFLMLQoawDilugcroiDSgofs6otpAi5";
  var sports = "https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=4TFLMLQoawDilugcroiDSgofs6otpAi5";
  var business = "https://api.nytimes.com/svc/topstories/v2/business.json?api-key=4TFLMLQoawDilugcroiDSgofs6otpAi5";
  var travel = "https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=4TFLMLQoawDilugcroiDSgofs6otpAi5"; // Url variable

  var url = world; // Element variable

  var list = document.querySelector(".News-section__list");
  var button = document.querySelector(".News-section__button");
  var arrow = document.querySelector(".News-section__arrow-right"); // Fetch API data

  axios.get(url).then(function (response) {
    // Path variable
    var path = response.data.results; // For each item in the path

    path.forEach(function (element) {
      //console.log(element);
      // Create: item
      var card = document.createElement("li");
      list.appendChild(card);
      card.classList.add("News-card"); //item.setAttribute("id", data.username); //`Item_${i}`

      card.innerHTML = "\n                <button class=\"News-card__button News-card__archive\">\n                    <i class=\"fas fa-inbox News-card__inbox\"></i>\n                </button>\n                <a class=\"News-card__container\" href=\"".concat(element.url, "\">\n                    <img class=\"News-card__img\" src=\"").concat(element.multimedia[0].url, "\" alt=\"News image\">\n                    <article class=\"News-card__article\">\n                        <h2 class=\"News-card__title\">\n                            ").concat(element.title, "\n                        </h2>\n                        <p class=\"News-card__text\">\n                            text...\n                        </p>\n                    </article>\n                </a>\n            "); // href="${element.url}"
    });
  }); // Activate list

  button.addEventListener("click", function () {
    list.classList.toggle("News-section__list_active");
    arrow.classList.toggle("News-section__arrow-right_active");
  });
});