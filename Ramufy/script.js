console.log("Welcome to Ramufy");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3')
let masterPlay = document.getElementById('masterPlay');
let myprogressbar  = document.getElementById('myprogressbar');
let gif  = document.getElementById('gif');
let mastersonginfo  = document.getElementById('mastersonginfo');
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    {songName: "Aigiri ", filePath:"songs/1.mp3", coverPath:"Goddes.jpg"  },

    {songName: "shiva ", filePath:"songs/2.mp3", coverPath:"Shiva-1.jpg"  },

    {songName: "Snehithane ", filePath:"songs/3.mp3", coverPath:"Goddes.jpg"  }  ,                                                                                                                                    
]

songItems.forEach((element,i)=>{
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
}
)


masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<0){
        audioElement.play();
        // masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.toggle('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})


audioElement.addEventListener('timeupdate',()=>{
    

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myprogressbar.value = progress;


})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})

const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    
    element.classList.remove('fa-circle-pause');
    
    element.classList.add('fa-circle-play');
    element.addEventListener('click',()=>{
        element.classList.toggle('fa-circle-pause');
    }
)
    }
    )}


Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{

        console.log(e.target);
        makeallplays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${index+1}.mp3`;
        mastersonginfo.innerText = songs[index].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if( songIndex > 2)
    {
        songIndex = 0;
        
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersonginfo.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');


})


document.getElementById('previous').addEventListener('click', ()=>{
    if( songIndex <= 0)
    {
        songIndex = 0;
        
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersonginfo.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

    
})


















