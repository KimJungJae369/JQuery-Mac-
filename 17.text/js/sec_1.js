$(document).ready(function(){
    var num = 0;

    setInterval(function(){
        num++;
        
        if(num > 2){
            num = 0;
        }

        $('.video_wrap').animate({
            left: num * -100 + 'vw'
        }, 1000);
    }, 5000);
});