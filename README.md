Photo Blog
===

## Consegna
**Milestone 1**

Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica: utilizzando soltanto HTML e CSS e riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)

**Milestone 2**

Utilizzando Postman o Thunder Client, testiamo una chiamata all’endpoint di JSON Placeholder:
https://jsonplaceholder.typicode.com/photos?_limit=6

Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.

**Milestone 3**

Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API di JSON Placeholder, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!

**Bonus**

rendi la pagina responsive, in modo che su mobile e tablet le foto si dispongano man mano una sotto l’altra ed il titolo abbia una dimensione adeguata

## Mio Approccio
**Milestone 1**

1. Nell'header html metto la background-img fornita con un h1 centrato.
1. Mi appogerò a bootstrap, di conseguenza nel main inserisco un container in cui metterò la mia card

**Milestone 2**

1. userò thunder client per studiare come si presentano i dati forniti.

**Milestone 3**

1. inserisco CDN di axios nell'html
1. con axios.get(endpoint) effettuo la chiamata AJAX all'endpoint
1. creo una funzione che mi generi una card a partire dai dati forniti dall'API
1. creo una funzione che stampi in pagina tutte le card generate

