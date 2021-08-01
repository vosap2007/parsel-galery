import {addBigImg, closeModal} from './modal';

export default function flipsThroughImages (imgRight, imgLeft) {
    document.onkeydown = function(e) {
      switch(e.key) {
      case 'Escape':
      closeModal();
        break;
      
        case 'ArrowLeft':
          addBigImg(imgLeft);
            break;
      
            case 'ArrowRight':
              addBigImg(imgRight);;
                break;
      }};
  } 