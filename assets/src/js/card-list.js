document.addEventListener("DOMContentLoaded", () => {

    // API variables
    const urlObject = {
        "World":"https://api.nytimes.com/svc/topstories/v2/world.json?api-key=4TFLMLQoawDilugcroiDSgofs6otpAi5",
        "Health": "https://api.nytimes.com/svc/topstories/v2//health.json?api-key=4TFLMLQoawDilugcroiDSgofs6otpAi5",
        "Sports": "https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=4TFLMLQoawDilugcroiDSgofs6otpAi5",
        "Business": "https://api.nytimes.com/svc/topstories/v2/business.json?api-key=4TFLMLQoawDilugcroiDSgofs6otpAi5",
        "Travel": "https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=4TFLMLQoawDilugcroiDSgofs6otpAi5"
        };

    const world = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=4TFLMLQoawDilugcroiDSgofs6otpAi5";
    const health = "https://api.nytimes.com/svc/topstories/v2//health.json?api-key=4TFLMLQoawDilugcroiDSgofs6otpAi5";
    const sports = "https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=4TFLMLQoawDilugcroiDSgofs6otpAi5";
    const business = "https://api.nytimes.com/svc/topstories/v2/business.json?api-key=4TFLMLQoawDilugcroiDSgofs6otpAi5";
    const travel = "https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=4TFLMLQoawDilugcroiDSgofs6otpAi5";

    // Url variable
    let url = world;

    // Element variable
    const container = document.querySelector(".News-container");

    // List length variable
    let listLength = 5;




    Object.entries(urlObject).forEach(element => {
        let [key, value] = element;
        console.log(key);
        console.log(value);




    });



    // Fetch API data
    axios.get(url)
    .then(response => {

        // Path variable
        let path = response.data.results;

        // Create section
        let section = document.createElement("section");
        container.appendChild(section);
        section.classList.add("News-section");
        let header = document.createElement("header");
        container.appendChild(header);
        header.classList.add("News-section__header");
        header.innerHTML = `
            <figure class="News-section__figure">
                <div class="News-section__icon">
                    ...
                </div>
                <h1 class="News-section__title uppercase">
                    Section title
                </h1>
            </figure>
        `;

        // Create button
        let button = document.createElement("button");
        header.appendChild(button);
        button.classList.add("News-section__button");
        let arrow = document.createElement("i");
        button.appendChild(arrow);
        arrow.classList.add("fas", "fa-chevron-right", "News-section__arrow-right", "News-section__arrow-right_active");
        /* button.innerHTML = `
            <i class="fas fa-chevron-right News-section__arrow-right News-section__arrow-right_active"></i>
        `; */

        // Activate list
        button.addEventListener("click", () => {
            list.classList.toggle("News-section__list_active");
            arrow.classList.toggle("News-section__arrow-right_active");
        });

        // Create list
        let list = document.createElement("ul");
        container.appendChild(list);
        list.classList.add("News-section__list", "News-section__list_active");



        // For each item in the path        path.forEach(element =>
        for(let i = 0; i < listLength; i++) {

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
                <a class="News-card__container" href="${path[i].url}">
                    <img class="News-card__img" src="${path[i].multimedia[0].url}" alt="News image">
                    <article class="News-card__article">
                        <h2 class="News-card__title">
                            ${path[i].title}
                        </h2>
                        <p class="News-card__text">
                            text...
                        </p>
                    </article>
                </a>
            `; // href="${element.url}"
        };
    });
});