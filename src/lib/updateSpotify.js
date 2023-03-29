async function updateSpotify() {
    try {
        const song_mount = document.getElementById("spotify_song");
        const artist_mount = document.getElementById("spotify_artist");
        const album_mount = document.getElementById("spotify_album");
        const raw = await fetch(
            "https://api.lanyard.rest/v1/users/893762371770802227"
        );
        const data = (await raw.json()).data;

        if (!data.spotify?.song) {
            song_mount.remove()
            artist_mount.remove()
            album_mount.remove()
        }
        song_mount.innerHTML = data.spotify?.song;
        artist_mount.innerHTML = data.spotify?.artist;
        album_mount.innerHTML = data.spotify?.album;
    } catch (e) { }
}

setInterval(updateSpotify, 500);