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
        res.data.forEach(post => post.id <= 8 ? newCard(post) : null);
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
    const { title, photoUrl, description } = post;
    cardContainer.innerHTML +=
        `<div class="card" style="width: 18rem;">
  <img src=${photoUrl} class="card-img-top mt-2" alt${title} style="width: 100%; max-height: 200px; object-fit: cover;">
  <div class="card-body d-flex flex-column align-items-center">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${description}</p>
    <button class="btn btn-primary mt-2">Scopri di pi&ugrave</button>
  </div>
</div>`;
}

