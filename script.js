const changeImageButton = document.querySelector('#change-image');
const changeTextButton = document.querySelector('#change-text');
const previewImage = document.querySelector('#preview-image');
const previewText = document.querySelector('#preview-text');

const assetsCount = 4;
let currentImageIndex = 1;
let currentTextIndex = 1;

function changeImage() {
   currentImageIndex+=1;
   if(currentImageIndex > assetsCount) {
      currentImageIndex = 1;
   }
   console.log('cambio immagine', currentImageIndex);
   previewImage.src = `./images/img_${currentImageIndex}.png`;
}

function changeText() {
   currentTextIndex+=1;
   if(currentTextIndex > assetsCount) {
      currentTextIndex = 1;
   }
   console.log('cambio testo', currentTextIndex);
   previewText.src = `./images/txt_${currentTextIndex}.png`;
}

changeImageButton.addEventListener('click', changeImage);
changeTextButton.addEventListener('click', changeText);