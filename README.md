# Esercizio

Oggi proviamo a usare lo stato di React!

Dato un array di oggetti contenente i linguaggi del web e le loro descrizioni:

Crea una lista di bottoni, uno per  linguaggio.
Inserisci sotto una card che mostri il titolo e la descrizione del primo linguaggio nell’array.
Fare in modo che, cliccando uno dei bottoni, la card in basso visualizzi il linguaggio corrispondente e la relativa descrizione

Bonus

~~Se nessun linguaggio è selezionato, la card del dettaglio mostra “nessun linguaggio selezionato”~~
~~Dare un colore diverso al bottone per cui il linguaggio è attualmente selezionato.~~
~~Scomporre la card dei dettagli in un componente a parte che mantenga le sue funzionalità~~
~~Scomporre i buttons in componenti a parte che mantengono tutte le funzionaliltà~~

```
## Esercizi proposti per consolidare

### Esercizio 1 — Search & Filter: "Profile Finder"

Obiettivo: esercitare JSX, componenti, props, iterazioni e conditional rendering tramite un campo di ricerca controllato.

Istruzioni:

- Prepara un array di profili (ad es. `data/profiles.js`) con oggetti `{ id, name, role, bio }`.
- Implementa i componenti:
  - `App`: mantiene lo stato `search` (string) e `selectedProfile` (object o `null`).
  - `SearchBar`: input controllato che riceve `value` e `onChange` via props.
  - `ProfileList`: riceve `profiles` e `search`, filtra i risultati e li rende con `map`.
  - `ProfileCard`: componente presentazionale (dumb) che riceve `name`, `role`, `onSelect` e mostra un bottone "Mostra".
  - `ProfileDetail`: mostra i dettagli del profilo selezionato; se `null` mostra "Seleziona un profilo".

Requisiti minimi:

- Filtrare la lista in tempo reale mentre si digita nel campo di ricerca.
- Cliccando "Mostra" su una card si imposta `selectedProfile` e viene visualizzato il dettaglio.
- I componenti (tranne `App`) devono ricevere i dati tramite props.

Bonus:

- Usa la `children` prop per inserire contenuti personalizzati dentro `ProfileCard`.
- Evidenzia (highlight) la porzione di testo che corrisponde alla ricerca.

### Esercizio 2 — Mini Shop: "Cart & Quantity"

Obiettivo: praticare `useState`, input controllati, data binding e passaggio di funzioni via props costruendo un piccolo carrello.

Istruzioni:

- Prepara un array `products` con oggetti `{ id, name, price }`.
- Implementa i componenti:
  - `App`: mantiene lo stato `cart` (array di voci `{ id, name, price, qty }`).
  - `ProductList`: lista di prodotti.
  - `ProductItem`: mostra nome, prezzo, un input controllato `qty` e un bottone "Aggiungi"; riceve `onAdd(product, qty)` via props.
  - `Cart`: mostra gli elementi nel carrello, quantità e prezzo totale; permette rimuovere una voce.

Requisiti minimi:

- L'input `qty` in `ProductItem` è controllato localmente e passa il valore a `onAdd`.
- Aggiungere un prodotto inserisce o aggiorna la voce corrispondente in `cart` in modo immutabile.
- `Cart` si aggiorna immediatamente e mostra il totale; se vuoto mostra un messaggio di placeholder.

Bonus:

- Persistere il carrello su `localStorage` con `useEffect`.
- Aggiungere filtri/ordinamenti sui prodotti o la possibilità di modificare quantità direttamente dal `Cart`.

Formato di consegna suggerito:

- Crea i componenti in `src/components/` e mantieni `App.jsx` minimale.
- Aggiungi brevi commenti che spiegano quali props riceve ogni componente e quali concetti (JSX, Props, State, Data Binding) vengono esercitati.
```
