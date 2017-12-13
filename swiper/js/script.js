var swiper = new Swiper('.swiper-container', {
    effect : 'cube',
    direction: 'vertical',
    navigation: {
        nextEl: '.swiper-button-next',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    on:{
        init: function(){
            swiperAnimateCache(this);
            swiperAnimate(this);
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this);
        }
    }
});
var mp3 = document.querySelector("#mp3");

var mp3Btn = document.querySelector("#mp3Btn");
//mp3Btn.style.animationPlayState = 'paused'

//mp3Btn.style.animationPlayState = 'running'

mp3Btn.onclick = function () {
    if (mp3.paused) {
        mp3Btn.style.animationPlayState = 'running';
        mp3.play();
    } else {
        mp3Btn.style.animationPlayState = 'paused';
        mp3.pause();
    }
}