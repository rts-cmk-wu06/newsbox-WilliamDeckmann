"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // API variables
  var world = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=4TFLMLQoawDilugcroiDSgofs6otpAi5";
  var health = "https://api.nytimes.com/svc/topstories/v2//health.json?api-key=4TFLMLQoawDilugcroiDSgofs6otpAi5";
  var sports = "https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=4TFLMLQoawDilugcroiDSgofs6otpAi5";
  var business = "https://api.nytimes.com/svc/topstories/v2/business.json?api-key=4TFLMLQoawDilugcroiDSgofs6otpAi5";
  var travel = "https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=4TFLMLQoawDilugcroiDSgofs6otpAi5"; // Url variable

  var url = world; // Element variable

  var list = document.querySelector(".News-section__list"); // Fetch API data

  axios.get(url).then(function (response) {
    // Path variable
    var path = response.data.results; // For each item in the path

    path.forEach(function (element) {
      console.log(element.title); // Create: item

      var card = document.createElement("li");
      list.appendChild(card);
      card.classList.add("News-card"); //item.setAttribute("id", data.username); //`Item_${i}`

      card.innerHTML = "\n                <div class=\"News-card__delete\">\n                    <i class=\"fas fa-trash News-card__trash-can\"></i>\n                </div>\n                <article class=\"News-card__article\">\n                    <p class=\"News-card__title\">\n                        Username: ".concat(element.title, "\n                    </p>\n                </article>\n            ");
    });
  });
});