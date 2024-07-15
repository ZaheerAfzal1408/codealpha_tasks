const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const songList = document.getElementById('song-list');
const albumImg = document.getElementById('album-img');

let isPlaying = false;

const songs = [
    {
        title: 'Gore Gore Mukhde Pe Ishq',
        artist: 'Vishk',
        src: '/songs/Gore Gore Mukhde Pe Ishq Vishk Rebound 128 Kbps.mp3',
        img: '/images/Gore Gore Mukhde Pe.png'
    },
    {
        title: 'Ishq Vishk Pyaar Vyaar',
        artist: 'Vishk',
        src: '/songs/Ishq Vishk Pyaar Vyaar Ishq Vishk Rebound 128 Kbps.mp3',
        img: '/images/Ishq Vishk Pyaar Vyaar.png'
    },
    {
        title: 'Husan Tera Toba Toba',
        artist: 'Karan Aujla',
        src: '/songs/Husan-Tera-Toba-Toba(DJSathi.Me).mp3',
        img: '/images/Husn Tera Toba Toba.png'
    },
    {
        title: 'Amplifier',
        artist: 'Imran Khan',
        src: '/songs/Amplifier - Imran Khan 128 Kbps.mp3',
        img: '/images/Amplifier.png'
    },
    {
        title: 'Aja We Mahiya',
        artist: 'Imran Khan',
        src: '/songs/Aaja We Mahiya - Unforgettable 128 Kbps.mp3',
        img: '/images/Aja We Mahiya.png'
    }
    
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

function populateSongList() {
    songs.forEach((song, index) => {
        const songItem = document.createElement('div');
        songItem.classList.add('songlist-item');
        songItem.innerHTML = `<span>${song.title}</span><span>${song.artist}</span>`;
        songItem.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(song);
            audio.play();
            isPlaying = true;
            playPauseButton.innerHTML = '<i class="fas fa-pause"></i> Pause';
        });
        songList.appendChild(songItem);
    });
}

playPauseButton.addEventListener('click', playPauseMusic);
prevButton.addEventListener('click', prevSong);
nextButton.addEventListener('click', nextSong);

loadSong(songs[currentSongIndex]);
populateSongList();
