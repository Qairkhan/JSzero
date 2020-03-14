var slider1 = {
    imagesUrls = [],
    currentImageIndex = 0,
    showPrevBtn = document.getElementById('show-prev-btn'),
    showNextBtn = document.getElementById('show-next-btn'),
    slideImage = document.getElementById('slide-img'),

    // function definition
    onShowPrevBtnClick: function (event) {
        currentImageIndex--;
        slideImage.src = imagesUrls[currentImageIndex];
        showNextBtn.disabled = false;

        // disable prev btn
        if (currentImageIndex === 0 ) {
            showPrevBtn.disabled = true;
        }
    },
    onShowNextBtnClick: function (event) {
        currentImageIndex++;
        
        slideImage.src = imagesUrls[currentImageIndex];
        showPrevBtn.disabled = false;
    
        // disable next btn
        if (currentImageIndex === (imagesUrls.length -1) ) {
            showNextBtn.disabled = true;
        }
    },
}