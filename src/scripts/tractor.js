import { addPlant } from "./field.js";
import { createAsparagus } from "./seeds/asparagus.js"
import { createSoybean } from "./seeds/soybean.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"



export const plantSeeds = (thePlan) => {
    for (const plans of thePlan) {
        for (let i=0; i<plans.length; i++) {
            if (plans[i] === "Asparagus") {
                addPlant(createAsparagus());
            } else if (plans[i] === "Soybean") {
                addPlant(createSoybean());
            } else if (plans[i] === "Corn") {
                addPlant(createCorn());
            } else if (plans[i] === "Potato") {
                addPlant(createPotato());
            } else if (plans[i] === "Sunflower") {
                addPlant(createSunflower());
            } else {
                addPlant(createWheat());
            };
        };
    };
};