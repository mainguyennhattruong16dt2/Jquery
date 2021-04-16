//cho tai tai lieu xong
$(document).ready(function(){
    //sự kiện trình duyệt resize 
    $(window).resize(function(){
        var x=$(window).width();
        var y=$(window).height();
        $('#thu').html('trình duyệt có chiều rộng'+x+('px và cao')+y+'px');

    });

   
});
