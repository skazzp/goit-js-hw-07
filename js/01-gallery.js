import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>
    `;
  })
  .join('');
gallery.innerHTML = galleryMarkup;

gallery.addEventListener('click', onImageClick);

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;

  const imageLink = event.target.dataset.source;
  const instance = basicLightbox.create(`<img src ="${imageLink}">`);
  instance.show();

  function onButtonClose(e) {
    if (e.code === 'Escape') {
      document.removeEventListener('keydown', onButtonClose);
      instance.close();
    }
  }
  document.addEventListener('keydown', onButtonClose);
}

console.log(galleryItems);
