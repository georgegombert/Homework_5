let m = moment();
const dateDisplay = m.format("[Today is ]dddd [the ] Do [of] MMMM");
let currentTime = m.format("[The current time is] h[:]m[:]s[ ]a");
const hourContainerNode = $("#hourContainer")

//Initializing clock
setInterval(function(){
    m = moment();
    currentTime = m.format("h[:]mm[:]ss[ ]a");
    $("#dateHeading").text(currentTime);
},1000);

// Creating divs to hold calendar events
for(var i=0; i<24; i++){
    const hourDivNode = $("<div>");
    hourDivNode.attr({"class" : "hour-div", "data-hour" : i});
    let hourMark = m.set({'hour': i, 'minute': 0, 'second': 0});
    hourMark = hourMark.format('h[:]mm a');
    hourDivNode.text(hourMark);
    hourContainerNode.append(hourDivNode);
}