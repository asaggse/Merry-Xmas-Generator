const changeImageButton = document.querySelector('#change-image');
const changeTextButton = document.querySelector('#change-text');
const previewImage = document.querySelector('#preview-image');
const previewText = document.querySelector('#preview-text');
const senderInput = document.querySelector('#sender');
const previewSender = document.querySelector('.preview-sender');
const downloadButton = document.querySelector('#download');


const assetsCount = 4;
let currentImageIndex = 1;
let currentTextIndex = 1;

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

function updateSender() {
   const txt = senderInput.value;

   if (txt.trim().length > 0) {
      previewSender.innerText = txt;
   } else {
      previewSender.innerText = 'Augurissimi';
   }
}

function downloadImage {
   htmlToImage.toJpeg(document.getElementById('my-node'), { quality: 0.95 })
      .then(function (dataUrl) {
         var link = document.createElement('a');
         link.download = 'my-image-name.jpeg';
         link.href = dataUrl;
         link.click();
      });
}

changeImageButton.addEventListener('click', () => changeAsset('image'));
changeTextButton.addEventListener('click', () => changeAsset('text'));
senderInput.addEventListener('input', updateSender);
downloadButton.addEventListener('click', downloadImage);