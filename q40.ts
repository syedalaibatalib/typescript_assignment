/* Album: Write a function called make_album() that builds a Object describing a
music album. The function should take in an artist name and an album title, and it
should return a Object containing these two pieces of information. Use the
function to make three dictionaries representing different albums. Print each
return value to show that Objects are storing the album information correctly.
Add an optional parameter to make_album() that allows you to store the number
of tracks on an album. If the calling line includes a value for the number of tracks,
add that value to the album’s Object. Make at least one new function call that
includes the number of tracks on an album.*/


function make_album(artist:string,album:string,tracks?:number):any{
    const album_dict:any={
        artist:artist ,
        album:album
        

    }   
if (tracks  !== undefined){
    album_dict.track=tracks;
}

    return album_dict;
    
    
}
console.log(make_album("Atif Aslam","Meri Kahani"));
console.log("2nd album",make_album("Arjit Singh","Barish"));
console.log("3rd album",make_album("Asim Azhar","Jo tu nw mila",40));




