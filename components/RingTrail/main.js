const Body = document.querySelector('body');

function createSplash(x, y) {
    const span = document.createElement('span');
    span.style.left = x + 'px';
    span.style.top = y + 'px';
    const size = Math.random() * 100;
    span.style.width = size + 'px';
    span.style.height = size + 'px';
    span.style.position = 'absolute';
    span.style.pointerEvents = 'none';
    Body.appendChild(span);

    setTimeout(() => {
        Body.removeChild(span);
    }, 2000);
}

// Mouse support
Body.addEventListener("mousemove", (e) => {
    createSplash(e.offsetX, e.offsetY);
});

// Touch support
Body.addEventListener("touchmove", (e) => {
    const touch = e.touches[0];
    createSplash(touch.clientX, touch.clientY);
});
