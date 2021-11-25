"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

document.addEventListener("DOMContentLoaded", function () {
  // API object
  var urlObject = {
    "world": "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=4TFLMLQoawDilugcroiDSgofs6otpAi5",
    "health": "https://api.nytimes.com/svc/topstories/v2//health.json?api-key=4TFLMLQoawDilugcroiDSgofs6otpAi5",
    "sports": "https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=4TFLMLQoawDilugcroiDSgofs6otpAi5",
    "business": "https://api.nytimes.com/svc/topstories/v2/business.json?api-key=4TFLMLQoawDilugcroiDSgofs6otpAi5",
    "travel": "https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=4TFLMLQoawDilugcroiDSgofs6otpAi5"
  }; // For each entry in API object

  Object.entries(urlObject).forEach(function (element) {
    var _element = _slicedToArray(element, 2),
        key = _element[0],
        value = _element[1];

    if (localStorage.getItem(key) == "true") {
      CreateNewsCard(key, value);
    }

    ;
  }); // Array variables

  var archiveArray = JSON.parse(localStorage.getItem("archive"));
  console.log(archiveArray); // Id array

  var idArray = [];
  archiveArray.forEach(function (element) {
    idArray.push(element.id);
  }); // Element variable

  var container = document.querySelector("#News-container"); // List length variable

  var listLength = 5; // Create news card

  function CreateNewsCard(title, url) {
    // Fetch API data
    axios.get(url).then(function (response) {
      // Path variable
      var path = response.data.results; // Make first letter uppercase

      function FirstLetterUppercase(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

      ; // Create section

      var section = document.createElement("section");
      container.appendChild(section);
      section.classList.add("News-section");
      var header = document.createElement("header");
      container.appendChild(header);
      header.classList.add("News-section__header");
      header.innerHTML = "\n                <figure class=\"News-section__figure\">\n                    <div class=\"News-section__icon\">\n                        ...\n                    </div>\n                    <h1 class=\"News-section__title uppercase\">\n                        ".concat(FirstLetterUppercase(title), "\n                    </h1>\n                </figure>\n            "); // Create button

      var button = document.createElement("button");
      header.appendChild(button);
      button.classList.add("News-section__button");
      var arrow = document.createElement("i");
      button.appendChild(arrow);
      arrow.classList.add("fas", "fa-chevron-right", "News-section__arrow-right"); // Create list

      var list = document.createElement("ul");
      container.appendChild(list);
      list.classList.add("News-section__list"); // List height

      var newHeight = 0;
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
      }); // For each item in the API

      for (var i = 0; i < listLength; i++) {
        // Turn news card url into id
        var id = path[i].short_url.replace("https://nyti.ms/", ""); // Skip if exists in archive

        if (!idArray.includes(id)) {
          // Increase list height
          newHeight += 100;
          list.style.height = newHeight + "px"; // Create: item

          var card = document.createElement("li");
          list.appendChild(card);
          card.classList.add("News-card");
          card.setAttribute("id", id);
          card.innerHTML = "\n                        <button class=\"News-card__button News-card__archive\">\n                            <i class=\"fas fa-inbox News-card__inbox\"></i>\n                        </button>\n                        <a class=\"News-card__container\" href=\"".concat(path[i].url, "\">\n                            <img class=\"News-card__img\" src=\"").concat(path[i].multimedia[0].url, "\" alt=\"News image\">\n                            <article class=\"News-card__article\">\n                                <h2 class=\"News-card__title\">\n                                    ").concat(path[i].title, "\n                                </h2>\n                                <p class=\"News-card__text\">\n                                    ").concat(path[i]["abstract"].substring(0, 75), "...\n                                </p>\n                            </article>\n                        </a>\n                    ");
        }

        ;
      }

      ;
    });
  }

  ;
});