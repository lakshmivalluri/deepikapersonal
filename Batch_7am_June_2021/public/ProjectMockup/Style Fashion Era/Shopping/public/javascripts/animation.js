/* ------------ LOGIN PAGE ---------------*/
//form Login Input Animation
$(".textbox input").on("focus", function () {
    $(this).addClass("hightlight");
});
$(".textbox input").on("blur", function () {
    if ($(this).val() == "")
        $(this).removeClass("hightlight");
});

/* ------------ SIGNIN PAGE ---------------*/
//Video Opening
function fVideo() {
    $("#popup").toggleClass("active");
    var video = $("video");
    video.pause();
    video.currentTime = 0;
}

//Swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});