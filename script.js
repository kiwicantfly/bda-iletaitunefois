function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
const playButton = document.getElementById("play");
const peripetiesContainer = document.getElementById("peripeties");
const initialCardsContainer = document.getElementById("situation-initiale");
const bigCardsContainer = document.getElementById("big-cards-container");
const endButton = document.getElementById("end-button");
const intervalProgressBar = document.getElementById("interval-progress-bar");
const homeScreen = document.getElementById("ecran-accueil");

const numberOfInitialCards = 3;
const initialTypes = ["Personnage", "Lieu", "Contexte"];

const personnageOrObjet = ["Personnage", "Objet"];
const peripetiesTypes = [personnageOrObjet[getRandomInt(2)], "Événement", "Personnage", "Événement", personnageOrObjet[getRandomInt(2)], "Événement"];
const numberOfPeripetiesCards = peripetiesTypes.length;
const totalTime = 120000;
const flipAnimationTime = 400;
const interval = totalTime/(numberOfPeripetiesCards + 1);


const allCards = {
    "Personnage":[
        ["Elon Musk", "elon.png"],
        ["Emmanuel Macron", "macron.png"],
        ["Mimi Mathy", "mimimathy.png"],
        ["Pape Léon XIV", "pape.png"],
        ["Squeezie", "squeezie.png"],
        ["Taylor Swift", "taylor.png"],
        ["Alien", "alien.png"],
        ["Canard", "canard.png"],
        ["Génie", "genie.png"],
        ["Clochette", "clochette.png"],
        ["Père Noël", "perenoel.png"],
        ["Sorcier", "sorcier.png"],
        ["Shrek", "shrek.png"],
        ["Dragon", "dragon.png"],
        ["SpiderMan", "spiderman.png"],
    ],
    "Lieu":[
        ["Piscine", "piscine.webp"],
        ["Aéroport", 'aeroport.jpeg'],
        ["Zone 51", 'area51.png'],
        ["Forêt", 'foret.avif'],
        ["ISS", 'iss.png'],
        ["Maison hantée", "hauntedhouse.png"],
        ["Lune", "lune.png"],
        ["Mont Saint Michel", "montsaintmichel.png"],
        ["Musée", "musee.png"],
        ["Océan", "ocean.png"],
        ["Plage", "plage.png"],
        ["RER D", "rerd.png"],
        ["Chocolaterie", "chocolaterie.png"],
        ["Aux toilettes", "toilettes.png"]

    ],
    "Contexte":[
        ["En train de lire", "lire.jpeg"],
        ["En train de manger", 'manger.webp'],
        ["En randonnée", 'rando.jpeg'],
        ["En train de dormir", 'dormir.png'],
        ["Fait des courses", "courses.png"],
        ["Passe un entretien d'embauche", "embauche.png"],
        ["En train de boire un verre", "verre.png"],
        ["Va se marier", "mariage.png"],
        ["Regarde un film", "film.jpg"],
        ["Mange une pizza", "pizza.png"],
        ["En train de pêcher", "peche.png"],
        ["En train de danser", "danse.png"],
        ["Joue à Flappy Bird", "flappy.png"],
        ["En plein Covid", "virus.png"],
        ["Regarde la télé", "tele.png"],
        ["Il y a eu un meurtre", "meutre.png"],
        ["Fait un TikTok", "tiktok.png"]

    ],
    "Objet":[
        ["Armoire", "armoire.png"],
        ["Soutif", "bra.png"],
        ["Camera", "camera.png"],
        ["Ceinture", "ceinture.png"],
        ["Couteau", "couteau.png"],
        ["Fouet", "fouet.png"],
        ["Gun", "gun.png"],
        ["Poêle", "poele.png"],
        ["Rouge à lèvres", "rougealevre.png"],
        ["Boudin", "boudin.png"],
        ["Bidon d'essence", "bidon.png"],
        ["Trompette", "trompette.png"],
        ["Extincteur", "extincteur.png"],
        ["Pierre philosophale", "philosophale.png"],
        ["Anneau magique", "anneau.png"], 
        ["Boussole", "boussole.png"],
        ["Une paire de bottes", "bottes.png"]

    ],  
    "Événement":[
        ["Il/Elle meurt", 'meurt.png'],
        ["Invasion extraterrestre", 'invasion.jpg'],
        ["Il y a une descente de police", "police.png"],
        ["Il y a le feu", "feu.png"],
        ["Il y a une éclipse", "eclipse.png"],
        ["Il y a un cri", "cri.jpg"],
        ["Un mystérieux paquet arrive", "paquet.png"],
        ["Un numéro masqué appelle", "appel.png"],
        ["Il y a une coupure de courant", "coupurecourant.jpg"],
        ["Il y a une trahison", "trahison.png"],
        ["Quelqu'un frappe à la porte", "porte.png"],
        ["Le temps s'arrête", "temps.jpg"],
        ["Ce n'était qu'un rêve", "reve.png"],
        ["Anniversaire surprise", "anniversaire.png"],
        ["Se transforme en grenouille", "grenouille.png"],
        ["La pluie se met à tomber", "pluie.png"],
        ["Il y a un gros bruit", "bruit.png"]
    ]
};

const initialCardsArray = [];
for (let i = 0; i<numberOfInitialCards; i++){
    const type = initialTypes[i];
    const card = allCards[type][getRandomInt(allCards[type].length)];
    const title = card[0];
    const image = `images/${type}/${card[1]}`;
    initialCardsArray.push([type, title, image])
}
const peripetiesCardsArray = [];
for (let i = 0; i<numberOfPeripetiesCards; i++){
    const type = peripetiesTypes[i];
    const card = allCards[type][getRandomInt(allCards[type].length)];
    const title = card[0];
    const image = `images/${type}/${card[1]}`;
    peripetiesCardsArray.push([type, title, image])
}

let bigCards = ``;
for (let i = 0; i < numberOfInitialCards; i++) {
    bigCards += `<c-card class="big-card"
                    type="${initialCardsArray[i][0]}"
                    title="${initialCardsArray[i][1]}"
                    image=${initialCardsArray[i][2]}"
                    number=${300-i*300}
                    flipped="false"
                ></c-card>`;
}
bigCardsContainer.innerHTML = bigCards;

let initialCards = ``;
for (let i = 0; i < numberOfInitialCards; i++) {
    initialCards += `<c-card class="small-card"
                    type="${initialCardsArray[i][0]}"
                    title="${initialCardsArray[i][1]}"
                    image=${initialCardsArray[i][2]}"
                    flipped="false"
                ></c-card>`;
}
initialCardsContainer.innerHTML = initialCards;


let peripetiesCards = ``;
for (let i = 0; i < numberOfPeripetiesCards; i++) {
    peripetiesCards += `<c-card class="small-card"
                    type="${peripetiesCardsArray[i][0]}"
                    title="${peripetiesCardsArray[i][1]}"
                    image=${peripetiesCardsArray[i][2]}"
                    flipped="false"
                ></c-card>`;
}
peripetiesContainer.innerHTML = peripetiesCards;








/* Card */
class CCard extends HTMLElement {
    flip() {
        const inner = this.querySelectorAll('.flip-card-inner')[0];   
        const flipped = this.getAttribute("flipped");
        if (flipped === "false") {
            inner.style.transform = 'rotateY(180deg)';
            this.setAttribute("flipped", "true");
        } else {
            inner.style.transform = 'rotateY(0deg)';
            this.setAttribute("flipped", "false");
        }
    };
    translate(){
        const valeur = parseInt(this.getAttribute('number'));
        this.style.transition = 'all 0.3s ease'
        this.style.transform = `translate(${valeur}px)`;
    };
    connectedCallback() {
        const type = this.getAttribute("type");
        const title = this.getAttribute("title");
        const image = this.getAttribute("image");
        this.innerHTML = `
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <h3>${type}</h3>
                        <img src="${image}"/>
                        <h2>${title}</h2>
                    </div>
                    <div class="flip-card-back"></div>
                </div>
            </div>
            `
        ;
        
        this.addEventListener('click', () => {
            this.translate();
        });
        
    }
}
customElements.define("c-card", CCard);

/* Progress Bar */
class CProgressBar extends HTMLElement {
    start(interval, numberOfRepetitions){
        const LightLine = this.getElementsByClassName("light-line");
        LightLine[0].style.animation = "progress-animation "+interval+"s "+numberOfRepetitions+" linear forwards";        
    };
    connectedCallback() {
        this.innerHTML = `
            <div class="big-line">
                <div class="light-line"></div>
            </div>
        `
    }
}
customElements.define("c-progress-bar", CProgressBar);










/* Main */
function revealBigCards(){
    for (let i=0; i<numberOfPeripetiesCards+1; i++) {
        setTimeout(() => { updateBigCardsContainer(i)}, i*interval);
    }
}
function updateBigCardsContainer(loop){
    if (loop != 0){
        bigCardsContainerFlip();
        setTimeout(()=>{
            bigCardsContainer.innerHTML = 
                `<c-card class="big-card"
                    type="${peripetiesCardsArray[loop-1][0]}"
                    title="${peripetiesCardsArray[loop-1][1]}"
                    image=${peripetiesCardsArray[loop-1][2]}"
                    flipped="false"
                ></c-card>`;}, flipAnimationTime);

        setTimeout(()=>{
            bigCardsContainerFlip();
        }, 2*flipAnimationTime );
    } else {
        bigCardsContainerFlip();
        setTimeout(()=>{bigCardsContainerTranslate()}, interval);
    }
}
function bigCardsContainerFlip(){
    const cards = bigCardsContainer.querySelectorAll('c-card');
    cards.forEach(card => {
        card.flip();
      });
}

function bigCardsContainerTranslate(){
    const cards = bigCardsContainer.querySelectorAll('c-card');
    cards.forEach(card => {
        card.translate();
      });
}
function situationInitialeReveal() {
    const cards = initialCardsContainer.querySelectorAll('c-card');
    cards.forEach(card => {
        card.flip();
      });
}
function revealPeripeties() {
    const cards = peripetiesContainer.querySelectorAll('c-card');
    for (let i = 0; i<numberOfPeripetiesCards; i++) {
        setTimeout(() => { cards[i].flip(); 
            /*message.textContent = messages[i] || "Histoire en cours de concoction ...";*/
        }, (i+1)*interval + 2*flipAnimationTime);
    }
};
function endGame(){
    endButton.style.display = 'block';
    /*infoContainer.style.display = 'none';*/
    intervalProgressBar.style.visibility = 'hidden';

}
function startGame(){
    setTimeout(endGame, totalTime);
    playButton.style.display = 'none';
    intervalProgressBar.style.visibility = 'visible';
    homeScreen.style.display = "none";
    /*infoContainer.style.display = 'flex';*/
    intervalProgressBar.start(interval/1000, numberOfPeripetiesCards + 1);
    situationInitialeReveal();
    revealPeripeties();
    revealBigCards()
}



/*
const messages = [
    "Mais quelle histoire palpitante !",
    "Ça c'est du plot twist !",
    "Une histoire à dormir debout...",
    "Cette histoire n'a ni queue ni tête.",
    "Ce récit est merveilleux."
]
*/
