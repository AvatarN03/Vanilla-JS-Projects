const Body = document.querySelector('body');
const Content = document.querySelector(".container")

const carrers = [
    "A Youtuber",
    "A Developer",
    "A Freelancer",
    "A Spiritual",
    "An Instructor"
]

let carrerIndex = 0;
let charac = 0;

setInterval(()=>{
    charac = 0;
    carrerIndex = (carrerIndex === carrers.length-1)? 0 : carrerIndex + 1;
},5000)

function updateText(){
    Content.innerHTML = `<h1>i am ${carrers[carrerIndex].slice(0, charac)}<span></span></h1>`;
    charac++;
    setTimeout(updateText, 200);
}
updateText();
