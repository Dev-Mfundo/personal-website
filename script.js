$(document).ready(function(){
    $(".toggle").on("click",function(){
        $(".nav").toggle();
    })

    if ($(window).width() <= 600) {
        $(".nav").hide();
        $(".nav").on("click", function(){
            $(".nav").toggle()
        })
    }else{
        $(".nav").show();
    }
})
