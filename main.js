var v= $('video')[0];


v.playbackRate=1.5;
v.currentTime=0;


$('.video1').parent().click(function () {
    if($(this).children(".video1").get(0).paused){
        $(this).children(".video1").get(0).play();
        $(this).children(".playpause").fadeOut();
    }else{
       $(this).children(".video1").get(0).pause();
        $(this).children(".playpause").fadeIn();
    }
});
$('#fast').click(function(){
    $('video')[0].playbackRate += 5.10;
})
$('#slow').click(function(){
    $('video')[0].playbackRate -= .9;
})
