var audio =$('audio')[0];
var x= $('#text');

module.exports = function(){
    var b= x.val();
    audio.src=b;
    localStorage.setItem('url', b);
    var storage= localStorage.getItem(b);
    console.log(storage);
};
