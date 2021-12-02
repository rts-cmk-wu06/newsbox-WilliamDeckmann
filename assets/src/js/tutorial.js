document.addEventListener("DOMContentLoaded", () => {

    // Element variables
    const wrapper = document.querySelector("#Wrapper");
    const tutorial = document.querySelector("#Tutorial");
    const item_1 = document.querySelector("#Tutorial__item_1");
    const item_2 = document.querySelector("#Tutorial__item_2");
    const item_3 = document.querySelector("#Tutorial__item_3");
    const item_4 = document.querySelector("#Tutorial__item_4");
    const item_5 = document.querySelector("#Tutorial__item_5");

    // Other element variables
    const archive = document.querySelector("#Header__inbox");
    const settings = document.querySelector("#Header__gear");



    // Check if tutorial has run before
    if(localStorage.getItem("already-loaded") == "true") {
        if(localStorage.getItem("tutorial-loaded") == "false") {

            // Lock the screen
            wrapper.classList.add("Wrapper_tutorial");



            // Activate tutorial
            item_1.querySelector(".Tutorial__button").addEventListener("click", () => {
                item_1.classList.remove("Tutorial__item_active");
                item_2.classList.add("Tutorial__item_active");
            });

            item_2.querySelector(".Tutorial__button").addEventListener("click", () => {
                item_2.classList.remove("Tutorial__item_active");
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



            // End tutorial
            item_5.querySelector(".Tutorial__button").addEventListener("click", () => {
                item_5.classList.remove("Tutorial__item_active");
                wrapper.classList.remove("Wrapper_tutorial");
                tutorial.classList.add("Tutorial_state_completed");
                localStorage.setItem("tutorial-loaded", "true");
            });
        }else{

            // If tutorial has run before
            wrapper.classList.remove("Wrapper_tutorial");
            tutorial.classList.add("Tutorial_state_completed");
            localStorage.setItem("tutorial-loaded", "true");
        };
    };
});