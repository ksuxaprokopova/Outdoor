$(".carusel").bxSlider({
    controls: false,
    pager: false,
    infiniteLoop: true,
    touchEnabled: true,
    hideControlOnEnd: false,
});

$(".carusel_button").click(e => {
    e.preventDefault();
    slider.goToNextSlider()
})