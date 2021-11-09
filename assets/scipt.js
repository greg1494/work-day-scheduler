// Show the current date for today 
var todayDate = moment().format("dddd, MMM Do YYYY");
$("#currentDay").html(todayDate);

$(document).ready(function () {
    // insert click listener for saveBtn
    $(".savBtn").on("click", function () {
        // show the closests values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // use localStorage to save the text 
        localStorage.setItem(time, text);
    });

    
})