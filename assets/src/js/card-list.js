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



    // Fetch API data
    axios.get(url)
    .then(response => {

        // Path variable
        let path = response.data.results;


        
        // For each item in the path
        path.forEach(element => {

            console.log(element.title);

            // Create: item
            let card = document.createElement("li");
            list.appendChild(card);
            card.classList.add("News-card")
            //item.setAttribute("id", data.username); //`Item_${i}`
            card.innerHTML = `
                <div class="News-card__delete">
                    <i class="fas fa-trash News-card__trash-can"></i>
                </div>
                <article class="News-card__article">
                    <p class="News-card__title">
                        Username: ${element.title}
                    </p>
                </article>
            `;
        });

        
    })
});