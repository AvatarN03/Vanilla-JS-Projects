const month = document.getElementById("month-name");
const day = document.getElementById("day-name");
const date = document.getElementById("day-number");
const year = document.getElementById("year");

const Data = new Date();

// const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// const dayArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

month.innerHTML = Data.toLocaleDateString("en",{
    month:"long"
})
day.innerHTML = Data.toLocaleDateString("en",{
    weekday:"long"
})
date.innerHTML = Data.getDate();

year.innerHTML = Data.getFullYear();

