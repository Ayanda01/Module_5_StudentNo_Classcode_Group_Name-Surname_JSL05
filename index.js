// Array of song objects. Add at least 5 more songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Mr. Blue Sky", artist: "Electric Light Orchestra", genre: "Rock" },
    { title: "The Chain", artist: "Fleetwood Mac", genre: "Rock" },
    { title: "Bring It On Home to Me", artist: "Sam Cooke", genre: "R&B" },
    { title: "You Make My Dreams", artist: "Hall & Oates", genre: "Pop" }
];

// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "Rock",
    "Rocket": "R&B",
    "Groot": "Pop"
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    const playlistContainer = document.getElementById('playlists');
    
    // Loop through each Guardian
    Object.keys(guardians).forEach(guardian => {
        // Filter songs by the Guardian's preferred genre
        const guardianGenre = guardians[guardian];
        const filteredSongs = songs.filter(song => song.genre === guardianGenre);
        
        // Create a div for each Guardian's playlist
        const playlistDiv = document.createElement('div');
        playlistDiv.classList.add('playlist');
        
        // Add Guardian's name as a heading
        const guardianHeading = document.createElement('h2');
        guardianHeading.textContent = `${guardian}'s Playlist`;
        playlistDiv.appendChild(guardianHeading);
        
        // Append each song to the playlist
        filteredSongs.forEach(song => {
            const songDiv = document.createElement('div');
            songDiv.classList.add('song');
            
            const songTitle = document.createElement('div');
            songTitle.classList.add('song-title');
            songTitle.textContent = `${song.title} by ${song.artist}`;
            
            songDiv.appendChild(songTitle);
            playlistDiv.appendChild(songDiv);
        });
        
        // Append the playlist to the main container
        playlistContainer.appendChild(playlistDiv);
    });
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);
