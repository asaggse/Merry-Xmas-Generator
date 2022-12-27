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
//    if(currentImageIndex > assetsCount) {
   }

   currentIndex += 1;
   if (currentIndex > assetsCount) {
      currentIndex = 1;
   }
   // console.log(`cambio ${srcPrefix}`, currentIndex);
   targetElement.src = `./images/${srcPrefix}_${currentIndex}.png`;

   if (assetType === 'image') {
      currentImageIndex = currentIndex;
   } else if (assetType === 'text') {
      currentTextIndex = currentIndex;
   }
}

changeImageButton.addEventListener('click', () => changeAsset('image'));
changeTextButton.addEventListener('click', () => changeAsset('text'));