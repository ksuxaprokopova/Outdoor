let slider = $(".carusel").bxSlider({
    controls: false,
    pager: false,
    infiniteLoop: true,
    touchEnabled: true,
    hideControlOnEnd: false,
    adaptiveHeight: true
});

$(".carusel_button").click(e => {
    e.preventDefault();
    console.log(slider)
    slider.goToNextSlide()
})