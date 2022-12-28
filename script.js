const changeImageButton = document.querySelector('#change-image');
const changeTextButton = document.querySelector('#change-text');
const previewImage = document.querySelector('#preview-image');
const previewText = document.querySelector('#preview-text');

const assetsCount = 4;
// let currentImageIndex = 1;
// let currentTextIndex = 1;

let currentImageIndex = Math.floor(Math.random() * 4) + 1;
let currentTextIndex = Math.floor(Math.random() * 4) + 1;

// function changeImage() {
//    currentImageIndex+=1;
//    if(currentImageIndex > assetsCount) {
//       currentImageIndex = 1;
//    }
//    console.log('cambio immagine', currentImageIndex);
//    previewImage.src = `./images/img_${currentImageIndex}.png`;
// }

// function changeText() {
//    currentTextIndex+=1;
//    if(currentTextIndex > assetsCount) {
//       currentTextIndex = 1;
//    }
//    console.log('cambio testo', currentTextIndex);
//    previewText.src = `./images/txt_${currentTextIndex}.png`;
// }

// changeImageButton.addEventListener('click', changeImage);
// changeTextButton.addEventListener('click', changeText);

function changeAsset(assetType) {
   let currentIndex;
   let targetElement;
   let srcPrefix;

   if (assetType === 'image') {
      currentIndex = currentImageIndex;
      targetElement = previewImage;
      srcPrefix = 'img';
   } else if (assetType === 'text') {
      currentIndex = currentTextIndex;
      targetElement = previewText;
      srcPrefix = 'txt';
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