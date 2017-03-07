$(function () {

    var colors = ['green','','','',''];

    $('.menuLeftMenu .menuLeftIcon').click(function(e) {
        e.preventDefault();
        $('body').toggleClass('open');
    });

    $('.menuLeftIcons .menuLeftIcon:nth-child(1)').click(function() {
        $('body').addClass('yellow');
        $('body').removeClass('red');
        $('body').removeClass('blue');
        $('body').removeClass('brown');
    });
    $('.menuLeftIcons .menuLeftIcon:nth-child(2)').click(function(e) {
        e.preventDefault();
        $('body').addClass('red');
        $('body').removeClass('yellow');
        $('body').removeClass('blue');
        $('body').removeClass('brown');
    });
    $('.menuLeftIcons .menuLeftIcon:nth-child(3)').click(function(e) {
        e.preventDefault();
        $('body').addClass('blue');
        $('body').removeClass('red');
        $('body').removeClass('yellow');
        $('body').removeClass('brown');
    });
    $('.menuLeftIcons .menuLeftIcon:nth-child(4)').click(function(e) {
        e.preventDefault();
        $('body').addClass('brown');
        $('body').removeClass('red');
        $('body').removeClass('yellow');
        $('body').removeClass('blue');
    });
});