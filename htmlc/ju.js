jQuery(document).ready(function($){
 
    $('#back').click(function(){$('html,body').animate({scrollTop: '0px'}, 800);}); 
    $('#next').click(function(){
        $('html,body').animate(
            {scrollTop:$('#select').offset().top}, 800);
        });
    $('#go').click(function(){
        $('html,body').animate(
            {scrollTop:$('#about').offset().top}, 800);
        });
});