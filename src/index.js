import galleryItems from './js_modules/gallery';
import {
  galleryEl,
  lightboxEl,
  lightboxImageEl,
  lightboxOverlayEl,
  buttonEl,
} from './js_modules/elements';
import flipsThroughImages from './js_modules/flips';
import {addBigImg, deleteBigImg, closeModal} from './js_modules/modal';
import getBigSize from './js_modules/big_img';

  galleryEl.addEventListener('click', getBigSize);
  buttonEl.addEventListener('click', closeModal);

  const markupImg = item => `<li class="gallery__item">
    <a
      class="gallery__link"
       
    >
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>`;
  
function createItemCard(galleryItems) {
  return galleryItems.map(item => markupImg(item)).join('');
};

galleryEl.innerHTML = createItemCard(galleryItems);

lightboxOverlayEl.addEventListener('click', closeModal);

document.onkeydown = function(e) {
  if(e.key === "Escape") {
    closeModal();
  }
};


  

