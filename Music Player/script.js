const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const albumImg = document.getElementById('album-img');

let isPlaying = false;

const songs = [
    {
        title: 'Gore Gore Mukhde Pe Ishq',
        artist: 'Vishk Rebound',
        src: '/songs/Gore Gore Mukhde Pe Ishq Vishk Rebound 128 Kbps.mp3',
        img: '/images/Gore Gore Mukhde Pe.png'
    },
    {
        title: 'Ishq Vishk Pyaar Vyaar',
        artist: 'Vishk Rebound',
        src: '/songs/Ishq Vishk Pyaar Vyaar Ishq Vishk Rebound 128 Kbps.mp3',
        img: '/images/Ishq Vishk Pyaar Vyaar.png'
    },
    // Add more songs here
];

let currentSongIndex = 0;

function loadSong(song) {
    audio.src = song.src;
    title.textContent = song.title;
    artist.textContent = song.artist;
    albumImg.src = song.img;
}

function playPauseMusic() {
    if (isPlaying) {
        audio.pause();
        playPauseButton.innerHTML = '<i class="fas fa-play"></i> Play';
    } else {
        audio.play();
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i> Pause';
    }
    isPlaying = !isPlaying;
}


function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    audio.play();
    isPlaying = true;
    playPauseButton.innerHTML = '<i class="fas fa-pause"></i> Pause';
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    audio.play();
    isPlaying = true;
    playPauseButton.innerHTML = '<i class="fas fa-pause"></i> Pause';
}

playPauseButton.addEventListener('click', playPauseMusic);
prevButton.addEventListener('click', prevSong);
nextButton.addEventListener('click', nextSong);

loadSong(songs[currentSongIndex]);
