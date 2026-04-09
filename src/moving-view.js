

function firstCharsToUpperCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function createMoverCard(mover) {

    return `
<div class="mover-wrapper">
    <div class="mover">
        
        <img class="moverPic" src="${mover.image}" alt="${mover.name}"/>
        <h2 class="subHeader">Namn:</h2>
        <p>${firstCharsToUpperCase(mover.name)}</p>
        <h3 class="subHeader">Telefonnummer:</h3>
        <p>${mover.phone_number}</p> 
        <h3 class="subHeader">Email:</h3>
        <p>${mover.email}</p>
       
    </div>
     
    <div class="buttons">

    <button class="mover_button">Boka</button>
    <button class="mover_button">Kontakta</button>

    </div>

    </div>
    `
};