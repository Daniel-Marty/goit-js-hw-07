import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup)
galleryContainer.addEventListener('click', onImageClick);

function createGallery(galleryItems) {
  return galleryItems
        .map(({ preview, description, original }) => {
            return `
        <div class="gallery__item">
            <a class="gallery__link" href='${original}'>
            <img class='gallery__image'
            src='${preview}'
            data - source='${original}'
            alt = '${description}'/>
            </a >    
        </div>        
            `;
        })
        .join('');
}
let instance = false

function onImageClick(evt) {
  evt.preventDefault();
  
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  
  instance = basicLightbox.create(`
     <div class="modal">
         <img src="${evt.target.src}" alt="IMG" width="800" height="600">
     </div>
     `)
  instance.show();
}

function onCloseModal() {
  window.removeEventListener("keydown", onEscKeyModal);
  let l = document.querySelector('.basicLightbox--visible')
  l.classList.remove('basicLightbox--visible')
}

window.addEventListener('keydown', onEscKeyModal)

function onEscKeyModal(event) {
  if (event.code === "Escape") {
    //onCloseModal();
    instance.close()
  }
}



