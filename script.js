const changeImageButton = document.querySelector('#change-image');

let currentImageIndex = 1;

function changeImage() {
   currentImageIndex+=1;
   console.log('cambio immagine', currentImageIndex);
}

changeImageButton.addEventListener('click', changeImage);