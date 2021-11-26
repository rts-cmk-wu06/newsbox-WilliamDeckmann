document.addEventListener("DOMContentLoaded", () => {

    // Element variables
    const tutorial = document.querySelector("#Tutorial");
    const item_1 = document.querySelector("#Tutorial__item_1");
    const item_2 = document.querySelector("#Tutorial__item_2");
    const item_3 = document.querySelector("#Tutorial__item_3");
    const item_4 = document.querySelector("#Tutorial__item_4");
    const item_5 = document.querySelector("#Tutorial__item_5");

    // Other element variables
    /* const card = document.querySelectorAll(".News-card_tutorial-item");
    console.log(card); */
    const archive = document.querySelector("#Header__inbox");
    const settings = document.querySelector("#Header__gear");



    // Activate tutorial
    item_1.querySelector(".Tutorial__button").addEventListener("click", () => {
        item_1.classList.remove("Tutorial__item_active");
        item_2.classList.add("Tutorial__item_active");
        /* card.forEach(item => {
            item.classList.add("News-card_tutorial-item_active");
        }); */
    });

    item_2.querySelector(".Tutorial__button").addEventListener("click", () => {
        item_2.classList.remove("Tutorial__item_active");
        /* card.forEach(item => {
            item.classList.remove("News-card_tutorial-item_active");
        }); */
        item_3.classList.add("Tutorial__item_active");
        archive.classList.add("Header__inbox_active");
    });

    item_3.querySelector(".Tutorial__button").addEventListener("click", () => {
        item_3.classList.remove("Tutorial__item_active");
        archive.classList.remove("Header__inbox_active");
        item_4.classList.add("Tutorial__item_active");
        settings.classList.add("Header__gear_active");
    });

    item_4.querySelector(".Tutorial__button").addEventListener("click", () => {
        item_4.classList.remove("Tutorial__item_active");
        settings.classList.remove("Header__gear_active");
        item_5.classList.add("Tutorial__item_active");
    });



    item_5.querySelector(".Tutorial__button").addEventListener("click", () => {
        item_5.classList.remove("Tutorial__item_active");
        tutorial.classList.add("Tutorial_state_completed");
    });
});