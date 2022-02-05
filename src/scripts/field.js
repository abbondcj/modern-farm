let fieldPlants = [];

export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
        for (let i=0; i<seed.length; i++) {
            fieldPlants.push(seed[i]);
        };
    } else {
        fieldPlants.push(seed)
    };
};

export const usePlants = () => {
    return fieldPlants;
};