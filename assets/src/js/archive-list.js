document.addEventListener("DOMContentLoaded", () => {

    // Local storage variables
    let archiveArray = JSON.parse(localStorage.getItem("archive"));
    console.log(archiveArray);

    // Element variable
    const list = document.querySelector(".News-section__list");
    const button = document.querySelector(".News-section__button");
    const arrow = document.querySelector(".News-section__arrow-right");



    // For each item in the archive array
    archiveArray.forEach(element => {

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
        list.classList.toggle("News-section__list_active");
        arrow.classList.toggle("News-section__arrow-right_active");
    });
});