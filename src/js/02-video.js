import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";
const currentTime = Number(localStorage.getItem(LOCALSTORAGE_KEY)) || 0;

player.on('timeupdate', throttle(onUpdate, 1000));

function onUpdate({seconds}) {
    console.dir(seconds)
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(seconds))
}
   
player.setCurrentTime(currentTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});