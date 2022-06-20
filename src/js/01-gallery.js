import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

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

// function onImageClick(e) {
//     e.preventDefault();
  
        
//     }
//     console.log(e.target);
// }
let basicLightbox;
function onImageClick(e) {
    e.preventDefault();
    // if (e.target.nodeName !== "IMG") {
    //     return;
    // }
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">`)
    instance.show();
}
function onCloseModal() {
  window.removeEventListener("keydown", onEscKeyModal);
  document.body.classList.close(".basicLightbox--visible");
}
function onEscKeyModal(event) {
  if (event.code === "Escape") {
    onCloseModal();
  }
}

