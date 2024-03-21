interface Song {
    songName: string,
    singerName: string,
    printSongInfo(songName: string, singerName: string): string,
}

const song1: Song = {
    songName: "Chanda Mere Aa",
    singerName: "Arijit Singh",
    printSongInfo: (songName, singerName) => {
        return `Song: ${songName}, Singer: ${singerName}`;
    }
};

console.log(song1.printSongInfo("Chanda Mere Aa", "Arijit Singh"));