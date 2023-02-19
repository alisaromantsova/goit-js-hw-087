import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});
console.log(player);
const onTimeUpdate = e => {
  localStorage.setItem('videoplayer-current-time', e.seconds);
  console.log(e);
};

player.on('timeupdate', throttle(onTimeUpdate, 1000));

let currentTime = localStorage.getItem('videoplayer-current-time');
player
  .setCurrentTime(currentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
    }
  });
