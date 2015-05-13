var target_date = new Date("Aug 15, 2015").getTime();

var countdays = document.getElementById("countdays");
var counthours = document.getElementById("counthours");
var countminutes = document.getElementById("countminutes");
var countseconds = document.getElementById("countseconds"); 
setInterval(function () {
 
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    var days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    var hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    var minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
     
    countdays.innerHTML = days;
    counthours.innerHTML = hours;
    countminutes.innerHTML = minutes;
    countseconds.innerHTML = seconds;
 
}, 1000);