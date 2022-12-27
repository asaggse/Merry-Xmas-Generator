const changeImageButton = document.querySelector('#change-image');
const previewImage = document.querySelector('#preview-image');
const previewText = document.querySelector('#preview-text');

const assetsCount = 4;
let currentImageIndex = 1;

function changeImage() {
   currentImageIndex+=1;
   if(currentImageIndex > assetsCount) {
      currentImageIndex = 1;
   }
   console.log('cambio immagine', currentImageIndex);
   previewImage.src = `./images/img_${currentImageIndex}.png`;
}

changeImageButton.addEventListener('click', changeImage);