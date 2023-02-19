// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);

const gallery = document.querySelector('div.gallery');
const gal = galleryItems
  .map(
    item =>
      `
      <a class="gallery__item" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
        </a>
      `
  )
  .join('');
gallery.insertAdjacentHTML('afterbegin', gal);

const a = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  scrollZoom: false,
});
