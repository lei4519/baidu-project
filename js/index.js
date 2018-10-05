$(function () {
    new Swiper('.waimai-container', {
        direction: 'vertical'
    })

    setTimeout(() => {
        $('.loading').addClass('animate')
            .find('.rider')
            .on('animationend', () => {
                $('.loading').fadeOut(1000, () => {
                    $('.welcome').addClass('animate')
                })
            })
    }, 1000);

    $('.welcome .rotate-box-btn').longTap(() => {
        $('.rider-box').addClass('rider-moving')
            .on('animationend', () => {
                $('.welcome').fadeOut(1000, () => {
                  $('.page1').addClass('animate')
                })
            })
    })

})