import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const DELAY = 1000;
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const TIME_KEY = 'videoplayer-current-time';

const currentTime = localStorage.getItem(TIME_KEY)
  ? localStorage.getItem(TIME_KEY)
  : 0;

function getCurrentTime(even) {
  localStorage.setItem(TIME_KEY, even.seconds);
}

player.on('timeupdate', throttle(getCurrentTime, DELAY));

player.setCurrentTime(currentTime);