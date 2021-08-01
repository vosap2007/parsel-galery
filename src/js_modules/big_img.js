import flipsThroughImages from './flips';
import addBigImg from './modal';

export default function getBigSize(e) {
    const element = e.target.dataset.source;
    const imgRight = e.target.closest('.gallery__item').nextElementSibling.lastElementChild.firstElementChild.dataset.source;
    const imgLeft = e.target.closest('.gallery__item').previousElementSibling.lastElementChild.firstElementChild.dataset.source;
  
    flipsThroughImages(imgRight, imgLeft);
  
    lightboxEl.classList.add('is-open');
  
    addBigImg(element);
  };