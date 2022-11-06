import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery')
const galleryMarkup = createGalleryItemsMarkup(galleryItems)

galleryEl.insertAdjacentHTML('afterbegin', galleryMarkup)

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join('')
}

console.log(SimpleLightbox)

new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionPosition: 'bottom',
    captionDelay: 250
});
