$(document).ready (function(e){
    //su kien 1
    $('#btn1').click(function(){
        var radioElement=$('.gender');
        for(var i=0;i<radioElement.length;i++){
            if(radioElement[i].checked===true){
                alert('bạn đã chọn giá trị là: '+radioElement[i].value);
            }
        }
    });
    //su kien 2
    $('#submit').click(function(){
        var dk=$('#w3review').val();
        if(dk==="image/Mandy.jpg"){
           $('#hang27').html("<img src='image/Mandy.jpg' width=\'63px\' height=\'103px\'/>");
           
        }else if(dk=="add textbox"){
            var z=$('.sk2');
            for(var i=0;i<z.length;i++){
                z.text('add textbox');
            }
        }
        else if(dk=="remove textbox"){
            var z=$('.sk2');
            for(var i=0;i<z.length;i++){
                z.text("");
            }
        }
    });
    //su kien 3, su kien 8
    $('#clickme').click(function(){
        // var doo=document.getElementsByClassName('sk2');
        var doo=$('.sk2');
        var checkbox1=$('#name1').val();
        var checkbox2=$('#name').val();
        var check=checkbox1+' '+checkbox2;
        if(checkbox1=='' || checkbox2==''){
            for(var i=0;i<doo.length;i++){
                $('.sk2').css('background-color','red');
            }
        }else{
        $('#thongbao').text(check);
        }
    });
    //su kien 4
    $('#btn2').click(function(){
        var radioElement=$('.language');
			for (var i = 0; i < radioElement.length; i++){
                   if(radioElement[i].checked === true){
                          $('#chucmung').text(radioElement[i].value);
                     }
                     
              }
    });
    //su kien 5
    $('#btn3').click(function(){
        var uncheck=$('.language');
			 for (var i = 0; i < uncheck.length; i++){
			 if(uncheck[i].type ==  'checkbox'){
				uncheck[i].checked = false;
			 }
			}
    });
    //su kien 6
    var back=$('#o9');
    $('#submit22').click(function(){
        var x11=$('#combo').val();
        if(x11=='truong1'){
			$('#o9').css('background-color','black');
		}else{
            $('#o9').css('background-color','#FFD966');
        }
    })
    //su kien 7
		$('#browsers').change(function() {
            var x=$('#browsers').val();
            alert('bạn đã thay đổi giá trị combobox là : '+x);
          });
		
    //su kien 9
        $('#btnsub').click(function(){
            alert('chọn đúng trình duyệt là: '+' '+Date());
        });
		
});