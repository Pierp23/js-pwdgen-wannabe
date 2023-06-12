// PROMPT
const firstName = prompt('Inserisci il tuo nome');

const surname = prompt('Inserisci il tuo cognome');

const color = prompt('Inserisci il tuo colore preferito');

// DATI IN CONSOLE
console.log('firstName', firstName, typeof firstName);
console.log('surname', surname, typeof surname);
console.log('color', color, typeof color);

// DATI IN HTML
document.getElementById('risults').innerHTML = firstName + surname + color + '101';