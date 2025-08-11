let hr = document.getElementById('hr');
let mn = document.getElementById('mn')
let sc = document.getElementById('sc');

function displayTime() {
    let day = new Date();

    let hh = day.getHours();
    let mm = day.getMinutes();
    let ss = day.getSeconds();

    let hou = hh*30 + mm/2;
    let mi = mm * 6;
    let se = ss * 6;

    hr.style.transform = `rotate(${hou}deg)`;
    mn.style.transform = `rotate(${mi}deg)`;
    sc.style.transform = `rotate(${se}deg)`;

    // Digital Clock
    let hour = document.getElementById('hour');
    let min = document.getElementById('minutes');
    let sec = document.getElementById('second');
    let ampm = document.getElementById('ampm');

    // let date = new Date();
    let Dhh = new Date().getHours();
    let Dmm = new Date().getMinutes();
    let Dss = new Date().getSeconds();

    // condition to change AM to PM
    let am = Dhh >= 12 ? "PM" : "AM";

    // convert 24hr clock to 12hr clock
    if(Dhh > 12){
        Dhh = Dhh - 12;
    }

    // add zero before single digit number
    Dhh = (Dhh < 10) ? "0" + Dhh : Dhh;
    Dmm = (Dmm < 10) ? "0" + Dmm : Dmm;
    Dss = (Dss < 10) ? "0" + Dss : Dss;

    hour.innerHTML = Dhh;
    min.innerHTML = Dmm;
    sec.innerHTML = Dss;
    ampm.innerHTML = am;
}
setInterval(displayTime, 1000);