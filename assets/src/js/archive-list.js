document.addEventListener("DOMContentLoaded", () => {

    // Local storage variables
    let archiveArray = JSON.parse(localStorage.getItem("archive"));
    //console.log(archiveArray);

    // Element variable
    const list = document.querySelector("#News-section__list");
    const button = document.querySelector("#News-section__button");
    const arrow = document.querySelector("#News-section__arrow-right");

    // List height
    let newHeight = 0;



    // For each item in the archive array
    archiveArray.forEach(element => {

        // Increase list height
        newHeight += 100;
        list.style.height = newHeight + "px";

        // Create: item
        let card = document.createElement("li");
        list.appendChild(card);
        card.classList.add("News-card")
        card.setAttribute("id", element.id);
        card.innerHTML = `
            <button class="News-card__button News-card__remove">
                <i class="fas fa-trash News-card__trash-can"></i>
            </button>
            <a class="News-card__container" href="${element.url}">
                <img class="News-card__img" src="${element.img}" alt="News image">
                <article class="News-card__article">
                    <h2 class="News-card__title">
                        ${element.title}
                    </h2>
                    <p class="News-card__text">
                    ${element.text}
                    </p>
                </article>
            </a>
        `;
    });



    // Activate list
    button.addEventListener("click", () => {
        if(list.classList.contains("News-section__list_closed")) {
            list.classList.remove("News-section__list_closed");
            newHeight = 0;
            let card = list.querySelectorAll(".News-card")
            card.forEach(item => {
                newHeight += 100;
            });
            list.style.height = newHeight + "px";
            arrow.classList.remove("News-section__arrow-right_closed");
        }else{
            list.classList.add("News-section__list_closed");
            list.style.height = "0px";
            arrow.classList.add("News-section__arrow-right_closed");
        };
    });
});