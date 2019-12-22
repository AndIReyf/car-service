$(function () {

  $('.service-slider').slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: true,
    dots: true,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev icon-angle-left"></button>',
    nextArrow: '<button type="button" class="slick-next icon-angle-right"></button>',
    
  });


  $('.projects__content').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function (item) {
        return item.el.attr('title') + '<small>by Andy</small>';
      }
    }
  });


  $('.repair__slider').slick({
    slidesToScroll: 1,
    slidesToShow: 2,
    arrows: false,
    dots: true,
     responsive: [{
         breakpoint: 1200,
         settings: {
           slidesToShow: 1,
         }
       },
       {
         breakpoint: 851,
         settings: {
           slidesToShow: 2,
         }
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 1,
         }
       }

     ]
  });


  $('.review__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev icon-angle-left"></button>',
    nextArrow: '<button type="button" class="slick-next icon-angle-right"></button>',
    responsive: [{
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        }
      }
    ]
  });


  $('.main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.sub-slider'
  });
  $('.sub-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.main-slider',
    dots: false,
    vertical: true,
    verticalSwiping: true,
    prevArrow: '<button type="button" class="slick-prev icon-angle-down"></button>',
    nextArrow: '<button type="button" class="slick-next icon-angle-up"></button>',
    responsive: [{
        breakpoint: 1250,
        settings: {
          slidesToShow: 4,
          vertical: false,
          verticalSwiping: false,
          prevArrow: '<button type="button" class="slick-prev icon-angle-left"></button>',
          nextArrow: '<button type="button" class="slick-next icon-angle-right"></button>',
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          vertical: false,
          verticalSwiping: false,
          prevArrow: '<button type="button" class="slick-prev icon-angle-left"></button>',
          nextArrow: '<button type="button" class="slick-next icon-angle-right"></button>',
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          vertical: false,
          verticalSwiping: false,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          vertical: false,
          verticalSwiping: false,
          arrows: false,
          dots: true,
        }
      }
    ]
  });

  $('.header__burger').click(function () {
    $('.header__burger, .header__nav').toggleClass('active');
    $('html, body').toggleClass('lock');
  });

});