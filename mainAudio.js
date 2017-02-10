var text = $('#text');
var button =$('#audiobtn');
var fast= $('#fast');
var slow= $('#slow');
var stop=$('#stop');
var audio =$('audio')[0];
var arr = [];
var clickhandler= require ('./clickhandler.js');

button.click(clickhandler);
slow.click(function(){
    audio.playbackRate -= .10;
});


fast.click(function(){
    audio.playbackRate += .10;
});
