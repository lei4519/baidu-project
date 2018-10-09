$(function () {
  new Swiper('.waimai-container', {
    direction: 'vertical',
    onSlideChangeEnd(swiper) {
      $('.swiper-slide').eq(swiper.activeIndex).addClass('animate')
      $('.swiper-slide').eq(swiper.previousIndex).removeClass('animate')
      if (swiper.activeIndex === 2) {
        $('.swiper-slide').eq(2).addClass('swiper-no-swiping')
      }
      if (swiper.previousIndex === 2) {
        $('.swiper-slide').eq(2).find('div').attr('style', '')
      }
    }
  })

  setTimeout(() => {
    $('.loading').addClass('animate')
      .find('.rider')
      .on('animationend', () => {
        $('.loading').fadeOut(1000, () => {
          $('.welcome').addClass('animate')
        })
      })
  }, 1000)

  $('.welcome .rotate-box-btn').longTap(() => {
    $('.rider-box').addClass('rider-moving')
      .on('animationend', () => {
        $('.welcome').fadeOut(1000, () => {
          $('.page1').addClass('animate')
        })
      })
  })

  $('.page3').click(function () {
    $(this).removeClass('swiper-no-swiping')
    setTimeout(() => {
      $(this).find('.bear').css('animation', 'none')
    }, 1000)
    let index = 0;
    let intervalId = setInterval(() => {

      if (index === 0) {
        $(this).find('.animate-bear-box div').eq(index).css('opacity', 1);
      } else {
        $(this).find('.animate-bear-box div').eq(index - 1).css('opacity', 0);
        $(this).find('.animate-bear-box div').eq(index).css('opacity', 1);
      }
      $(this).find('.normal-card-box div').eq(index).css('animation', 'none')
      $(this).find('.animate-card-box div').eq(index).css('opacity', 1);
      index++
      if (index === 3) {
        clearInterval(intervalId)
        $('.animate-card-box div').css('animation', 'down 1s 0.5s forwards')
      }
    }, 1000)
  })
  
  let audioDom = document.querySelector('audio')
  $('.audioControl').click(function () {
      if (audioDom.paused) {
        audioDom.play()
        $(this).css('background-image', 'url(images/pause.png)')
      } else {
        audioDom.pause()
        $(this).css('background-image', 'url(images/play.png)')
      }
  })
})