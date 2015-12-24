var opacity = 1;
var lastScrollTop = 0;
$(window).scroll(function(){
    var st = $(this).scrollTop();
    if(st == 0)
        $('.navbar').css('opacity','1');
    
    if (opacity > 0.40 && (st > lastScrollTop)){
       $('.navbar').css('opacity','-=0.01');
       opacity -= 0.01;
    }
    else if(opacity < 1)
    {
       $('.navbar').css('opacity','+=0.01');
        opacity += 0.01;
    }
    lastScrollTop = st;
});