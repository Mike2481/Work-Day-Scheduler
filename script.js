var currentDate = moment(). format("dddd, MMMM Do");
var currentHour = moment().hour();


$("#currentDay").text(currentDate);
console.log(currentHour)

$(".saveBtn").on("click", function () {

    // key -> .parent(); parent is the time-block id
    var time = $(this).parent().attr("id");
    // value -> .siblings(".description")
    var text = $(this).siblings(".description").val();

        //set local storage by declaring key and value variables
    localStorage.setItem(time, text);

})


//getItem

$("row9 .description").val(localStorage.getItem("row9"));
$("row10 .description").val(localStorage.getItem("row10"));
$("row11 .description").val(localStorage.getItem("row11"));
$("row12 .description").val(localStorage.getItem("row12"));
$("row13 .description").val(localStorage.getItem("row13"));
$("row14 .description").val(localStorage.getItem("row14"));
$("row15 .description").val(localStorage.getItem("row15"));
$("row16 .description").val(localStorage.getItem("row16"));
$("row17 .description").val(localStorage.getItem("row17"));

$(".time-block").each(function () {
    var rowHour = parseInt($(this).attr("id").split("hour")[1]);
    if (rowHour < currentHour) {
        $(this).addClass("past")
    }
    else if (rowHour == currentHour) {
        $(this).addClass("present")
    }
    else {
        $(this).addClass("future")
    }

})





console.log(currentDate);

// need to get a block hour to compare to current hour
// if current hour .present
// if before current hour .past
// if after current hour .future
// need tasks entered and time put in an object taskToDo
// need taskToDo pushed to an empty array toToDoArray
// need the array sent to local storage

// tasks may need to be appended to parent - parent will need an id
