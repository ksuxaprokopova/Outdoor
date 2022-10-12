$(window).on("scroll", function(){
    if($(this).scrollTop() > 500){
        $("#up").fadeIn()
    }else{
        $("#up").fadeOut()
    }
})

$("#up").on("click",function(){
    $("html, body").animate({scrollTop:0},500)
})



$("#shop_link").on("click", function(e){
    e.preventDefault();
    $("html, body").animate({scrollTop: $("#shop").offset().top}, 1000)
})
$("#navi_link").on("click", function(e){
    e.preventDefault();
    $("html, body").animate({scrollTop: $("#navi").offset().top}, 1000)
})
$("#foot_link").on("click", function(e){
    e.preventDefault();
    $("html, body").animate({scrollTop: $("#foot").offset().top}, 1000)
})
$("#buy_link").on("click", function(e){
    e.preventDefault();
    $("html, body").animate({scrollTop: $("#buy").offset().top}, 1000)
})
$("#cat_link").on("click", function(e){
    e.preventDefault();
    $("html, body").animate({scrollTop: $("#cat").offset().top}, 1000)
})




$(".modal_overlay").on("click", function(e){
    if($(e. target).closest(".modal").length==0){
        $(this).fadeOut();
    }
})

$(".close").on("click", function(){
    $(this).parents(".modal_overlay").fadeOut()
})

$("#open_modal").on("click", function(){
    $(".modal_overlay").fadeIn()
})
