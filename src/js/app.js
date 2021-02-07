import '../scss/style.scss';
import PicturePuzzle from './PicturePuzzle'

const picturePuzzle = new PicturePuzzle(
  document.querySelectorAll('#puzzle-wrapper > div')[0],
  'https://scontent.fhan5-1.fna.fbcdn.net/v/t1.0-9/120970626_2115218795278231_5527565250700767042_n.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=G5lIfjG_vUwAX_MFXwl&_nc_ht=scontent.fhan5-1.fna&oh=731bb21651bd82ee5710f0704f1b23ca&oe=60434993',
  600
);
const picturePuzzle2 = new PicturePuzzle(
  document.querySelectorAll('#puzzle-wrapper > div')[1],
  'https://scontent.fhan5-5.fna.fbcdn.net/v/t1.0-9/102560559_1982338061899639_6642068800551397701_n.jpg?_nc_cat=101&ccb=2&_nc_sid=174925&_nc_ohc=33W9UlzGxuUAX_A8KFw&_nc_ht=scontent.fhan5-5.fna&oh=1b2e52a237c4799aa67355563eeaa306&oe=6045CDBE',
  600,
  4
);

picturePuzzle.onSwap = function(movements){
  console.log(movements);
};

const modal = document.querySelector('#success-modal');
modal.style.display = 'block';

picturePuzzle.onFinished = function() {
  console.log("Show good job dialog");

  setTimeout(() => {
    modal.classList.add('open');
    this.el.classList.add('blur-it')
  }, 500);
  modal.querySelector('.trigger').onclick = () => {
    modal.classList.remove('open');
    this.el.classList.remove('blur-it');
  }

};
