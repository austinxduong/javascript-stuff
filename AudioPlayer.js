export default class AudioPlayer {
    constructor(selector = '.audioPlayer', audio = []) {
        this.playerELem = document.querySelector(selector);
        this.audio = audio;
        this.currentAudio = null;
        this.createPlayerElements();
    }

    createPlayerElements(){
        this.audioElem = document.createElement('audio');
        const playListElem = document.createElement('div');
        playListElem.classList.add('playlist');

        this.playerELem.appendChild(this.audioElem);
        this.playerELem.appendChild(playListElem);
    }
}