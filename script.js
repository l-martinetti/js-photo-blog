// CARDS
const endpoint = "https://api.sampleapis.com/recipes/recipes";
const cardContainer = document.getElementById("card-container");

// OVERLAY 
const overlay = document.getElementById("overlay");

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
    printOverlayCard(event)

});

// Event delegation per chiudere overlay
overlay.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-light")) {
        overlay.classList.add("d-none");
    }
});


// Functions
function newCard(post) {
    const { title, photoUrl, description } = post;
    cardContainer.innerHTML +=
        `<div class="card" style="width: 18rem;">
  <img src=${photoUrl} class="card-img-top mt-2" alt${title} style="width: 100%; max-height: 200px; object-fit: cover;">
  <div class="card-body d-flex flex-column align-items-center justify-content-between">
    <div>
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${description}</p>
    </div>
    <button class="btn btn-primary mt-2">Scopri di pi&ugrave</button>
  </div>
</div>`;
}

function printOverlayCard(e) {
    const card = e.target.closest(".card");
    const title = card.querySelector(".card-title").textContent;
    const description = card.querySelector(".card-text").textContent;
    const img = card.querySelector(".card-img-top").src;

    overlay.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src=${img} class="card-img-top mt-2" alt${title} style="width: 100%; max-height: 200px; object-fit: cover;">
    <div class="card-body d-flex flex-column align-items-center">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${description}</p>
      <button type="button" class="btn btn-light mb-3 border">Chiudi</button>
    </div>
  </div>`;
}


