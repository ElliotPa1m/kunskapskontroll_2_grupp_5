

import { createMoverCard } from "./moving-view.js"
import { getMovers } from "./moving-model.js"

document.addEventListener("DOMContentLoaded", initLoad)  

async function initLoad() {

    const moverContainer = document.getElementById("movers");

    try {
        const data = await getMovers();

        moverContainer.innerHTML = data.map(item => createMoverCard(item.workers)).join("");

    }

    catch (error) {

        moverContainer.innerHTML = "Det har ballat ur fullständigt, vänligen uppsök en bättre hemsida."

    };
};