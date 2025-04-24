window.onload = ()=>{
    alert('Hello');

    function clock(){
        
    let date =  new Date()

    

    console.log(date);
    console.log(date.getDay());

    let hr = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    let mth = date.getMonth() 
    let day = date.getDay()
    console.log(day);
    
    let dt = date.getDate()

    hr  = hr<10? '0'+hr : hr;
    min  = min<10? '0'+min : min;
    sec  = sec<10? '0'+sec : sec;

    const m = ['JAN', 'FEB', 'MAR', 'APR','MAY', 'JUN' , 'JUL', 'AUG' , 'SEP', 'OCT', 'NOV', 'DEC']
    const d = ['SUN', 'MON', 'TUE', 'WED', 'THU','FRI', 'SAT' ]
    mth = m[mth]
    day = d[day]



    document.querySelector('#hours').innerHTML = hr
    document.querySelector('#min').innerHTML = min
    document.querySelector('#sec').innerHTML = sec

    document.querySelector('#month').innerHTML = mth
    document.querySelector('#day').innerHTML = day
    document.querySelector('#date').innerHTML = dt




    setTimeout(clock, 1000);
    }
    clock();



}