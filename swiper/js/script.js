var swiper = new Swiper('.swiper-container', {
    //设置滑动方向
    direction: 'vertical',
    // 向右的按钮
    navigation: {
        nextEl: '.swiper-button-next',
    },
    //设置分页小按钮
    pagination: {
        el: '.swiper-pagination',
        //设置小按钮是否可以点击
        clickable: true,
    },
});