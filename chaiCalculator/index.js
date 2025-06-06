let numberOfCups = 0;
var water = 200;
var milk = 50;
var teaLeaves = 1;
var sugar = 2;

function calculateChaiIngredients(numberOfCups) {
    console.log("Welcome to the Chai Calculator!");
    console.log("Please enter the number of numberOfCups:");
    numberOfCups = parseInt(prompt("Number of Cups: "), 10);
    if (isNaN(numberOfCups) || numberOfCups <= 0) {
        console.log("Invalid number of Cups. Please enter a positive integer.");
        return;
    } else {
        let totalWater = numberOfCups * water;
        let totalMilk = numberOfCups * milk;
        let totalTeaLeaves = numberOfCups * teaLeaves;
        let totalSugar = numberOfCups * sugar;
        console.log(`To make ${numberOfCups} cups of chai one needs: `);
        console.log(`${totalWater} ml of water`);
        console.log(`${totalMilk} ml of milk`);
        console.log(`${totalTeaLeaves} tsp of tea leaves`);
        console.log(`${totalSugar} tsp of sugar`);
        console.log("Enjoy your cups of Tea!");
    }
}
calculateChaiIngredients(numberOfCups);