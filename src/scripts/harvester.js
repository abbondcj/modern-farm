import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";

let result = [];

export const harvestPlants = (plantsArray) => {
    for (const plantObj of plantsArray) {
        if (plantObj.type === "Asparagus") {
            for (let i=0; i<plantObj.output; i++) {
                result.push(createAsparagus());
            };
        } else if (plantObj.type === "Corn") {
            for (let i=0; i<(plantObj.output/2); i++) {
                result.push(createCorn());
            };
        } else if (plantObj.type === "Potato") {
            for (let i=0; i<plantObj.output; i++) {
                result.push(createPotato());
            };
        } else if (plantObj.type === "Soybean") {
            for (let i=0; i<plantObj.output; i++) {
                result.push(createSoybean());
            };
        } else if (plantObj.type === "Sunflower") {
            for (let i=0; i<plantObj.output; i++) {
                result.push(createSunflower());
            };
        } else {
            for (let i=0; i<plantObj.output; i++) {
                result.push(createWheat());
            };
        };
    };
};

export const returnResult = () => {
    return result;
};