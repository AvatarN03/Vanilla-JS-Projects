const bgImg = document.getElementById('bg-image');

window.addEventListener('scroll', ()=>{
    
    if(window.scrollY < 100){
        bgImg.style.opacity = 1;
    }
    else if(window.scrollY >= 100)
    {
        bgImg.style.opacity = 1 - (window.scrollY/window.innerHeight);
    }else{
        bgImg.style.opacity = (window.scrollY/window.innerHeight);
    }
})