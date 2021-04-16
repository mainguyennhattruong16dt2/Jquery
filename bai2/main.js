//cho tai tai lieu xong
$(document).ready(function(){
    //sự kiện 1 đọc html
    document.getElementById('btb1').onclick=function(){
        var html=$('#div1').html();
        alert(html);
    };
    //sự kiện 2 gán HTML
    document.getElementById('btb2').onclick=function(){
        $('#div1').html("<a href='#'>Đây là liên kết mới</a>")
    };
    //sự kiện 3
    document.getElementById('btb3').onclick=function(){
        var text=$('#div1').text();
        alert(text);
    };
    //sự kiện 4 gán text
    document.getElementById('btb4').onclick=function(){
        $('#div1').text("<p>Đây là thẻ nội dung p mới được thêm</p>");
    };
    //sự kiện 5 gán nội dung mới vào cuối
    document.getElementById('btb5').onclick=function(){
        $('#div1').append("<br><b>nội dung in đậm mới được gắn vào</b>")
    };
    //sự kiện 6 gán nội dung mới vào đầu
    document.getElementById('btb6').onclick=function(){
        $('#div1').prepend("<i>gán nội dung mới vào đầu</i><br>")
    };
    //sự kiện 7 gán nội dung vào cuối như sự kiện 5 nhưng khác cú pháp
    document.getElementById("btb7").onclick=function(){
        $('<b>nội dung mới nhưng khác cú pháp</b>').appendTo('#div1');
    };
    //sự kiện 8 gán nội dung mới vào đầu như sự kiện 6 nhưng khác cú pháp
    document.getElementById('btb8').onclick=function(){
        $('<i>nội dung mới được gắn vào khác cú pháp</i><br>').prependTo('#div1')
    };
    //sự kiện 9 gán thêm thẻ vào cuối bên ngoài của thẻ html
    document.getElementById('btb9').onclick=function(){
        $('#div1').after('<div style="color:red">mai nguyễn nhật trường</div>')
    };
    //sự kiện 10 thêm thẻ vào đầu bên ngoài thẻ HTML
    document.getElementById('btb10').onclick=function(){
        $('#div1').before('<div style="color:blue">thêm vào đầu nhưng bên ngoài Html</div>')
    }
    //sự kiện 11 insert vào đổi cú pháp nhưng kết quả giống sự kiện 9
    document.getElementById('btb11').onclick=function(){
        $('<div>nội dung chèn vào sau cùng thay đổi cú pháp</div>').insertAfter('#div1');
    };
    //sự kiện 12 insert vào đổi cú pháp nhưng kết quả giống sự kiện 10
    document.getElementById('btb12').onclick=function(){
        $('<div>nội dung được chèn trước html nhưng thay đổi cú pháp</div>').insertBefore('#div1');
    }
    //sự kiện 13 unwrap xóa thẻ cha bao bọc bên ngoài
    document.getElementById('btb13').onclick=function(){
        $('#span').unwrap();
    }
    //sự kiện 14 replace with thay thế nội dung cũ thành nội dung mới
    document.getElementById('btb14').onclick=function(){
        $('#div1').replaceWith('<div style="background-color:green">thẻ thay thế mới</div>')
    }
    //sự kiện 15 tác dụng giống sự kiện 14 nhưng khác cú pháp
    document.getElementById('btb15').onclick=function(){
        $('<div style="background-color:orange">nội dung thay thế giống sự kiện 14 khác cú pháp</div>').replaceAll('#div1');
    }
});
