
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
sleep(100).then(() => {
    var glide = new Glide('.ktf2021-slider', { type: 'carousel', autoplay: 3000, swipeThreshold: false, dragThreshold: false });
    glide.mount();
});