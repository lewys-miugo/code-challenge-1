var baseFare = 50;
var chargePerKm = 15;
function calculateBodaFare(distance) {
    console.log("Welcome to Boda Fare Calculator!");
    console.log("Enter the distance in kilometers:");

    distance = parseInt(prompt("Distance (in km): "), 10);

    if (distance <= 0 || isNaN(distance)) {
        return "Distance must be greater than zero.";
    } else {
        let totalFare = baseFare + (distance * 15);
        console.log("The total fare for " + distance + " km is: Ksh " + totalFare);
    }
    
}
calculateBodaFare(0);