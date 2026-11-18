let songs=[{sid:1, name: "Lucky Beats", artist: "kanye west", image: "media/album covers/lucky beat image.jpg", genre:"lo-fi", source:"media/songs/lucky beat.mp3"},
    {sid:2, name: "Chops", artist: "radiohead", image: "media/album covers/chops image.png", genre:"lo-fi", source:"media/songs/chops song.mp3"},
    {sid:3, name: "Magma", artist: "se7en", image: "media/album covers/magma image.png", genre:"techno", source:"media/songs/magma.mp3"},
    {sid:4, name: "Ocean Breeze", artist: "aaliyah", image: "media/album covers/ocean breeze image.jpg", genre:"pop", source:"media/songs/ocean breeze song.mp3"},
    {sid:5, name: "Woah", artist: "thrusters", image: "media/album covers/woah image.png", genre:"lo-fi", source:"media/songs/woah.mp3"}
];


let currentSongId = 0;

let playlists = [];

let selectedPlaylist = null;



function toggleTheme() {

    const themeToggle = document.getElementById("themeToggle");

    if (themeToggle.checked) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
}



function showSongs()
{
    let songsList = document.querySelector("#songsList");
    let selection = document.querySelector("#genres").value;

    songsList.innerHTML = "";

    for(let i of songs)
    {
        if(i.genre == selection || selection == "all")
        {
            let renderSong = document.createElement("button");

            renderSong.textContent = i.name;

            renderSong.classList.add("song-item");

            renderSong.dataset.source=i.sid;

            songsList.append(renderSong);
        }
    }

    renderCurrentSong();
}


showSongs();



function playSong(songId)
{
    let songArtwork=document.querySelector("#currentSongImage");
    let songName=document.querySelector("#currentSongName");
    let songArtist=document.querySelector("#currentSongArtist");
    let audiotrack=document.querySelector("#audioPlayer");

    for(let song of songs)
    {
        if(song.sid == songId)
        {
            currentSongId = song.sid;

            songArtwork.src=song.image;

            songName.textContent=song.name;

            songArtist.textContent=song.artist;

            audiotrack.src=song.source;

            audiotrack.autoplay=true;

            break;
        }
    }
}



function renderCurrentSong()
{
    let songSelected=document.querySelectorAll(".song-item");

    let prevButton=document.querySelector("#previousButton");

    let nextButton=document.querySelector("#nextButton");


    for(let i of songSelected)
    {
        i.addEventListener("click", function(){

            let songId=i.dataset.source;

            playSong(Number(songId));

        });
    }


    prevButton.onclick=function(){

        if(currentSongId > 1)
        {
            currentSongId--;

            playSong(currentSongId);
        }

    };


    nextButton.onclick=function(){

        if(currentSongId < songs.length)
        {
            currentSongId++;

            playSong(currentSongId);
        }

    };
}




function createPlaylist()
{
    let playlistInput=document.querySelector("#playlistInput");

    let playlistName=playlistInput.value.trim();


    if(playlistName == "")
    {
        return;
    }


 
    let newPlaylist={
        name: playlistName,
        songs: []
    };


    playlists.push(newPlaylist);


    playlistInput.value="";


    selectedPlaylist=newPlaylist;


    renderAllPlaylists();


    renderPlaylistSong();
}



function renderAllPlaylists()
{
    let allPlaylistItems=document.querySelector("#allPlaylistItems");

    allPlaylistItems.innerHTML="";


    for(let playlist of playlists)
    {
        let playlistButton=document.createElement("button");

        playlistButton.textContent=playlist.name;

        playlistButton.classList.add("playlist-item");


        playlistButton.addEventListener("click", function(){

            selectedPlaylist=playlist;

            renderPlaylistSong();

        });


        allPlaylistItems.append(playlistButton);
    }
}



function addtoPlaylist()
{

    if(selectedPlaylist == null)
    {
        return;
    }


  
    if(currentSongId == 0)
    {
        return;
    }


    for(let song of songs)
    {
        if(song.sid == currentSongId)
        {

            let alreadyAdded=false;

            for(let playlistSong of selectedPlaylist.songs)
            {
                if(playlistSong.sid == song.sid)
                {
                    alreadyAdded=true;
                }
            }


            if(alreadyAdded == false)
            {
                selectedPlaylist.songs.push(song);
            }

            break;
        }
    }


    renderPlaylistSong();
}



function renderPlaylistSong()
{
    let currentPlaylistSongs=document.querySelector("#currentPlaylistSongs");

    currentPlaylistSongs.innerHTML="";


    if(selectedPlaylist == null)
    {
        return;
    }



    if(selectedPlaylist.songs.length == 0)
    {
        let noSong=document.createElement("p");

        noSong.textContent="No songs in this playlist.";

        currentPlaylistSongs.append(noSong);

        return;
    }


    for(let song of selectedPlaylist.songs)
    {
        let playlistSong=document.createElement("button");

        playlistSong.textContent=song.name;

        playlistSong.classList.add("playlist-song");


        playlistSong.addEventListener("click", function(){

            playSong(song.sid);

        });


        currentPlaylistSongs.append(playlistSong);
    }
}


let createPlaylistButton=document.querySelector("#createPlaylistButton");

createPlaylistButton.addEventListener("click", function(){

    createPlaylist();

});



let addToPlaylistButton=document.querySelector("#addToPlaylistButton");

addToPlaylistButton.addEventListener("click", function(){

    addtoPlaylist();

});