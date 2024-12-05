/*
* L'API fornita restituisce alcuni valori di mio interesse, in particolare il title e l'url per andare a popolare la card con testo e immagine
*/

const limit = "6";
const endpoint = "https://jsonplaceholder.typicode.com/photos?_limit=";
const cardContainer = document.getElementById("card-container");


axios.get(endpoint + limit)
    .then(response => {       
        for(let i = 0; i < response.data.length; i++){
            cardContainer.innerHTML = "";
            response.data.forEach(post => newCard(post))
        } 
    })
    .catch(error =>{
        console.log("Errore: ", error);
    })




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