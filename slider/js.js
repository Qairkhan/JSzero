//find elements
var showPrevBtn = document.getElementById('show-prev-btn');
var showNextBtn = document.getElementById('show-next-btn');
var slideImage = document.getElementById('slide-img');

//addlistiner
showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

// images arrays
var imagesUrls = [];

imagesUrls.push('https://muz-tv.ru/storage/pic/e/2/e289a15ed2db453e1ecbf87ad157e48e.jpg');
imagesUrls.push('https://e3.365dm.com/19/04/768x432/skynews-bts-number-one_4644694.jpg?20190419153417');
imagesUrls.push('https://tntmusic.ru/media/content/article/2019-10-14_08-09-53__0059a8f6-ee5a-11e9-a31d-f1ee0cd08588.jpg');
imagesUrls.push('https://интересное.ru.com/wp-content/uploads/2019/06/6-faktov-o-tom-chto-takoe-K-Pop-i-pochemu-vse-shodyat-po-nemu-s-uma-1.jpg');

var currentImageIndex = 0;
slideImage.src = imagesUrls[currentImageIndex];


// function definition
function onShowPrevBtnClick() {
    currentImageIndex--;
    slideImage.src = imagesUrls[currentImageIndex];
}
function onShowNextBtnClick() {
    currentImageIndex++;
    slideImage.src = imagesUrls[currentImageIndex];
}