$(document).ready(function(){
    $('header i').click(function(){
        $('main').css({
            display : 'block',
        });
    });

    $('.bar_1').click(function(){
        $('main').css({
            display : 'none',
        });
    });
});