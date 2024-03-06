//Task 40
//define the type for our Album object
type Album = {
    artist: string;
    title: string;
    tracks: number;
};


//writing a fuction for creating albums 
function makeAlbum (artist: string, title: string, tracks: number ): Album {
    const album: Album = {
        artist,
        title,
        tracks,       
    };
    return album;

}
//printing different albums information
 let album1 = makeAlbum('Maher Zain','Thank You Allah', 9);
 console.log(album1)

 let album2 = makeAlbum('Maher Zain','Forgive Me', 9);
 console.log(album2)

 let album3 = makeAlbum('Siedd','Journey', 9);
 console.log(album3)

