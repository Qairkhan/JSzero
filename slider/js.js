//kpop object
kpop.start();


var imagesUrls = [];
var currentImageIndex = 0;
//find elements
var showPrevBtn = document.getElementById('show-prev-btn');
var showNextBtn = document.getElementById('show-next-btn');
var slideImage = document.getElementById('slide-img');

//addlistiner
showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

// images arrays


imagesUrls.push('https://muz-tv.ru/storage/pic/e/2/e289a15ed2db453e1ecbf87ad157e48e.jpg');
imagesUrls.push('https://e3.365dm.com/19/04/768x432/skynews-bts-number-one_4644694.jpg?20190419153417');
imagesUrls.push('https://tntmusic.ru/media/content/article/2019-10-14_08-09-53__0059a8f6-ee5a-11e9-a31d-f1ee0cd08588.jpg');
imagesUrls.push('https://www.k-pop.ru/wp-content/uploads/2019/01/unnamed-32.jpg');


slideImage.src = imagesUrls[currentImageIndex];
showPrevBtn.disabled = true;

// function definition
function onShowPrevBtnClick(event) {
    currentImageIndex--;
    slideImage.src = imagesUrls[currentImageIndex];
    showNextBtn.disabled = false;

    // disable prev btn
    if (currentImageIndex === 0 ) {
        showPrevBtn.disabled = true;
    }
}
function onShowNextBtnClick(event) {
    currentImageIndex++;
    
    slideImage.src = imagesUrls[currentImageIndex];
    showPrevBtn.disabled = false;

// disable next btn
    if (currentImageIndex === (imagesUrls.length -1) ) {
        showNextBtn.disabled = true;
    }
}