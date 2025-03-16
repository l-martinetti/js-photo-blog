// CARDS
const endpoint = "https://api.sampleapis.com/recipes/recipes";
const cardContainer = document.getElementById("card-container");

// OVERLAY 
const overlay = document.getElementById("overlay");
const closeButton = overlay.querySelector("button");

// AJAX 
axios.get(endpoint)
    .then(res => {
        // Stamp cards
        res.data.forEach(post => post.id < 6 ? newCard(post) : null);
    })
    .catch(error => {
        console.log("Errore: ", error);
    })

// Event Listeners

cardContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        overlay.classList.remove("d-none");
    }
});

// Chiudi l'overlay al click del bottone "Chiudi"
closeButton.addEventListener("click", () => {
    overlay.classList.add("d-none");
});


// Functions
function newCard(post) {
    const { title, photoUrl } = post;
    cardContainer.innerHTML +=
        `<div class="card" style="width: 18rem;">
  <img src=${photoUrl} class="card-img-top" alt${title}>
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button class="btn btn-primary">Go somewhere</button>
  </div>
</div>`;
}

