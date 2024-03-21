var song1 = {
    songName: "Chanda Mere Aa",
    singerName: "Arijit Singh",
    printSongInfo: function (songName, singerName) {
        return "Song: ".concat(songName, ", Singer: ").concat(singerName);
    }
};
console.log(song1.printSongInfo("Chanda Mere Aa", "Arijit Singh"));
