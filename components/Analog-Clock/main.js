const hour = document.querySelector('.arrows .hour');
const minute = document.querySelector('.arrows .minute');
const seconds = document.querySelector('.arrows .second');


function updateClock(){
    const date = new Date();
    const hourX = (date.getHours()/12) *360;
    const minX = (date.getMinutes()/60) * 360;
    // for every 1 minute  hour hand rotates .5 deg so, ... 
    const hourF = date.getMinutes() * .5;
    const secX = (date.getSeconds()/60)* 360;

    hour.style.transform = `rotate(${hourX+hourF}deg)`;
    minute.style.transform = `rotate(${minX}deg)`;
    seconds.style.transform = `rotate(${secX}deg)`;

}

setInterval(()=>{
    updateClock();
}, 1000);
