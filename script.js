$(document).ready(function() {
    //STEP 1 color code based on time USE moment .js
    var hour = moment().hours();
    (console.log(hour))

    var date = moment().format("dddd, MMMM Do YYYY");
// var currentTime = moment().format('H');
// console.log(currentTime);

//-------append date----------//
$("#currentDay").append(date);

    // write function that checks current time
    //and grey out hours that are passed
    //Step 3 click on Save button text from step 2 is saved in local storage and persists after i refresh
    //write a function to grab that text value and save it to local storage

      

    
    
  });

