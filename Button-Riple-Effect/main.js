const btn  = document.getElementById("btn");

btn.addEventListener("mouseover", (e)=>{
    // e.pageY - btn.offsetTop
    const x  = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;

    btn.style.setProperty("--xPos", x+"px");
    btn.style.setProperty("--yPos", y+"px");
})