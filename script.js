const changeImageButton = document.querySelector('#change-image');

const assetsCount = 4;
let currentImageIndex = 1;

function changeImage() {
   currentImageIndex+=1;
   if(currentImageIndex > assetsCount) {
      currentImageIndex = 1;
   }
   console.log('cambio immagine', currentImageIndex);
}

changeImageButton.addEventListener('click', changeImage);