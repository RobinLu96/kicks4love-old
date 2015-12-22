$(window).scroll(function() {
    $('#header_bar').animate({opacity: 0});

    if ($(window).scrollTop() === 0) {
        $('#header_bar').animate({opacity: 1});
    }
});
