# Projektdokumentation

#### Navn: William Deckmann

##### Hold: 1146521c105 / WU05

##### Uddannelse: Webudvikler

##### Uddannelsessted: Roskilde Tekniske Skole

[Link til (min applikaton)](https://williamdeckmann.github.io/newsbox-williamdeckmann/)


## Teknologier

-   HTML
-   CSS
-   Animate.css
-   JavaScript
-   Gulp
-   Sass
-   Github pages

---


### Redegørelse for oprindelsen af evt. tredjeparts kode anvendt i opgaveløsningen (Teknisk dokumentation)

gulp:
Gulp pakken er en nødvendig pakke for at få "gulp-processen" til at udføre. Det er den pakke der gør at den compiler, translater, watcher osv. Det gør det muligt for alle andre pakker som skal tale sammen med den at blive udført.

sass:
Sass pakken er nødvendig hvis man gerne vil bruge Sass syntaks i sin kode, og kan indgå i "gulp-processen", ligesom jeg har gjort i det her projekt. Jeg benytter mig af Scss til at skrive min css, da det gør det lidt lettere at skrive styling.

gulp-sass:
Gulp-sass pakken er nødvendig hvis man gerne vil gøre brug af Sass pakken. Den gør sådan at Gulp pakken og Sass pakken kan snakke sammen med hinanden, derfor er den nødvendig hvis man gerne vil skrive Sass syntaks.

@babel/core:
@babel/core pakken er gør det muligt at oversætte ny/morderne JavaScript kode til en ældre syntaks, for at sikre sig at alle browsere, (hvis der nu skulle være nogle browsere som ikke var up-to-date endnu), altid er i stand til at læse koden og forstå den, og kan indgå i "gulp-processen". På den måde undgår man at ens web-site pludselig ikke virker længere.

gulp-babel:
Gulp-babel pakken er nødvendig hvis man gerne vil bruge @babel/core pakken. Den gør sådan at Gulp pakken og @babel/core pakken kan snakke sammen med hinanden.

@babel/preset-env:
@babel/preset-env pakken er nødvendig når man skal bruge en "babel.config.json" fil i sin "Gulp-process".

axios:
Axios pakken er nødvendig hvis man hellere vil fetche API data med Axios syntaksen, i stedet for den normale "fetch" metode. Jeg gør brug af den her metode da det gør det lidt nemmere at skrive fetch koden og dermed også spare mig for lidt ekstra tid.

---


### Argumentation for de valg du selvstændigt har truffet under løsningen af opgaven

Jeg tænkte meget over den måde hvorpå jeg gemmer min data og endte op med at gemme størstedelen af alt den data som skal genbruges i local-storage, da det gjorde det meget nemmere at genbruge andre steder op hjemmesiden. Det gjorde sig meget relevant i forhold til data fra kortene som skulle blive brugt på den arkiverede liste og også "dark-mode" funktionen.

Jeg tænkte også meget på den måde hvor på at listerne og kortene blev vist, da nogle af listerne kun skulle blive vist alt efter om de var slået til eller ej, og at kortene kun skulle blive vist hvis de ikke allerede var blevet arkiveret.

I forhold til animationerne valgte jeg at alting skulle udføres i samme tempo, for at have et mere homogent flow, det inkluderede også farverne, fading og andre bevægelige objekter, som fks. kortene når de blev arkiveret. Farverne ændrer sig også i et smooth tempo når man skifter fra "light-mode" til "dark-mode".

---


### Vurdering af egen indsats & gennemførelse af opgaveforløbet (Arbejdsgangen)

Jeg synes at det har været et godt og produktivt arbejdsforløb, specielt hvis man også tager i betragtning at jeg lå syg i en tredjedel af vores arbejdsforløb. Jeg fik grundigt arbejdet på alle de dele og aspekter af projektet som jeg havde lyst til og gennemførte alle dele af opgavens krav, (og lidt mere til). Jeg fik tilføjet mine egen små detaljer og synes selv at jeg kom frem til nogle gode løsninger på de forskellige problematikker jeg stødte på. De største dele af opgaven blev færdiggjort inden for den første uge af projektet og alle andre ekstra detaljer og finpudsninger blev udført i de efterfølgende dage, hvor der også blev tilføjet lidt ekstra opmærksomhed til at forsikre mod potentielle fremtidige problematikker. Jeg fik også brugt min tid på at arbejde med alle de forskellige aspekter af opgaven jeg ikke tidligere følte at jeg havde lige så godt styr på, så jeg føler også at jeg har lært en del. Alt i alt en spændende og sjov opgave at få lov til at arbejde med, selvom den sidste uge var knap som produktiv som de to første.

Ingen af opgavens krav virkede for uoverskuelige og umulige til at kunne komme over, selvom der var lidt forhindringer her og der. Jeg fik også et par enkelte tips fra Oliver Rindholt som var så venlig at vejlede mig i forhold til "local-storage".

---


### En beskrivelse af særlige punkter til bedømmelse

(er der en særlig detalje som du synes din underviser bør lægge mærke til når dit projekt evalueres)

Den del af opgaven jeg er mest stolt af, er den måde hvorpå at jeg skaber mine nyheds-sektioner alt efter om de er slået til eller fra. Inde i hver nyheds-sektion bliver de forskellige kort skabt alt efter om listen indeholder et kort som allerede er blevet arkiveret, i hvilke tilfælde den ikke vil blive skabt. Hver listes højde er også baseret på mængden af kort og ændre sig alt efter om et kort bliver arkiveret eller slettet, sådan at listen kan animere alt efter hvilken højde den har. Alt data som kortene skal bruges for at blive skabt i den arkiverede liste bliver også gemt i local-storage og bliver også refereret til på den originale liste, når den skal sikre sig ikke at skabe et kort der allerede er arkiveret.

Den funktion hvor at jeg slår mine nyheds-sektioner til og fra var også meget sjov at lave. Alt min Scss kode var også meget sjov at lege rundt med og jeg synes selv at jeg fandt frem til nogle gode og kreative løsninger til mine problemer.


## Eksemple på måde hvor jeg har integraret styling med i en font når den skal bruges flere forskellige steder:
```css
/* Font extension */
%section-heading {
    font-size: 2.4em;
    font-weight: bolder;
};

/* Header */
.Header {
	&__title {
        @extend %section-header;
        color: var(--primary);
    };
};
```

## Eksempel på måde hvor jeg looper igennem forsklleigt API data:
```js
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
```

## Eksempel på måde hvor jeg sikrer mig at de arkiverede kort ikke bliver vist på listen igen:
```js
// Array variables
let archiveArray = JSON.parse(localStorage.getItem("archive"));

// Id array
let idArray = [];
archiveArray.forEach(element => {
	idArray.push(element.id);
});

// Turn news card url into id
let id = path[i].short_url.replace("https://nyti.ms/", "");

// Skip if exists in archive
if(!idArray.includes(id)) {

	/* Code that makes news-card if not archived... */
};
```

## Eksempel på måde hvor jeg kan sætte højden på nyheds-listen, sådan at den kan animere fra et "open" til et "closed" stadie:
```js
// List variable
let listLength = 5;
let newHeight = 0;

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

// For each item in the API
for(let i = 0; i < listLength; i++) {

	// Increase list height
	newHeight += 100;
	list.style.height = newHeight + "px";

	/* Code that makes news-section if not turned off... */
};
```

## Eksempel på måde hvor jeg kan toggle en news-section til og fra, og derefter gemme den data i local-storage:
```js
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
	});
};
```