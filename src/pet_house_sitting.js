const petContainer = document.getElementById("pet-sitters");

document.addEventListener("DOMContentLoaded", () => {
    fetchData();
});

function firstCharsToUpperCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

async function fetchData() {
    try {
        const response = await fetch("https://wewmzmizeoxntuunlbzb.supabase.co/rest/v1/worker_service?select=workers(name,image,phone_number,email),services(service_name)&service_id=eq.3&apikey=sb_publishable_e1tEPV0MAR3j4vE_OadWJA_DTk4qfE_");

        const data = await response.json();

        petContainer.innerHTML = data.map(item => {
            const worker = item.workers;

return `
<div class="card-wrapper">

    <div class="card">
        <img src="${worker.image}" alt="${worker.name}" />

        <h3>Namn:</h3>
        <p>${firstCharsToUpperCase(worker.name)}</p>

        <h3>Telefonnummer:</h3>
        <p>${worker.phone_number}</p>

        <h3>Email:</h3>
        <p>${worker.email}</p>
    </div>

    <div class="buttons">
        <button>Boka</button>
        <button>Kontakta</button>
    </div>

</div>
`

    }).join("");

    } catch (error) {
        console.log(error);
    }
}