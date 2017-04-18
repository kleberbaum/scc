$(function() {
    bg_color()
    $(window).scroll(bg_color)

    function bg_color(){
        var hue = 190 + ($(document).scrollTop() / 10) //is a degree on the color wheel -> no max
        var saturation = '80%' //percentage of saturation
        var lightness = 50 - 50 / (1 + ($(document).scrollTop() / 200)) + '%' //percentage of lightness
        var alpha = 0.9 //number between 0.0 (fully transparent) and 1.0 (fully opaque)

        $('html').css({'background-color': 'hsla('+ hue +','+ saturation +','+ lightness +','+ alpha +')'})
    }
});
