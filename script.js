const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() {
  const currentTime = new Date()

  var seconds = currentTime.getSeconds()
  var secondDeg = (seconds / 60) * 360 + 90
  secondHand.style.transform = `rotate(${secondDeg}deg)`

  var mins = currentTime.getMinutes()
  var minsDeg = (mins / 60) * 360 + 90
  minHand.style.transform = `rotate(${minsDeg}deg)`

  var hours = currentTime.getHours()
  var hoursDeg = (hours / 12) * 360 + 90
  hourHand.style.transform = `rotate(${hoursDeg}deg)`

  if (seconds == 0) {
    secondHand.style.transitionDuration = '0s'
    minHand.style.transitionDuration = '0s'
    hourHand.style.transitionDuration = '0s'
  } else {
    secondHand.style.transitionDuration = '0.05s'
    minHand.style.transitionDuration = '0.05s'
    hourHand.style.transitionDuration = '0.05s'
  }

  requestAnimationFrame(setDate)
}

setDate()

window.addEventListener("load", () => {
  clock();
  function clock() {
    const today = new Date();

    const day = today.getDate();    
    const month = (today.getMonth() + 1);
    const year = today.getFullYear();

    const days = day < 10 ? "0" + day : day;
    const months = month < 10 ? "0" + month : month;

    //get current date and time
    const dateDay = days
    const dateMonth = months
    const dateYear = year

    //print current date and time to the DOM
    document.getElementById("day").innerHTML = dateDay;
    setTimeout(clock, 10000);

    document.getElementById("month").innerHTML =  dateMonth;
    setTimeout(clock, 10000);

    document.getElementById("year").innerHTML = dateYear;
    setTimeout(clock, 10000);

  }
});
