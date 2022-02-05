import { returnResult } from "./harvester.js";

let currentCatalog = returnResult();
let mainContainer = document.querySelector(".container");

export const showCatalog = () => {
    let htmlString = `<div id="catalog">`;
    for (const catalogObj of currentCatalog) {
        if (Array.isArray(catalogObj)) {
            for (let i=0; i<catalogObj.length; i++) {
                htmlString+=`<div id="itemForSale">
                    <h1>Seed Type: ${catalogObj[i].type}</h1>
                </div>`
            };
        } else {
            htmlString+=`<div id="itemForSale">
            <h1>Seed Type: ${catalogObj.type}</h1>
        </div>`
        };
    };
    htmlString += `</div>`

    mainContainer.innerHTML += htmlString;
};