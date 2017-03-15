$('.carousel').carousel({
        interval: 2000,
        keyboard:true
    })
 

 $("#myAffix li").each(function(index, el) {
        $(this).click(function(event) {
            console.log($("#section" + (index+1) +"")+ "   "  +$("#section" + (index+1) +"").height());
            console.log($("#section" + (index+1) +"").height());
            // $('body,html').animate({scrollTop:210+$("#section1").height()},800);

            if(index == 0){
                $('body,html').animate({scrollTop:140},800);
            }else if(index == 1){
                $('body,html').animate({scrollTop:140+$("#section1").height()},800);
            }else if(index == 2){
                $('body,html').animate({scrollTop:140+$("#section1").height()+$("#section2").height()},800);
            }
          
        });
    });