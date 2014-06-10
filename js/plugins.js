
// header opacity
$(window).scroll(function(){ 

    if ($(this).scrollTop() > 0){ 
        $('.border-top').css('padding-top','20px').stop().clearQueue().animate({opacity:1}, 400);
    } else {
        $('.border-top').css('padding-top','200px').stop().clearQueue().animate({opacity:1}, 400);
    }
});

// $(window).scroll(function(){
//     if ($(window).scrollTop() > 50){
//         $('.header').css('background','rgb(200, 54, 54)').stop().animate({"opacity":".5"},1000)
//     }
//     else if ($(window).scrollTop() < 50){
//         $('.header').css('background','rgb(200, 54, 54)').stop().animate({"opacity":"1"},1000)
//     }
// });    




// animated background

            $(document).ready(function(){ 
                var scroll_pos = 0;
                var animation_begin_pos = 0;
                var animation_middle_pos = $(document).height()/2-250;
                console.log( 'mid pos: ', animation_middle_pos );
                var animation_end_pos = $(document).height() - $(".content-3").height();
                console.log( 'end pos: ', animation_end_pos );
                var beginning_color = new $.Color( 'rgb(153,204,102)' ); 
                var middle_color = new $.Color( 'rgb(102,153,204)' ); ;
                var ending_color = new $.Color( 'rgb(204,153,103)' ); ;

                $(document).scroll(function() {
                    scroll_pos = $(this).scrollTop(); 
                     // top half        
                    if(scroll_pos >= animation_begin_pos && scroll_pos <= animation_middle_pos ) { 
                        var percentScrolled = scroll_pos / ( animation_middle_pos - animation_begin_pos );
                        var newRed = beginning_color.red() + ( ( middle_color.red() - beginning_color.red() ) * percentScrolled );
                        var newGreen = beginning_color.green() + ( ( middle_color.green() - beginning_color.green() ) * percentScrolled );
                        var newBlue = beginning_color.blue() + ( ( middle_color.blue() - beginning_color.blue() ) * percentScrolled );
                        var newColor = new $.Color( newRed, newGreen, newBlue );
                        // console.log( newColor.red(), newColor.green(), newColor.blue() );
                        $('body').animate({ backgroundColor: newColor }, 0);
                    } else if ( scroll_pos > animation_begin_pos ) {
                         $('body').animate({ backgroundColor: middle_color }, 0);
                    } else if ( scroll_pos < animation_middle_pos ) {
                         $('body').animate({ backgroundColor: beginning_color }, 0);
                    } else { }
                   // bottom half        
                    if(scroll_pos >= animation_middle_pos && scroll_pos <= animation_end_pos ) { 
                        var percentScrolled = (animation_middle_pos - scroll_pos) / ( animation_middle_pos - animation_end_pos );
                        // console.log( 'percent scrolled', percentScrolled );
                        var newRed = middle_color.red() + ( ( ending_color.red() - middle_color.red() ) * percentScrolled );
                        var newGreen = middle_color.green() + ( ( ending_color.green() - middle_color.green() ) * percentScrolled );
                        var newBlue = middle_color.blue() + ( ( ending_color.blue() - middle_color.blue() ) * percentScrolled );
                        var newColor = new $.Color( newRed, newGreen, newBlue );
                        // console.log( newColor.red(), newColor.green(), newColor.blue() );
                        $('body').animate({ backgroundColor: newColor }, 0);
                    } else if ( scroll_pos > animation_middle_pos ) {
                         $('body').animate({ backgroundColor: ending_color }, 0);
                    } else if ( scroll_pos < ending_color ) {
                         $('body').animate({ backgroundColor: middle_color }, 0);
                    } else { }
                });
              });

      