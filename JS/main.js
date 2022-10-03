
function showClock(){

function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
}

const d = new Date();
let seconds = addZero(d.getSeconds());
let minutes = addZero(d.getMinutes());
let hours = addZero(d.getHours());

    document.querySelector('.second').innerHTML = seconds;
    document.querySelector('.minute').innerHTML = minutes;
    document.querySelector('.hour').innerHTML = hours;
}
setInterval(showClock, 1000);


// function update() {

//     var d = new Date();
//     var h = d.getHours();
//     var m = d.getMinutes();
//     var s = d.getSeconds();
  
  
//   document.querySelector(".hour").innerHTML = h;
//   document.querySelector(".minute").innerHTML = m;
//   document.querySelector(".second").innerHTML = s;
  
//   }
  