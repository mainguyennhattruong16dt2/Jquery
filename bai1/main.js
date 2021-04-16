//cho tai tai lieu xong
$(document).ready(function(){
    var btb=document.getElementById('change');
    btb.onclick=changImage;
});
var current=1;
function changImage(){
    if(current==1){
        $('#hinh').attr("src","./image/2.jpg");
        current=2;
    }else{
        $('#hinh').attr("src","./image/1.jpg");
        current=1;
    }
}
$(document).ready(function(){
    var btb1=document.getElementById('tang');
    btb1.onclick=changImage1;
});
var cur=1;
function changImage1(){
    if(cur==1){
        $('#mandy').addClass('w2');
        cur=2;
    }
    else if(cur==2){
        $('#mandy').addClass('w3');
        cur=3;
    }
    else {
        $('#mandy').removeClass('w2').removeClass('w3');
        cur=1;
    }
}