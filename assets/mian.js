//Initializing moment.js
let m = moment();
const dateDisplay = m.format("[Today is ]dddd [the ] Do [of] MMMM");
let currentTime = m.format("[The current time is] h[:]m[:]s[ ]a");
const hourContainerNode = $("#hourContainer");
let hourDivNode = $("#hourDiv");
//Initializing moment.js

//creating array storage from user input in modal
let events = [];

//Initializing clock
setInterval(function(){
    m = moment();
    currentTime = m.format("h[:]mm[:]ss[ ]a");
    $("#dateHeading").text(currentTime);
},1000);


function printEvents(){
    for(event in events){
        hourDivNode.text(JSON.stringify(events[event]));
    }
}

$("#eventButton").click(function(){
    events.push({
        eventName : $("#eventName").val().trim(),
        startHour : $("#startHour").val(),
        startMinute : $("#startMinute").val(),
        endHour : $("#endHour").val(),
        endMinute : $("#endMinute").val(),
        eventDescription : $("#eventDescription").val().trim()
    })
    console.log(events);
    printEvents();
})




// Creating divs to hold calendar events used to generate html then commented out
// I left this in so you could see how I made the hour divs
// for(var i=0; i<24; i++){
//     const hourDivNode = $("<div>");
//     hourDivNode.attr({"class" : "hour-div", "data-hour" : i});
//     let hourMark = m.set({'hour': i, 'minute': 0, 'second': 0});
//     hourMark = hourMark.format('h[:]mm a');
//     hourDivNode.text(hourMark);
//     hourContainerNode.append(hourDivNode);
// }