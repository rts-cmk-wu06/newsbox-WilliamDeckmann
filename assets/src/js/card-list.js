document.addEventListener("DOMContentLoaded", () => {

    // API variables
    const world = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=4TFLMLQoawDilugcroiDSgofs6otpAi5";
    const health = "https://api.nytimes.com/svc/topstories/v2//health.json?api-key=4TFLMLQoawDilugcroiDSgofs6otpAi5";
    const sports = "https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=4TFLMLQoawDilugcroiDSgofs6otpAi5";
    const business = "https://api.nytimes.com/svc/topstories/v2/business.json?api-key=4TFLMLQoawDilugcroiDSgofs6otpAi5";
    const travel = "https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=4TFLMLQoawDilugcroiDSgofs6otpAi5";

    // Url variable
    let url = world;

    // Element variable
    const list = document.querySelector(".News-section__list");
    const button = document.querySelector(".News-section__button");
    const arrow = document.querySelector(".News-section__arrow-right");



    // Fetch API data
    axios.get(url)
    .then(response => {

        // Path variable
        let path = response.data.results;


        
        // For each item in the path
        path.forEach(element => {

            //console.log(element);

            // Create: item
            let card = document.createElement("li");
            list.appendChild(card);
            card.classList.add("News-card")
            //item.setAttribute("id", data.username); //`Item_${i}`
            card.innerHTML = `
                <button class="News-card__button News-card__archive">
                    <i class="fas fa-inbox News-card__inbox"></i>
                </button>
                <a class="News-card__container" href="${element.url}">
                    <img class="News-card__img" src="${element.multimedia[0].url}" alt="News image">
                    <article class="News-card__article">
                        <h2 class="News-card__title">
                            ${element.title}
                        </h2>
                        <p class="News-card__text">
                            text...
                        </p>
                    </article>
                </a>
            `; // href="${element.url}"
        });
    })



    // Activate list
    button.addEventListener("click", () => {
        list.classList.toggle("News-section__list_active");
        arrow.classList.toggle("News-section__arrow-right_active");
    });
});