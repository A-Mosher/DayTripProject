"use strict";

//(5 points): As a developer, I want to make at least three commits with descriptive messages.
//(5 points): As a user, I want a destination to be randomly selected for my day trip.
let destination = ["Grand Rapids", "Muskegon", "Holland", "Ann Arbor", "Detroit"];

//(5 points): As a user, I want a restaurant to be randomly selected for my day trip.

let restaurantGrandRapids = ["Donkey Taqueria", "Hancock", "The Winchester", "Butcher's Union", "Stella's"];

//let restaurantMuskegon = ["794 Kitchen & Bar", "Hearthstone Bistro", "The Station Grill", "isabella's", "Lakeside Cafe"];

//let restaurantHolland = ["The Curragh Irish Pub", "Butch's Dry Dock", "Seventy-Six", "Boatwerks Waterfront Restaurant", "Fricano's Too"];

//let restaurantAnnArbor = ["Spencer", "Sava's", "Zingerman's Roadhouse", "Black Pearl", "Side Biscuit"];

//let RestaurantDetroit = ["Selden Standard", "Grey Ghost Detroit", "Marrow", "Midnight Temple", "The Whitney"];

//(5 points): As a user, I want a mode of transportation to be randomly selected for my day trip.

let transportation = ["Uber/Lyft", "Walking", "Taxi", "Bicycle", "your sober friend as a DD", "Scooter"];

//(5 points): As a user, I want a form of entertainment to be randomly selected for my day trip.

let entertainmentGrandRapids = ["Speciation Artisan Ales", "City Built Brewing Company", "Brewery Vivant", "The Mitten Brewing Company", "Arvon Brewing Company"];

//let entertainmentMuskegon = ["Rake Beer Project", "Pigeon Hill Brewing Co.", "Unruly Brewing Company", "18th Amendment Spirits Co.", "Lively Up Kombucha"];

//let entertainmentHolland = ["New Holland Brewing", "Our Brewing Company", "Big Lake Brewing", "Guardian Brewing Company", "Brewery 4 Two 4"];

//let entertainmentAnnArbor = ["HOMES Brewery", "Wolverine State Brewing Co.", "Blom Meadworks", "Jolly Pumpkin Cafe & Brewery", "Grizzly Peak Brewing Co."];

//let entertainmentDetroit = ["Batch Brewing Company", "Motor City Brewing Works", "Atwater Brewery & Tap House", "Eastern Market Brewing Co.", "Brew Detroit"];
//(15 points): As a user, I want to be able to randomly re-select a destination, restaurant, mode of transportation, and/or form of entertainment if I don’t like one or more of those things.

let tripPicks = ["", "", "", ""];

function randomlySelectStringFromTripCategory(tripCategory){
    let random = Math.floor(Math.random() * tripCategory.length);
    console.log(random, tripCategory[random]);
    return tripCategory[random];
}

let choiceOne = randomlySelectStringFromTripCategory(destination);
    tripPicks[0] = choiceOne;

    //choiceOne[0] = restaurantGrandRapids;
    //choiceOne[1] = restaurantMuskegon;
    //choiceOne[2] = restaurantHolland;
    //choiceOne[3] = restaurantAnnArbor;
    //choiceOne[4] = restauratnDetroit;  
 
let choiceTwo = randomlySelectStringFromTripCategory(restaurantGrandRapids);

// while (destination = false){
//     switch(destination) {
//         case [0]:
//             tripPicks[1] = choiceTwo;
//             break;
//         case [1]:
//             tripPicks[1] = choiceTwo;
//             break;
//         case [2]:
//             tripPicks[1] = choiceTwo;
//             break;
//         case [3]:
//             tripPicks[1] = choiceTwo;
//             break;
//         case [4]:
//             tripPicks[1] = choiceTwo;
//     }
// }
tripPicks[1] = choiceTwo;

let choiceThree = randomlySelectStringFromTripCategory(transportation);
tripPicks[2] = choiceThree;

let choiceFour = randomlySelectStringFromTripCategory(entertainmentGrandRapids);
tripPicks[3] = choiceFour; 

console.log(tripPicks);

let choice = false;
while (choice == false){
    let userInput = prompt("Enter 1 to reselect destination. Enter 2 to reselect restaurant. Enter 3 to reselect mode of transportation. Enter 4 to reselect entertainment. Enter 5 if you would like to book this trip.");
    switch(userInput) {
        case "1":
            tripPicks[0] = randomlySelectStringFromTripCategory(destination);
            break;
        case "2":
            tripPicks[1] = randomlySelectStringFromTripCategory(entertainment);
            break;
        case "3":
            tripPicks[2] = randomlySelectStringFromTripCategory(transportation);
            break;
        case "4":
            tripPicks[3] = randomlySelectStringFromTripCategory(entertainment);
            break;
        case "5":
            choice = true;
            console.log("Congratulations, Here is the trip you selected!");
            break;
        default:
            alert("Invalid Entry, Try again.");
    }
}

console.log("You will be going to " + tripPicks[0] + ", your mode of travel will be " + tripPicks[2] + ". " + "You will be dining at " + tripPicks[1] + " followed by entertainment at " + tripPicks[3] + "." );

// if (randomlySelectStringFromTripCategory(destination) = destination[0]){
// let userInputDestination = confirm("Is the Destination ok?");
//      userInputDestination === true;
//     tripPicks[0] = destination[0];
// }
// else if (userInputDestination === false){
//         randomlySelectStringFromTripCategory(destination) == destination[1];
//         userInputDestination;
//     }
// else if (userInputDestination === true)
//         tripPics[0] = destination[1];
//         if (userInputDestination === false)
//         userInputDestination;
                     


// let choiceTwo = randomlySelectStringFromTripCategory(restaurant);
// let userInputRestaurant = confirm("Does this Restaurant look ok?");

// let choiceThree = randomlySelectStringFromTripCategory(transportation);
// let userInputTransportation = confirm("Is this mode of Transportation ok?");


// let choiceFour = randomlySelectStringFromTripCategory(entertainmentGrandRapids);
// let userInputEntertainment = confirm("Do you want to go to this Brewery");

// //(10 points): As a user, I want to be able to confirm that my day trip is “complete” once I like all of the random selections.
// //(10 points): As a user, I want to display my completed trip in the console.
// //(5 points): As a developer, I want all of my functions to have a Single Responsibility. Remember, each function should do just one thing!

// randomlySelectStringFromTripCategory(destination);
//     tripPicks[0] = choiceOne;

    
// randomlySelectStringFromTripCategory(restaurantGrandRapids);
//     tripPicks[1] = choiceTwo;

// randomlySelectStringFromTripCategory(transportation);
//     tripPicks[2] = choiceThree;


// randomlySelectStringFromTripCategory(entertainmentGrandRapids);
//     tripPicks[3] = choiceFour;