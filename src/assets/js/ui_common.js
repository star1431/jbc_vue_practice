import $ from 'jquery';
$(function(){
    var moblieMenu = function(){
        //모바일메뉴 클릭 이벤트
        var menuBtn = $('.mo_gnb .btn_wrap button');
        menuBtn.click(function(){
            $(this).hide();
            $(this).siblings().show();
            var menuClose = $('.btn_wrap .menu_close');
            if(!menuClose.is(':visible')){
                dimBg.hide();
                $('.mo_gnb').removeClass('active');
                $('.mo_gnb').animate({width:'0'},200);
                $('.mo_menu').hide();
            } else {
                dimBg.show();
                $('.mo_gnb').addClass('active');
                $('.mo_gnb').animate({width:'50%'},200);
                $('.mo_menu').delay(150).fadeIn();
            }
        });
        //bg 클릭시
        var dimBg = $('#header .dimmed');    
        dimBg.click(function(){
            $('.mo_gnb').animate({width:'0'},200);
            $('.mo_menu , .menu_close').hide();
            $(this).hide();
            $('.menu_open').show();
        });
        //메뉴클릭
        var linkTag=$('.mo_menu a');
        linkTag.click(function(){
            $('.mo_gnb').animate({width:'0'},200);
            $('.mo_menu , .menu_close').hide();
            dimBg.hide();
            $('.menu_open').show();
        });
        $('.acco p,.acco a').click(function(){
            let acco = $(this).parent('.acco').siblings('.acco');
            $(this).toggleClass('active');
            acco.children('p,a').removeClass('active');
            acco.children('ul').slideUp();

            if ($(this).siblings('ul').is(':hidden')){
               $(this).siblings('ul').slideDown();
            } else {
               $(this).siblings('ul').slideUp();
            }
         });
    }
    moblieMenu();
});
