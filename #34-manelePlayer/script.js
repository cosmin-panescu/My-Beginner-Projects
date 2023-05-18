const songs = [
    "am sa bag doua ziare (manele tech).mp3",
    "baterie baterie foc (manele dnb).mp3",
    "buna dimineata viata mea (manele dnb).mp3",
    "chef de chef (manele dnb).mp3",
    "de ce ma minti meduza.mp3",
    "hai in Mercedes, hai in avion (manele dnb).mp3",
    "sa iubesti doua femei tech.mp3",
    "Tchami baga mare sukarime la festival.mp3",
    "toate pozele cu tine (manele tech).mp3"
]

const createSongList = () => {
    const list = document.createElement('ol');

    // loop through songs and create a list for each one, adding after the text 
    for(let i = 0; i < songs.length; i++) {
        const item = document.createElement('li');
        item.appendChild(document.createTextNode(songs[i]));

        list.appendChild(item);
    }
    return list;
}

// appending the function that creates the list to the 'songList' div. Check HTML
document.getElementById('songList').appendChild(createSongList());

songList.onclick = (e) => {
    const clickedItem = e.target;
    const source = document.getElementById('source');
    source.src = 'songs/' + clickedItem.innerText;

    document.getElementById('currentlyPlayingSong').innerText = 'Currently Playing: ';
    document.getElementById('currentSong').innerText = clickedItem.innerText;
    // console.log(clickedItem.innerText);
    
    player.load();
    player.play();
}

// pause and play functions
const playAudio = () => {
    if(player.readyState) {
    player.play();
    }
}

const pauseAudio = () => {
    player.pause();
}

// volume slider
const slider = document.getElementById('volumeSlider');
    slider.oninput = (e) => {
    const volume = e.target.value;
    player.volume = volume;
}

















