// For general foods
function calculateNegativePoints(energy, sugar, sat_fat, sodium) {
    let negativePoints = 0;

    if (energy <= 335) {
        negativePoints += 0;
    } else if (energy <= 670) {
        negativePoints += 1;
    } else if (energy <= 1005) {
        negativePoints += 2;
    } else if (energy <= 1340) {
        negativePoints += 3;
    } else if (energy <= 1675) {
        negativePoints += 4;
    } else if (energy <= 2010) {
        negativePoints += 5;
    } else if (energy <= 2345) {
        negativePoints += 6;
    } else if (energy <= 2680) {
        negativePoints += 7;
    } else if (energy <= 3015) {
        negativePoints += 8;
    } else if (energy <= 3350) {
        negativePoints += 9;
    } else {
        negativePoints += 10;
    }

    // Sugar points (g per 100g)
    if (sugar <= 4.5) {
        negativePoints += 0;
    } else if (sugar <= 9) {
        negativePoints += 1;
    } else if (sugar <= 13.5) {
        negativePoints += 2;
    } else if (sugar <= 18) {
        negativePoints += 3;
    } else if (sugar <= 22.5) {
        negativePoints += 4;
    } else if (sugar <= 27) {
        negativePoints += 5;
    } else if (sugar <= 31) {
        negativePoints += 6;
    } else if (sugar <= 36) {
        negativePoints += 7;
    } else if (sugar <= 40) {
        negativePoints += 8;
    } else if (sugar <= 45) {
        negativePoints += 9;
    } else {
        negativePoints += 10;
    }

    // Saturated Fat points (g per 100g)
    if (sat_fat <= 1) {
        negativePoints += 0;
    } else if (sat_fat <= 2) {
        negativePoints += 1;
    } else if (sat_fat <= 3) {
        negativePoints += 2;
    } else if (sat_fat <= 4) {
        negativePoints += 3;
    } else if (sat_fat <= 5) {
        negativePoints += 4;
    } else if (sat_fat <= 6) {
        negativePoints += 5;
    } else if (sat_fat <= 7) {
        negativePoints += 6;
    } else if (sat_fat <= 8) {
        negativePoints += 7;
    } else if (sat_fat <= 9) {
        negativePoints += 8;
    } else if (sat_fat <= 10) {
        negativePoints += 9;
    } else {
        negativePoints += 10;
    }

    // Sodium points (mg per 100g)
    if (sodium <= 90) {
        negativePoints += 0;
    } else if (sodium <= 180) {
        negativePoints += 1;
    } else if (sodium <= 270) {
        negativePoints += 2;
    } else if (sodium <= 360) {
        negativePoints += 3;
    } else if (sodium <= 450) {
        negativePoints += 4;
    } else if (sodium <= 540) {
        negativePoints += 5;
    } else if (sodium <= 630) {
        negativePoints += 6;
    } else if (sodium <= 720) {
        negativePoints += 7;
    } else if (sodium <= 810) {
        negativePoints += 8;
    } else if (sodium <= 900) {
        negativePoints += 9;
    } else {
        negativePoints += 10;
    }

    return negativePoints;
}

//For general foods
function calculatePositivePoints(fruits, fiber, protein) {
    let positivePoints = 0;

    // Fruits and Vegetables points (% per 100g)
    if (fruits >= 80) {
        positivePoints += 5;
    } else if (fruits >= 60) {
        positivePoints += 2;
    } else if (fruits >= 40) {
        positivePoints += 1;
    } else {
        positivePoints += 0;
    }

    // Fiber points (g per 100g)
    if (fiber >= 4.7) {
        positivePoints += 5;
    } else if (fiber >= 3.5) {
        positivePoints += 4;
    } else if (fiber >= 2.8) {
        positivePoints += 3;
    } else if (fiber >= 1.9) {
        positivePoints += 2;
    } else if (fiber >= 0.9) {
        positivePoints += 1;
    } else {
        positivePoints += 0;
    }

    // Protein points (g per 100g)
    if (protein >= 8) {
        positivePoints += 5;
    } else if (protein >= 6.4) {
        positivePoints += 4;
    } else if (protein >= 4.8) {
        positivePoints += 3;
    } else if (protein >= 3.2) {
        positivePoints += 2;
    } else if (protein >= 1.6) {
        positivePoints += 1;
    } else {
        positivePoints += 0;
    }

    return positivePoints;
}

function calculateNutriScore(energy, sugar, sat_fat, sodium, fruits, fiber, protein) {
    const N = calculateNegativePoints(energy, sugar, sat_fat, sodium);
    const P = calculatePositivePoints(fruits, fiber, protein);
    const nutriScore = N - P;

    if (nutriScore <= 0) {
        return "A";
    } else if (nutriScore <= 2) {
        return "B";
    } else if (nutriScore <= 10) {
        return "C";
    } else if (nutriScore <= 18) {
        return "D";
    } else {
        return "E";
    }
}

export {calculateNegativePoints,calculatePositivePoints,calculateNutriScore}

