Photo Blog
===

## Consegna Day 1
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

1. Userò thunder client per studiare come si presentano i dati forniti.

**Milestone 3**

1. Inserisco CDN di axios nell'html
1. Con axios.get(endpoint) effettuo la chiamata AJAX all'endpoint
1. Creo una funzione che mi generi una card a partire dai dati forniti dall'API
1. Creo una funzione che stampi in pagina tutte le card generate

## Consegna Day 2
**Milestone 1**

Facciamo in modo di creare un overlay che copra l’intera pagina e all’interno, centrata, disponiamo un’immagine qualunque ed un button di chiusura.

**Milestone 2**

Facciamo sparire l’overlay con l’aiuto di una classe CSS che imposti il `display: none` .
Dopodiché facciamo sì che cliccando una qualunque foto. L’overlay ricompaia.
Cliccando invece il button di chiusura, l’overlay scompare nuovamente.

**Milestone 3**

Inseriamo il pezzo di logica finale: quando una foto viene cliccata, dobbiamo fare in modo che sia proprio quella foto a essere mostrata all’interno dell’overlay.
Ci sono diversi modi di farlo, prova a sperimentare 

**Bonus**

Spostandosi col mouse sopra le foto, queste si zoommano, ruotano di 10 gradi e la loro ombra aumenta, il tutto in maniera fluida. Inoltre il mouse diventa un puntatore, per far capire all’utente che può cliccare

## Mio Approccio
**Milestone 1**

1. Inserisco l'overlay di base tramite un nuovo contenitore che prende tutta la pagina, centrate avrò prima un button e poi un immagine.
1. Per l'overlay il contenitore più grande lo posiziono con position relative mentre il button e l'immagine li posizionerò con position absolute.

**Milestone 2**

1. Con bootstrap inserisco la classe d-none all'overlay.
1. Su JS aggiungerò un event listener che aggiunge la classe d-none se viene cliccata qualche foto selezionandole con un id o una classe specifica
1. un secondo event listener lo userò invece per far si che al click del button l'overlay riprenda nuovamente la classe d-none.

**Milestone 3**
1. come prima idea penso di creare diverse classi per ciascuna immagine e tramite un template literals far si che quando si clicca un'immagine si riprende la stessa immagine nell'overlay.
