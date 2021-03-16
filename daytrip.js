"use strict";

//(5 points): As a developer, I want to make at least three commits with descriptive messages.
//(5 points): As a user, I want a destination to be randomly selected for my day trip.
let destination = ["Grand Rapids", "Muskegon", "Holland", "Ann Arbor", "Detroit"];

//(5 points): As a user, I want a restaurant to be randomly selected for my day trip.

let restaurant = ["Donkey Taqueria", "794 Kitchen & Bar", "The Curragh Irish Pub", "Spencer", "Selden Standard"];

//(5 points): As a user, I want a mode of transportation to be randomly selected for my day trip.

let transportation = ["Uber", "Lyft", "Taxi", "Bicycle", "Your sober friend as a DD", "Scooter"];

//(5 points): As a user, I want a form of entertainment to be randomly selected for my day trip.

let entertainment = ["Speciation Artisan Ales", "Rake Beer Project", "New Holland Brewing", "HOMES", "Batch Brewing Company"];

//(15 points): As a user, I want to be able to randomly re-select a destination, restaurant, mode of transportation, and/or form of entertainment if I don’t like one or more of those things.

function randomlySelectStringFromTripCategory(tripCategory){
    let categorySelectorArray = [];
    let random = Math.floor(Math.random() * tripCategory.length);
    console.log(random, tripCategory[random]);
} 

//(10 points): As a user, I want to be able to confirm that my day trip is “complete” once I like all of the random selections.
//(10 points): As a user, I want to display my completed trip in the console.
//(5 points): As a developer, I want all of my functions to have a Single Responsibility. Remember, each function should do just one thing!

randomlySelectStringFromTripCategory(destination);
    categorySelectorArray.push(random);
