$(document).ready(function() {
    //STEP 1 color code based on time USE moment .js
    var hour = moment().hours();
    (console.log(hour))

    var date = moment().format("dddd, MMMM Do YYYY");

$("#currentDay").append(date);

$("currentDay").each(function () {
    var hour = parseInt($(this).attr("hour"));
    if (hour < now) {
        $(this).addClass("future");
    }


    if (hour > now) {
        $(this).addClass("past")
    }

    if (hour === now) {
        $(this).addClass("present")
    }



})
 
    
  });

