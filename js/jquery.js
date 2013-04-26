$(document).ready(function() {
    
    $('#sub_menu ul li').hover(function(){
        $('li.active_sub').removeClass('active_sub');
        $(this).addClass('active_sub');
    });
    
    $('#sub_menu li').click(function(){
        $('li.active_sub').removeClass('active_sub');
        $(this).addClass('active_sub');
    });
    
    $('#sub_menu ul li.app').hover(function(){
        $(".drop_down>ul").each(function(){
            $(this).css('display','none')
        })
        $('.dropdown_1').css('display','block');
        
        
    });
    
    $('#sub_menu ul li.bag').hover(function(){
        $(".drop_down>ul").each(function(){
            $(this).css('display','none')
        })
        $('.dropdown_2').css('display','block');
        
    });
    $('#sub_menu ul li.drink').hover(function(){
        $(".drop_down>ul").each(function(){
            $(this).css('display','none')
        })
        $('.dropdown_3').css('display','block');
        
    });
    $('#sub_menu ul li.tech').hover(function(){
        $(".drop_down>ul").each(function(){
            $(this).css('display','none')
        })
        $('.dropdown_4').css('display','block');
        
    });
    $('#sub_menu ul li.home').hover(function(){
        $(".drop_down>ul").each(function(){
            $(this).css('display','none')
        })
        $('.dropdown_5').css('display','block');
        
    });
    $('#sub_menu ul li.off').hover(function(){
        $(".drop_down>ul").each(function(){
            $(this).css('display','none')
        })
        $('.dropdown_6').css('display','block');
        
    });
    $('#sub_menu ul li.spor').hover(function(){
        $(".drop_down>ul").each(function(){
            $(this).css('display','none')
        })
        $('.dropdown_7').css('display','block');
        
    });
    
    $('#sub_menu ul li.app').click(function(){
        $(".drop_down>ul").each(function(){
            $(this).css('display','none')
        })
        $('.dropdown_1').css('display','block');
        
    });
    
    $('#sub_menu ul li.bag').click(function(){
        $(".drop_down>ul").each(function(){
            $(this).css('display','none')
        })
        $('.dropdown_2').css('display','block');
        
    });
    $('#sub_menu ul li.drink').click(function(){
        $(".drop_down>ul").each(function(){
            $(this).css('display','none')
        })
        $('.dropdown_3').css('display','block');
        
    });
    $('#sub_menu ul li.tech').click(function(){
        $(".drop_down>ul").each(function(){
            $(this).css('display','none')
        })
        $('.dropdown_4').css('display','block');
        
    });
    $('#sub_menu ul li.home').click(function(){
        $(".drop_down>ul").each(function(){
            $(this).css('display','none')
        })
        $('.dropdown_5').css('display','block');
        
    });
    $('#sub_menu ul li.off').click(function(){
        $(".drop_down>ul").each(function(){
            $(this).css('display','none')
        })
        $('.dropdown_6').css('display','block');
        
    });
    $('#sub_menu ul li.spor').click(function(){
        $(".drop_down>ul").each(function(){
            $(this).css('display','none')
        })
        $('.dropdown_7').css('display','block');
        
    });
    
});