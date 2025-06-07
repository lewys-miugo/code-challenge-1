# 1 Chai Calculator

This JavaScript program helps you calculate the ingredients required to make a specified number of cups of chai (tea). Simply input the number of cups, and the calculator will tell you how much water, milk, tea leaves, and sugar you need.

## Features

- Prompts the user to enter the number of chai cups they want to make.
- Calculates and displays the required quantities of:
  - Water (in milliliters)
  - Milk (in milliliters)
  - Tea Leaves (in teaspoons)
  - Sugar (in teaspoons)
- Handles invalid inputs (non-numeric or non-positive values).
- Friendly and easy-to-read output.

## Ingredient Ratios Per Cup

- **Water**: 200 ml  
- **Milk**: 50 ml  
- **Tea Leaves**: 1 tsp  
- **Sugar**: 2 tsp

## How to Run

> This script uses `prompt()` which works in **web browsers** only. It won't run as-is in Node.js.

1. Open your browser’s developer console.
2. Copy and paste the code into the console.
3. Press Enter.
4. Enter the number of chai cups when prompted.
5. See the breakdown of required ingredients.

## Example Output

``` 
Welcome to the Chai Calculator!
Please enter the number of numberOfCups:
 To make 70 cups of chai one needs: 
 14000 ml of water
 3500 ml of milk
 70 tsp of tea leaves
 140 tsp of sugar
 Enjoy your cups of Tea!
 ```


# 2 Boda Boda Ride Fare Estimator

This JavaScript program helps you calculate the fare charged ona boda ride. Simply input the distance to travel in kms, and the calculator will tell you how much total fare you will pay.

## Features

- Prompts the user to enter the distance they want to travel.
- Calculates and displays the required fare and the distance.
- Handles invalid inputs (non-numeric or non-positive values).
- Friendly and easy-to-read output.

## Example Output
```
Welcome to Boda Fare Calculator!
Enter the distance in kilometers:

The total fare for 5 km is: ksh 
```

# 3 Mobile Money estimator

This is a Javascript program that helps one calculate the transation fee of sending money.

## Features
- Prompts uer to enter amount to send.
- Validates that the input is a number.
- If the fee is less than ksh 10 it sets it to ksh 10.
- If the fee is greater than ksh 100 it sets the fee to ksh 100.
- If the fee is between ksh 10 and ksh 100 the fee is now computed based on that.

## Example output

```
Welcome to the Mobile Money Transaction Fee Estimator!
Please enter the amount you want to send:
The estimated transaction fee for sending Ksh 3000 is: Ksh 45.00
The total amount to be debited from your account is: Ksh 3045.00
```