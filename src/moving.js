const moverContainer = document.getElementById("movers");

document.addEventListener("DOMContentLoaded", () => {
    fetchData();
});

function firstCharsToUpperCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

async function fetchData() {
    try {
        const response = await fetch("https://wewmzmizeoxntuunlbzb.supabase.co/rest/v1/worker_service?select=workers(name,image,phone_number,email),services(service_name)&service_id=eq.1&apikey=sb_publishable_e1tEPV0MAR3j4vE_OadWJA_DTk4qfE_");

        const data = await response.json();

        moverContainer.innerHTML = data.map(item => {
            const mover = item.workers;

            return `
    <div class="mover-wrapper">
    <div class="mover">
        
        <img class="moverPic" src="${mover.image}" alt="${mover.name}"/>
        <h3 class="subHeader">Namn:</h3>
        <p>${firstCharsToUpperCase(mover.name)}</p>
        <h3 class="subHeader">Telefonnummer:</h3>
        <p>${mover.phone_number}</p> 
        <h3 class="subHeader">Email:</h3>
        <p>${mover.email}</p>
       
    </div>
     
    <div class="buttons">

    <button class="boka">Boka</button>
    <button class="kontakta">Kontakta</button>

    </div>

    </div>
    `
        }).join("");

    } catch {
        alert("Det har ballat ur fullständigt, vänligen uppsök en bättre hemsida.")
    }
}