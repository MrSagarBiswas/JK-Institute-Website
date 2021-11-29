if ($(window).width() < 980) {
    $("#nav2 ul").slideUp();
}

$(".toggle").click(function () {
$("#nav2 ul").slideToggle();
if ($("#nav2").hasClass("active") == true) {
    $(".toggle").html('<i class="fa fa-bars"></i>');
    setTimeout(function () {
        $("#nav2").toggleClass("active");
    }, 200)
} else {
    $(".toggle").html('<i class="fa fa-times"></i>');
    $("#nav2").toggleClass("active");
}
})

$("a").click(function () {
$(".clicked").removeClass("clicked")
$(this).toggleClass("clicked")
})