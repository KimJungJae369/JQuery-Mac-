$(document).ready(function(){
    var sec_1 = $('#section_1').height();


    $('.btn').eq(0).click(function(){
        $('html,body').animate({
            scrollTop : 0,
        });

        $('.btn').removeClass('active');
        $(this).addClass('active');
    });

    $('.btn').eq(1).click(function(){
        $('html,body').animate({
            scrollTop : 10 + sec_1,
        });

        $('.btn').removeClass('active');
        $(this).addClass('active');
    });

    $(window).scroll(function(){
        var page = $(window).scrollTop();

        if(page >= sec_1){
            $('#section_2').css({
                backgroundColor : 'rgb(103, 103, 103)',
            });   
        }else{
            $('#section_2').css({
                backgroundColor : 'white',
            });   
        }
    });
});