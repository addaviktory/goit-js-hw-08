import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

function getItemLocalStorage() {
  const timeLocalStorage = localStorage.getItem('videoplayer-current-time');

  if (timeLocalStorage) {
    return timeLocalStorage;
  }
  return 0;
}
player.setCurrentTime(getItemLocalStorage());
player.on('timeupdate', throttle(onPlay, 1000));
