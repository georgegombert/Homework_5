let m = moment();
const dateDisplay = m.format("[Today is ]dddd [the ] Do [of] MMMM");
let currentTime = m.format("[The current time is] h[:]m[:]s[ ]a");

console.log(dateDisplay , currentTime);

let updateTime = setInterval(function(){
    m = moment();
    currentTime = m.format("[The current time is] h[:]mm[:]ss[ ]a");
    console.log(currentTime);
    $("#dateHeading").text(currentTime);
},1000);

updateTime();