var slider1 = {
    imagesUrls = [],
    currentImageIndex = 0,
    showPrevBtn = document.getElementById('show-prev-btn'),
    showNextBtn = document.getElementById('show-next-btn'),
    slideImage = document.getElementById('slide-img'),

    start: function() {
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
    },

    // function definition
    onShowPrevBtnClick: function (event) {
        this.currentImageIndex--;
        this.slideImage.src = imagesUrls[currentImageIndex];
        this.showNextBtn.disabled = false;

        // disable prev btn
        if (this.currentImageIndex === 0 ) {
            this.showPrevBtn.disabled = true;
        }
    },
    onShowNextBtnClick: function (event) {
        this.currentImageIndex++;
        
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = false;
    
        // disable next btn
        if (this.currentImageIndex === (this.imagesUrls.length -1) ) {
            this.showNextBtn.disabled = true;
        }
    }
};