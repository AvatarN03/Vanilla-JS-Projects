const kits = ['crash1', 'snare1', 'tom1', 'kick1']
const Container = document.querySelector('.container');


kits.forEach(kit=>{
    const kitElement = document.createElement('button');
    kitElement.classList.add('btn');
    kitElement.innerText = kit;


    Container.appendChild(kitElement);

    const audioEle = document.createElement('audio');
    audioEle.src = `assets/${kit}.wav`;

    Container.appendChild(audioEle);

    kitElement.addEventListener('click', ()=>{
        audioEle.play();
    })

    window.addEventListener('keydown', (e)=>{
        if(e.key === kit.slice(0,1)){
            console.log(e.key);
            
            audioEle.play();
            kitElement.style.transform = 'scale(0.9)';
            setTimeout(()=>{
                kitElement.style.transform = 'scale(1)'
            }, 50)
        }
    })
 });
