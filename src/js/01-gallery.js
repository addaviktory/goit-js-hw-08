import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import {galleryItems} from './gallery-items.js';

const gallery = document.querySelector('.gallery')
const galleryMarkup = createGalleryMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryMarkup)

function createGalleryMarkup(galleryFunction){
    return galleryFunction
    .map(({ preview, original, description }) => {
        return `
       <li><a class="gallery__item" href="${original}">
        <img src="${preview}" alt="${description}" class="gallery__image">
       </a></li>
     `;
      })
      .join("");
}

new SimpleLightbox(".gallery__item", {
    captionDelay: 250,
    captionsData: "alt",
    scrollZoom: false,
  });