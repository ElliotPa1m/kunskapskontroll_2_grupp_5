const GROCERY_SERVICE_URL =
  "https://wewmzmizeoxntuunlbzb.supabase.co/rest/v1/worker_service?select=workers(name,image,phone_number,email),services(service_name)&service_id=eq.4&apikey=sb_publishable_e1tEPV0MAR3j4vE_OadWJA_DTk4qfE_";

export function firstCharsToUpperCase(str) {
  if (!str) {
    return "";
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function createGroceryWorkerCard(worker) {
  return `
    <div class="mover-wrapper">
      <div class="mover">
        <img class="moverPic" src="${worker.image}" alt="${worker.name}" />
        <h3 class="subHeader">Namn:</h3>
        <p>${firstCharsToUpperCase(worker.name)}</p>
        <h3 class="subHeader">Telefonnummer:</h3>
        <p>${worker.phone_number}</p>
        <h3 class="subHeader">Email:</h3>
        <p>${worker.email}</p>
      </div>

      <div class="buttons">
        <button class="boka">Boka</button>
        <button class="kontakta">Kontakta</button>
      </div>
    </div>
  `;
}

export function renderGroceryWorkers(container, workers) {
  if (!container) {
    throw new Error("Container saknas för grocery shoppers.");
  }

  container.innerHTML = workers
    .map((item) => createGroceryWorkerCard(item.workers))
    .join("");
}

export async function fetchGroceryWorkers() {
  const response = await fetch(GROCERY_SERVICE_URL);

  if (!response.ok) {
    throw new Error("Kunde inte hämta handlingstjänster.");
  }

  return await response.json();
}

export async function initGroceryShoppingPage() {
  const groceryContainer = document.getElementById("grocery-shoppers");

  if (!groceryContainer) {
    return;
  }

  try {
    const data = await fetchGroceryWorkers();
    renderGroceryWorkers(groceryContainer, data);
  } catch (error) {
    groceryContainer.innerHTML =
      "<p>Kunde inte ladda handlingstjänster just nu.</p>";

    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", initGroceryShoppingPage);