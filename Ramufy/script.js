console.log("Welcome to Ramufy");

let songIndex = 0;
let audioElement = new Audio(`songs/${songIndex + 1}.mp3`);
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersonginfo = document.getElementById('mastersonginfo');
let songItemsContainer = document.querySelector(".songItems");
let songlistplay = document.getElementsByClassName("songitemplay");

// Function to dynamically create song objects
function createSongObjects(numberOfSongs) {
    const songsArray = [];
    for (let i = 1; i <= numberOfSongs; i++) {
        songsArray.push({
            songName: `Song ${i}`,
            filePath: `songs/${i}.mp3`,
            coverPath: `https://imgs.search.brave.com/Jcge_sCk9BP0YTxS_3QX7JskMK2ts7HA0KGdJNyKzhw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nZW8t/bWVkaWEuYmVhdHBv/cnQuY29tL2ltYWdl/X3NpemUvNTkweDQw/NC8wZGM2MTk4Ni1i/Y2NmLTQ5ZDQtOGZh/ZC02YjE0N2VhOGYz/MjcuanBn`
        });
    }
    return songsArray;
}

// Function to format time from seconds to MM:SS
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formattedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
    return `${minutes}:${formattedSeconds}`;
}

// Determine the number of songs
const numberOfSongs = 4;
let songs = createSongObjects(numberOfSongs);

// Render the song items on the frontend
songs.forEach((song, i) => {
    const songItem = document.createElement('div');
    songItem.classList.add('songItem');
    songItem.innerHTML = `
        <img alt="${song.songName}">
        <span class="songName">${song.songName}</span>
        <span class="songlistplay">
            <span class="timestamp">00:00</span>
            <i id="${i}" class="fa-regular fa-circle-play songitemplay"></i>
        </span>`;

        songItem.querySelector('.songitemplay').addEventListener('click', (e) => {
            console.log(e);
            if (e.target.classList.contains('fa-circle-play')) {
                e.target.classList.remove('fa-circle-play');
                e.target.classList.add('fa-circle-pause');
            } 
        });
    songItemsContainer.appendChild(songItem);
});

// Update cover images after elements are created
const songItemElements = Array.from(document.getElementsByClassName("songItem"));
songItemElements.forEach((element, i) => {
    const coverImg = element.getElementsByTagName("img")[0];
    if (songs[i] && songs[i].coverPath) {
        coverImg.src = songs[i].coverPath;
    } else {
        coverImg.src = 'https://imgs.search.brave.com/Jcge_sCk9BP0YTxS_3QX7JskMK2ts7HA0KGdJNyKzhw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nZW8t/bWVkaWEuYmVhdHBv/cnQuY29tL2ltYWdl/X3NpemUvNTkweDQw/NC8wZGM2MTk4Ni1i/Y2NmLTQ5ZDQtOGZh/ZC02YjE0N2VhOGYz/MjcuanBn'; // Fallback
    }
});

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime < 0) {
        audioElement.play();
        masterPlay.classList.toggle('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressbar.value = progress;

    // Update the timestamp
    const timestampElement = document.querySelector(`.songitemplay[id="${songIndex}"]`).previousElementSibling; //gets the span
    timestampElement.innerText = formatTime(audioElement.currentTime);
    
    if(audioElement.currentTime === audioElement.duration){
      makeallplays();
      masterPlay.classList.remove('fa-circle-pause');
      masterPlay.classList.add('fa-circle-play');
      gif.style.opacity = 0;
    }
});

myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
});

const makeallplays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
};

Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        const clickedIndex = parseInt(e.target.id);

        if (audioElement.src === `songs/${clickedIndex + 1}.mp3` && !audioElement.paused) {
            // If the clicked song is already playing, pause it
            audioElement.pause();
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
            gif.style.opacity = 0;
        } else {
            // Otherwise, play the clicked song
            makeallplays();
            songIndex = clickedIndex;
            audioElement.src = `songs/${songIndex + 1}.mp3`;
            mastersonginfo.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
        }
    });
});

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    mastersonginfo.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = songs.length - 1;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    mastersonginfo.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});