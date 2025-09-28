const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const tz = document.querySelector('#tz');
const hr24 = document.querySelector('.ampm');

function updateTime() {
    let myDate = new Date()
    
    let currentHour = myDate.getHours();
    let hr = currentHour % 12 || 12;
    let ampm = (hr >= 12) ? "PM" : "AM"
    hr24.innerHTML = ampm;
    
    hours.innerHTML = String(myDate.getHours()).padStart(2, "0");
    minutes.innerHTML = String(myDate.getMinutes()).padStart(2, "0");
    seconds.innerHTML = String(myDate.getSeconds()).padStart(2, "0");

    tz.innerHTML = `Maharashtra, pune`
}

setInterval(updateTime, 1000)