//cho tai tai lieu xong
$(document).ready(function(){
    sukien();
  
});
function sukien(){
    $('#show').click(function(){
        $('#image').show(800,function(){
            $('#image').hide(800);
        });
    });
    $('#hide').click(function(){
        $('#image').hide(800,function(){
            $('#image').show(800);
        });
    });
    $('#change').click(function(){
        $('#image').toggle(800);
    });
    $('#sl').click(function(){
        // $('#image').slideDown(1000);
        $( "#image" ).slideDown(800);  
    });
    $('#sl1').click(function(){
        $('#image').slideUp(800);
    });
    $('#sl2').click(function(){
        $('#image').slideToggle(800);
    });
    $('#fadein').click(function(){
        $('#image').fadeIn(8000);
    })
    $('#fadeout').click(function(){
        $('#image').fadeOut(8000);
    })
    $('#fadetoggle').click(function(){
        $('#image').fadeToggle(500);
    })
}