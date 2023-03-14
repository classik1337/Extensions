
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var arr = ['#0e4429','#006d32','#26a64','#39d353'] //color
var x = document.querySelectorAll('.ContributionCalendar-day'); //check all massive

var i = 0;
while (i < x.length) { // выводит 0, затем 1, затем 2
    var random = getRandomInt(4) //random color
    x[i].style.background = arr[random];
    i++;
    }