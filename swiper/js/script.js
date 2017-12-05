var swiper = new Swiper('.swiper-container', {
    loop : true,
    direction: 'vertical',
    autoplay:true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',

    },

});