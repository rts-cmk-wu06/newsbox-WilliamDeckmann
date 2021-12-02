document.addEventListener("DOMContentLoaded", () => {

    // Element variables
    const world = document.querySelector("#Settings-panel__world");
    const health = document.querySelector("#Settings-panel__health");
    const sports = document.querySelector("#Settings-panel__sports");
    const business = document.querySelector("#Settings-panel__business");
    const travel = document.querySelector("#Settings-panel__travel");



    // Category switch function
    function CategorySwitchFunction(a) {


        if(localStorage.getItem(a.id.replace("Settings-panel__", "")) == "true") {
            a.classList.add("Settings-panel__button_active");
        }else{
            a.classList.remove("Settings-panel__button_active");
        };


        a.addEventListener("click", () => {
            if(a.classList.contains("Settings-panel__button_active")) {
                localStorage.setItem(a.id.replace("Settings-panel__", ""), "false");
                a.classList.remove("Settings-panel__button_active");
            }else{
                localStorage.setItem(a.id.replace("Settings-panel__", ""), "true");
                a.classList.add("Settings-panel__button_active");
            };
            //console.log(`"${a.id.replace("Settings-panel__", "")}" is now: ${localStorage.getItem(a.id.replace("Settings-panel__", ""))}`);
        });
    };



    // Initiators
    CategorySwitchFunction(world);
    CategorySwitchFunction(health);
    CategorySwitchFunction(sports);
    CategorySwitchFunction(business);
    CategorySwitchFunction(travel);
});