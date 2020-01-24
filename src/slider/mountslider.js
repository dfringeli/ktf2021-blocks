jQuery(document).ready(function () {
    setTimeout(function () {
        var glide = new Glide('.ktf2021-slider', { type: 'carousel', autoplay: 3000, swipeThreshold: false, dragThreshold: false });
        glide.mount();
    }, 100);
});
