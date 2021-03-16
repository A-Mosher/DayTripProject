"use strict";

//(5 points): As a developer, I want to make at least three commits with descriptive messages.
//(5 points): As a user, I want a destination to be randomly selected for my day trip.
let destination = ["Grand Rapids", "Muskegon", "Holland", "Ann Arbor", "Detroit"];

//(5 points): As a user, I want a restaurant to be randomly selected for my day trip.

let restaurantGrandRapids = ["Donkey Taqueria", "Hancock", "The Winchester", "Butcher's Union", "Stella's"];
let restaurantMuskegon = ["794 Kitchen & Bar", "Hearth"];
let restaurantHolland = ["The Curragh Irish Pub"];
let restaurantAnnArbor = ["Spencer"];
let RestaurantDetroit = ["Selden Standard"];

//(5 points): As a user, I want a mode of transportation to be randomly selected for my day trip.

let transportation = ["Uber", "Lyft", "Taxi", "Bicycle", "Your sober friend as a DD", "Scooter"];

//(5 points): As a user, I want a form of entertainment to be randomly selected for my day trip.

let entertainmentGrandRapids = ["Speciation Artisan Ales", "City Built Brewing Company", "Brewery Vivant", "Grand Rapids Brewing Company", "Arvon Brewing Company"];
let entertainmentMuskegon = ["Rake Beer Project", "Pigeon Hill"];
let entertainmentHolland = ["New Holland Brewind", "Our Brewing Company" ];
let entertainmentAnnArbor = ["HOMES", ""];
let entertainmentDetroit = ["Batch Brewing Company", ""];
//(15 points): As a user, I want to be able to randomly re-select a destination, restaurant, mode of transportation, and/or form of entertainment if I don’t like one or more of those things.
let categorySelectorArray = ["", "", "", ""]

function randomlySelectStringFromTripCategory(tripCategory){
    let random = Math.floor(Math.random() * tripCategory.length);
    console.log(random, tripCategory[random]);
    return tripCategory[random];
} 

let choice = randomlySelectStringFromTripCategory(destination);

//(10 points): As a user, I want to be able to confirm that my day trip is “complete” once I like all of the random selections.
//(10 points): As a user, I want to display my completed trip in the console.
//(5 points): As a developer, I want all of my functions to have a Single Responsibility. Remember, each function should do just one thing!

randomlySelectStringFromTripCategory(destination);
    categorySelectorArray.push(choice == 0);

    
randomlySelectStringFromTripCategory(restaurantGrandRapids);
    console.log(choice);

randomlySelectStringFromTripCategory(transportation);
    console.log(choice);


randomlySelectStringFromTripCategory(entertainmentGrandRapids);
    console.log(choice);