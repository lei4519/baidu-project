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

    $('.welcome .rotate-box-btn').click(() => {
        $('.rider-box').addClass('moving')
            .find('.rider')
            .on('animationend', () => {
                $('.welcome').fadeOut(1000, () => {

                })
            })
    })

})