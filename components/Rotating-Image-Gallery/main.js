const imageContainer = document.querySelector(".image-container");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let x = 0;
let timer;

next.addEventListener("click", () =>{
    x = x+45;
    clearInterval(timer);
    updateGallery();
    
});

prev.addEventListener("click", (e) =>{
x = x-45;
clearInterval(timer);
updateGallery();

});

function updateGallery(){
    imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout(()=>{
        x = x-45;
        updateGallery();
    },3000)
}
updateGallery();