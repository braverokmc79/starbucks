const searchEl= document.querySelector('.search');
const searchInputEl=searchEl.querySelector("input");


searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder',"통합검색");
});


searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder',"");
});



//const badgeEl=searchEl.querySelector("header .badges");
const badgeEl=$("header .badges");

window.addEventListener("scroll", _.throttle(function(){
    //console.log("scroll!! ", window.scrollY);
    if(window.scrollY > 500){
        //배지 숨기기
        //$(".badges").hide();
        //gsap.to(요소, 지속시간,옵션);
       gsap.to(badgeEl, .6, {
            opacity:0,
            display:'none'
        });

    }else{
        //배지 보이기
       // $(".badges").show();
       gsap.to(badgeEl, .6, 
        {
            opacity:1,
            display:'block'
        });
    }
    
}, 500));
//_.throttle(함수,시간)

const fadeEls=document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){

      //gsap.to(요소, 지속시간,옵션);
    gsap.to(fadeEl, 1, {
        delay:(index+1)*.7,
        opacity:1,
    });

});


new Swiper(".notice .notice-line .swiper-container .swiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 3,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
});

new Swiper(".promotion .swiper-container .swiper", {    
    slidesPerView: 3, //한번에 보여줄 슬라이드 개수
    spaceBetween:10,  //슬라이드 사이 여백
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 555500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".promotion  .swiper-pagination",
      clickable: true,  //사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation:{
        nextEl: ".promotion .swiper-button-next",
        prevEl: ".promotion .swiper-button-prev",
    }
});


// const promotionEl=document.querySelector(".promotion");
// //const promotionToggleBtn=promotionEl.querySelector(".toggle-promotion");
// const promotionToggleBtn=$(".toggle-promotion")
// let isHidePromotion=false;


$(function(){
    let isHidePromotion=false;
    $(".toggle-promotion").on("click", function(){
        isHidePromotion=!isHidePromotion;
        if(isHidePromotion){
            $(".promotion").addClass("hide");
            return;
        }else{
            $(".promotion").removeClass("hide");
        }
    });

});


function random(min, max) {
    return parseFloat(( Math.random() * (max - min + 1) + min)); 
}


function floatingObject(selector, delay, size){
    gsap.to(selector,//선택자
        random(1.5, 2.5), //애니메이션 동작 시간
    { //옵션
        y:size ,
        repeat:-1 ,
        yoyo:true,
        ease:Power1.easeInOut,
        delay:random(0, delay)     
    });
}
floatingObject('.floating1' , 1 ,15);
floatingObject('.floating2' , .5 ,15);
floatingObject('.floating3' , 1.5 ,20);



const spyEls=document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl, index){
    new ScrollMagic
        .Scene({
             triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
             triggerHook: .8,
        })
        .setClassToggle(spyEl,"show")
        .addTo(new ScrollMagic.Controller());
});











