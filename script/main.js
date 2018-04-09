document.addEventListener("DOMContentLoaded", main());

function main () {
    setInterval(setDate, 1000);
};

function setDate () {
    var date = new Date();
    var secondHand = document.querySelector(".second-hand");
    var hourHand = document.querySelector(".hour-hand");
    var minuteHand = document.querySelector(".min-hand");
    var degreeSecond = (date.getSeconds()/60) * 360 + 90;
    var degreeMinutes = (date.getMinutes()/60) * 360 + 90;
    var degreeHours = (date.getHours()/12) * 360 + 90 + Math.floor((degreeMinutes-90)/12);
    console.log(degreeSecond)
    console.log(Math.floor((degreeMinutes-90)/12))
    if (degreeSecond >= 420 && degreeSecond <= 100) {
        secondHand.style.transition = "none";
    } 
    secondHand.style.transform = `rotate(${degreeSecond}deg)`;
    minuteHand.style.transform = `rotate(${degreeMinutes}deg)`;
    hourHand.style.transform = `rotate(${degreeHours}deg)`;
}