var mySwiper= new Swiper('.swiper-container', {
	  direction:'horizontal',
	  loop: true,
    autoplay: 5000,
    pagination : '.swiper-pagination',
    paginationClickable :true,
    preventClicks : false,
    noSwiping : true,
	  effect : 'coverflow',
})

var swiper=new Swiper('.swiper-container2',{
        freeMode: true,
        spaceBetween: 15,
        loop: true,
        slidesPerView:3.5,
        
});

function go_Back(){
    $('body,html').animate({ scrollTop: 0 }, 200);
}
$(window).scroll(function(){
    var scrollTop = $(document.documentElement).scrollTop()|| $(document.body).scrollTop(); 
    var clientwidth=($(document).height()-$(window).height());
    if(scrollTop > 100){
        $('#gotop').show();
      }else if(scrollTop < 100){
        $('#gotop').hide();
      }
});

$('.cart').off().on('click',function(){
  	$('.space_warp,.shadow').addClass('active');
		
	});

    $('.shadow').off().on('click',function(){
	    $('.shadow,.space_warp').removeClass('active');
		
});

$(function() {
    $(".lazy").lazyload({effect: "fadeIn"});
});

function scrollNews(){
  $(document).ready(function(){
     $('.news li').eq(0).fadeOut("slow",function(){
         $(this).clone().appendTo($(this).parent()).fadeIn("slow");
         $(this).remove();
    });
  });
}
setInterval('scrollNews()',2000);

function addZero(n) {

	return n < 10 ? '0' + n : n;

}
;(function(){
     var d = new Date();
    nowHour = d.getHours();
    var msHour;
    if(nowHour % 2== 0){
        msHour = nowHour
    }else{
     msHour = nowHour - 1;
    }
    $(".dc i").html(msHour)
})();

;(function(){
    function countDown() {
    var time = new Date();
    var s = time.getHours();
    var t = s % 2 == 0 ? 2 : 1;
    time.setHours(s+t);
    time.setMinutes(0);
    time.setSeconds(0);
    let d = new Date();
    var t1 = addZero(parseInt((time - d)/1000/3600));
    var m = addZero(parseInt((time - d)/1000 / 60 % 60)) ;
    var s1 = addZero(parseInt((time -d)/1000%60));
    $('.hour').html(t1);
    $('.minutes').html(m);
    $('.seconds').html(s1);
  }
    setInterval(countDown,1000);

})();

 $(document).ready(function(){
     $(window).scroll(function() {
         var top = 75; //获取指定位置
         var scrollTop = $(window).scrollTop();  //获取当前滑动位置
         if(scrollTop > top){                 //滑动到该位置时执行代码
             $(".header").addClass("active");
                }else{
                    $(".header").removeClass("active");
        }
    });
 });