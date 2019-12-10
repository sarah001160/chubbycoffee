$('document').ready(function(){
    $('.dropdown').slideUp();
    $('.click').click(function(e){
        $(this).find('.dropdown').slideToggle();
        $(this).find('.dropdown').sibiling().slideUp();  
    })

   //swiper套件
   var swiper = new Swiper('.swiper-container', {
    speed:600,
    loop:true,
    autoplay:{
        delay:2000
    },
    navigation: {

      nextEl: '.swiper-button-next',

      prevEl: '.swiper-button-prev',
    }
  });

    //滾動視差的套件
    $('.parallax-window').parallax({imageSrc:'./img/tree3.jpg'});
    
    //取消所有預設行為,點選a連結時畫面不會跳到最上方
   // $('a').click(function(e){
    //    e.preventDefault();
   // })
});


//卷軸滾動到一定高度出現元素
$('document').ready(function(){
    $(window).scroll(function(){ 
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        $('.animate').each(function(){
            var thisPos = $(this).offset().top;
            if((scrollPos+windowHeight) >= thisPos){
                $(this).addClass('fadeIn');
            }
        })
        //console.log(scrollPos);
    })

})
 



