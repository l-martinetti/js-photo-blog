/*
* L'API fornita restituisce alcuni valori di mio interesse, in particolare il title e l'url per andare a popolare la card con testo e immagine
*/
// CARDS
const limit = "6";
const endpoint = "https://jsonplaceholder.typicode.com/photos?_limit=";
const cardContainer = document.getElementById("card-container");

// OVERLAY 
const overlay = document.querySelector(".overlay");
const button = document.querySelector(".button");

// AJAX 
axios.get(endpoint + limit)
    .then(response => {       
        // Stampa cards
        response.data.forEach(post => newCard(post)) 
        // OVERLAY ON
        cardRead()
    })
    .catch(error =>{
        console.log("Errore: ", error);
    })
    
// OVERLAY OFF
button.addEventListener("click", overlayOff)


// Functions
function newCard (post){
    const {title, url} = post;
    cardContainer.innerHTML += 
    `<div class="col col-sm-12 col-md-5 col-lg-3 bg-white mycard">
        <img class="pin" src="assets_day1/img/pin.svg" alt="">
        <div class="img-container">
            <img class="card-img" src=${url} alt="">
        </div>
        <div>
            <p class="mb-4">${title}</p>
        </div>
    </div>`;
    
}

function overlayOn(){
    overlay.classList.remove("d-none")
    
};

function overlayOff(){
    overlay.classList.add("d-none")
};



function cardRead() {
    const cardImgs = document.querySelectorAll(".card-img");
    const overlayImg = document.querySelector(".overlay-img")
 
    cardImgs.forEach(img => {
        img.addEventListener("click", () => {
            overlayImg.src = img.src;
            overlayOn()
    });     
    })
}