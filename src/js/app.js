import '../scss/style.scss';
import PicturePuzzle from './PicturePuzzle'

const picturePuzzle = new PicturePuzzle(
  document.querySelectorAll('#puzzle-wrapper > div')[0],
  '../assets/1.jpg',
  600
);
const picturePuzzle2 = new PicturePuzzle(
  document.querySelectorAll('#puzzle-wrapper > div')[1],
  '../assets/2.jpg',
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
