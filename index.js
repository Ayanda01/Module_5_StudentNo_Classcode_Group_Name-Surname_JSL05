// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
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
    { title: "The Chain", artist: "Fleetwood Mac", genre: "Rock" }
];

// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop"
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    const playlistsDiv = document.getElementById('playlists');
    playlistsDiv.innerHTML = '';  // Clear previous playlists

    // Iterate over each guardian and generate their playlist
    Object.keys(guardians).forEach(guardian => {
        const playlistDiv = document.createElement('div');
        playlistDiv.classList.add('playlist');

        const header = document.createElement('h2');
        header.classList.add('playlist-header');
        header.textContent = `${guardian}'s Playlist`;

        playlistDiv.appendChild(header);

        // Filter songs based on each Guardian's preferred genre
        const guardianSongs = songs.filter(song => song.genre === guardians[guardian]);

        // Create song elements for the filtered songs
        guardianSongs.forEach(song => {
            const songDiv = document.createElement('div');
            songDiv.classList.add('song');

            const songTitle = document.createElement('span');
            songTitle.classList.add('song-title');
            songTitle.textContent = song.title;

            const songArtist = document.createElement('span');
            songArtist.classList.add('song-artist');
            songArtist.textContent = ` by ${song.artist}`;

            // Append the song title and artist to the songDiv
            songDiv.appendChild(songTitle);
            songDiv.appendChild(songArtist);
            playlistDiv.appendChild(songDiv);
        });

        // Append the complete playlistDiv to the #playlists div
        playlistsDiv.appendChild(playlistDiv);
    });
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);
