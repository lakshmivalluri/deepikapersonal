var imageList = [
    'https://www.audi.com/content/dam/gbp2/experience-audi/models-and-technology/concept-cars/2021/skysphere_2021_3371_sRGB_1920x1080.jpg',
    'https://i.ytimg.com/vi/0irtVnabSJA/maxresdefault.jpg',
    'https://i.ytimg.com/vi/7VI8mjYnRdU/maxresdefault.jpg',
    'https://www.driving.co.uk/s3/st-driving-prod/uploads/2019/05/2019-Audi-R8-V10-Performance-Clarkson-Review-01.jpg',
    'https://www.topgear.com/sites/default/files/cars-car/image/2018/11/a1813746_large.jpg?w=1280&h=720'
];

var addImagesToSlideShow = () => {
    imageList.forEach((imgUrl, index) => {
        var divElement = $("<div class='carousel-item'></div>");
        if (index == 0) {
            divElement.addClass('active');
        }
        var imgTag = $("<img/>").attr('src', imgUrl);
        divElement.append(imgTag);
        $(".carousel-inner").append(divElement);
    });
}
$(document).ready(() => {
    addImagesToSlideShow();
})