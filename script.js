let hours = document.getElementById('hours');
let mins = document.getElementById('mins');
let secs = document.getElementById('secs');

setInterval(() => {
    let currentTime = new Date();
    hours.innerHTML = currentTime.getHours();
    mins.innerHTML = currentTime.getMinutes();
    secs.innerHTML = currentTime.getSeconds();
},1000)