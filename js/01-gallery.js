import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const markup = galleryItems
  .map(picture => {
    return `
    <div class="gallery__item">
        <a class="gallery__link" href="${picture.original}">
            <img
            class="gallery__image"
            src="${picture.preview}"
            data-source="${picture.original}"
            alt="${picture.description}"
            />
        </a>
    </div>
    `;
  })
  .join('');
gallery.innerHTML = markup;

gallery.addEventListener('click', onImageClick);

function onImageClick(event) {
  event.preventDefault();
  console.log(event);
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const imageLink = event.target.dataset.source;
  const instance = basicLightbox.create(`<img src ="${imageLink}">`);
  instance.show();
}
