console.log("Welcome to the main module");

import { createPlan } from "./plan.js";
import { usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";
import { returnResult } from "./harvester.js";
import { showCatalog } from "./catalog.js";

const yearlyPlan = createPlan();
let currentPlants = usePlants();
let currentHarvest = returnResult();

plantSeeds(yearlyPlan);

console.log(currentPlants);

harvestPlants(currentPlants);

console.log(currentHarvest);

showCatalog();

