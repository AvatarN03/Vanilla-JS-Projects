const Body = document.querySelector('body');
const span = document.querySelector('span');

Body.addEventListener("mousemove", (e)=>{
    
    let x = e.offsetX
    let y = e.offsetY
    const span = document.createElement('span');
    span.style.left = x + 'px';
    span.style.top = y + 'px';
    const size = Math.random() * 100;
    span.style.width = size + 'px';
    span.style.height = size + 'px';
    Body.appendChild(span);
    setTimeout(()=>{
        Body.removeChild(span);

    },2000);

})