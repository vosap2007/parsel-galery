export function addBigImg(element) {
    lightboxImageEl.src = element;
  };
  
export  function deleteBigImg() {
    lightboxImageEl.src = '';
  };
  
export  function closeModal() {
    lightboxEl.classList.remove('is-open');
  
    deleteBigImg();
  };