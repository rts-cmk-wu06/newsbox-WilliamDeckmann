document.addEventListener("DOMContentLoaded", () => {

    // API object
    const urlObject = {
        "world":"https://api.nytimes.com/svc/topstories/v2/world.json?api-key=4TFLMLQoawDilugcroiDSgofs6otpAi5",
        "health": "https://api.nytimes.com/svc/topstories/v2//health.json?api-key=4TFLMLQoawDilugcroiDSgofs6otpAi5",
        "sports": "https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=4TFLMLQoawDilugcroiDSgofs6otpAi5",
        "business": "https://api.nytimes.com/svc/topstories/v2/business.json?api-key=4TFLMLQoawDilugcroiDSgofs6otpAi5",
        "travel": "https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=4TFLMLQoawDilugcroiDSgofs6otpAi5"
    };

    // For each entry in API object
    Object.entries(urlObject).forEach(element => {
        let [key, value] = element;
        if(localStorage.getItem(key) == "true") {
            CreateNewsCard(key, value);
        };
    });

    // Array variables
    let archiveArray = JSON.parse(localStorage.getItem("archive"));
    console.log(archiveArray);

    // Id array
    let idArray = [];
    archiveArray.forEach(element => {
        idArray.push(element.id);
    });

    // Element variable
    const container = document.querySelector(".News-container");

    // List length variable
    let listLength = 5;



    // Create news card
    function CreateNewsCard(title, url) {

        // Fetch API data
        axios.get(url)
        .then(response => {
    
            // Path variable
            let path = response.data.results;

            // Make first letter uppercase
            function FirstLetterUppercase(string){
                return string.charAt(0).toUpperCase() + string.slice(1);
            };


    
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
                        ${FirstLetterUppercase(title)}
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
    
            // Create list
            let list = document.createElement("ul");
            container.appendChild(list);
            list.classList.add("News-section__list", "News-section__list_active");



            // Activate list
            button.addEventListener("click", () => {
                list.classList.toggle("News-section__list_active");
                arrow.classList.toggle("News-section__arrow-right_active");
            });
    
    
    
            // For each item in the API
            for(let i = 0; i < listLength; i++) {
    
                // Turn news card title into id
                let id = path[i].title.split(' ').join('_');

                // Skip if exists in archive
                if(!id.includes(idArray[i])) {

                    // Create: item
                    let card = document.createElement("li");
                    list.appendChild(card);
                    card.classList.add("News-card")
                    card.setAttribute("id", id);
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
                    `;
                };
            };
        });
    };
});