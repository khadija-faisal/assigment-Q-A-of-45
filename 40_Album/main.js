//writing a fuction for creating albums 
function makeAlbum(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
        tracks: tracks,
    };
    return album;
}
//printing different albums information
var album1 = makeAlbum('Maher Zain', 'Thank You Allah', 9);
console.log(album1);
var album2 = makeAlbum('Maher Zain', 'Forgive Me', 9);
console.log(album2);
var album3 = makeAlbum('Siedd', 'Journey', 9);
console.log(album3);
