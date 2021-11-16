document.addEventListener("DOMContentLoaded", () => {

    // Element variables
    const list = document.querySelector(".News-section__list");

    // Array variables
    let archiveArray = [];

    

    // SwipeFunction
    let ArchiveFunction = (e) => {

        // Target element
        let parent = e.target.parentElement;

        // Element variables
        let article = parent.querySelector(".News-card__container");
        let button = parent.querySelector(".News-card__button");

        // If parent is correct
        if(parent.classList == "News-card") {

            // Delete
            button.onclick = () => { // "onclick" instead of "event-listener", since it only runs once!

                // User object
                let userObject = {
                    url: parent.querySelector(".News-card__container").href,
                    img: parent.querySelector(".News-card__container .News-card__img").src,
                    title: parent.querySelector(".News-card__container .News-card__article .News-card__title").textContent,
                    text: parent.querySelector(".News-card__container .News-card__article .News-card__text").textContent
                };

                // Push deleted items
                archiveArray.push(userObject); // JSON.stringify(userObject)
                localStorage.setItem("deleted", JSON.stringify(archiveArray));

                // Animate
                // mainElement.style.transform = "scale(0, 0)";
                article.style.transform = `translateX(0px)`;
                parent.classList.add("animate__animated", "animate__backOutLeft");
                setTimeout(() => {parent.classList.add("News-card_collapsed")}, 500);
                setTimeout(() => {parent.remove()}, 500 + 500); // Wait the time it takes for all animations to run

                
                
                // Log the local storage
                console.log(JSON.parse(localStorage.getItem("deleted")));
            };
        };
    };
    


    // Add event listener
    list.addEventListener("touchstart", (e) => {
        ArchiveFunction(e);
    });
});