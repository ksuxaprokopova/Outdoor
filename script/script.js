$('.products_top').parallax({imageSrc: '../img/products/fon_top.png',
speed: 0.01
});

$("#button").on("click", function(e){
    e.preventDefault();

    let name = $("#name").val().trim();
    let email = $("#email").val().trim();

    if(name ==""){
        $("#error_name").text("Enter your name")
    }else if(email ==""){
        $("#error_email").text("Enter your e-mail")
    }

    $.ajax({
        url: "ajax/telegram.php",
        type: "POST",
        cache: false,
        data: {"email": email, "name": name},
        dataType: "html",
        beforeSend: function(){
            $("#button").prop("disabled", true)
        },
        success: function(){
            $(".modal_overlay_fanks").fadeIn();
            $("#name").val("");
            $("#email").val("");
            $("#button").prop("disabled", false)
        }
    })
})
   
