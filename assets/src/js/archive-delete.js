document.addEventListener("DOMContentLoaded", () => {

    // Element variables
    const container = document.querySelector("#News-container");

    // Array variables
    let archiveArray = [];
    if (localStorage.getItem("archive")) {
        archiveArray = JSON.parse(localStorage.getItem("archive"));
    };

    

    // SwipeFunction
    let ArchiveFunction = (e) => {

        // Target element
        let parent = e.target.parentElement;

        // Element variables
        let list = parent.parentElement;
        let article = parent.querySelector(".News-card__container");
        let button = parent.querySelector(".News-card__button");

        // List height
        let newHeight = list.offsetHeight;


        
        // If parent is correct
        if(parent.classList == "News-card") {

            // Delete
            button.onclick = () => { // "onclick" instead of "event-listener", since it only runs once!

                // User object
                let userObject = {
                    id: parent.id,
                    url: parent.querySelector(".News-card__container").href,
                    img: parent.querySelector(".News-card__container .News-card__img").src,
                    title: parent.querySelector(".News-card__container .News-card__article .News-card__title").textContent,
                    text: parent.querySelector(".News-card__container .News-card__article .News-card__text").textContent
                };

                // Filter archived items
                archiveArray = archiveArray.filter((item) => userObject.id != item.id);
                localStorage.setItem("archive", JSON.stringify(archiveArray));
                button.onclick = null;

                // Animate
                article.style.transform = `translateX(0px)`;
                parent.classList.add("animate__animated", "animate__backOutLeft");
                setTimeout(() => {parent.classList.add("News-card_collapsed")}, 500);
                newHeight -= 100;
                setTimeout(() => list.style.height = newHeight + "px", 400); // Set to 400 instead of 500 because of code delay
                setTimeout(() => {parent.remove()}, 500 + 500); // Wait the time it takes for all animations to run

                
                
                // Log the local storage
                console.log(JSON.parse(localStorage.getItem("archive")));
            };
        };
    };
    


    // Add event listener
    container.addEventListener("touchstart", (e) => {
        ArchiveFunction(e);
    });
});