$(".carusel").bxSlider({
    controls: false,
    pager: false,
    infiniteLoop: true,
    touchEnabled: true,
    hideControlOnEnd: false,
    sliderHeight: 450, 
});

$(".carusel_button").click(e => {
    e.preventDefault();
    slider.goToNextSlider()
})