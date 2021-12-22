var currentDate = moment(). format("dddd, MMMM Do");
var currentDay = $("#currentDay");
var currentHour = moment().format("H");


currentDay.text = currentDate;

console.log(currentDay);

// need to get a block hour to compare to current hour
// if current hour .present
// if before current hour .past
// if after current hour .future
// need tasks entered and time put in an object taskToDo
// need taskToDo pushed to an empty array toToDoArray
// need the array sent to local storage

// tasks may need to be appended to parent - parent will need an id
