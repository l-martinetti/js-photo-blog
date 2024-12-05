/*
* L'API fornita restituisce alcuni valori di mio interesse, in particolare il title e l'url per andare a popolare la card con testo e immagine
*/

const endpoint = "https://jsonplaceholder.typicode.com/photos?_limit=6";
const cardContainer = document.getElementById("card-container");


axios.get(endpoint)
    .then(response => {       
        for(let i = 0; i < response.data.length; i++){
            cardContainer.innerHTML = "";
            response.data.forEach(post => newCard(post))
        } 
    })






function newCard (post){
    const {title, thumbnailUrl} = post;
    cardContainer.innerHTML += 
    `<div class="col col-2 bg-white">
                    <img class="pin" src="assets_day1/img/pin.svg" alt="">
                    <div>
                        <img class="card-img" src=${thumbnailUrl} alt="">
                    </div>
                    <div>
                        <p>${title}</p>
                    </div>
                </div>`;
    
}