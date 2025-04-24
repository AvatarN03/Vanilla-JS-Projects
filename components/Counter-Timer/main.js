window.onload = () => {
    document.getElementById('cal').onclick = calculate;
    document.getElementById('reset').onclick = reset;
}

const cal = document.getElementById('cal')
function calculate() {
    const date = document.getElementById('date').value
    const time = document.getElementById('time').value
    const stop = document.getElementById('stop')
    
    if(date === '' || time === '') {
        alert('Please fill in the date and time fields')
        return
    }


    const endTime = new Date(date + ' ' + time)

    let lala;
    if(!lala){
        lala = setInterval(() => { calculatetime(endTime) }, 1000)
    }
    stop.addEventListener('click',()=>{
        if(stop.innerHTML === 'Stop'){
            stop.innerHTML = 'Start'
            clearInterval(lala)
            lala = null
        }
        else{
            stop.innerHTML = 'Stop'
            lala = setInterval(() => { calculatetime(endTime) }, 1000)
        }
    })
}

function calculatetime(endTime) {
    const current = new Date()
    console.log(current);
    console.log(endTime);

    const day = document.getElementById('day')
    const hours = document.getElementById('hours')
    const minutes = document.getElementById('minutes')
    const sec = document.getElementById('sec')


    if (endTime > current) {
        const timeLeft = (endTime - current) / 1000

        day.innerHTML = Math.floor(timeLeft / (24 * 60 * 60))
        hours.innerHTML = Math.floor((timeLeft / (60 * 60)) % 24)
        minutes.innerHTML = Math.floor((timeLeft / 60) % 60)
        sec.innerHTML = Math.floor(timeLeft % 60)
        cal.disabled = true
    }
    else {
        day.innerHTML = 0
        hours.innerHTML = 0
        minutes.innerHTML = 0
        sec.innerHTML = 0
    }
}

function reset() {
    // document.getElementById('day').innerHTML = 0
    // document.getElementById('hours').innerHTML = 0
    // document.getElementById('minutes').innerHTML = 0
    // document.getElementById('sec').innerHTML = 0
    window.location.reload()
    cal.disabled = false
}
