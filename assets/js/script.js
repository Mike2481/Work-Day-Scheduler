var currentDate = moment(). format("dddd, MMMM Do");
var currentHour = moment().hour();


$("#currentDay").text(currentDate);
console.log(currentHour)

var rowHour = parseInt($(this).attr('id').split('-')[1])
//set local storage by declaring key and value variables
// key -> .parent();
// value -> .siblings(".description")

//getItem

$("row-9 .description").val(localStorage.getItem("row-9"));




console.log(currentDay);

// need to get a block hour to compare to current hour
// if current hour .present
// if before current hour .past
// if after current hour .future
// need tasks entered and time put in an object taskToDo
// need taskToDo pushed to an empty array toToDoArray
// need the array sent to local storage

// tasks may need to be appended to parent - parent will need an id
