'use strict';
/* ----------------------------- */
/*  ふわっと表示 */
/* ----------------------------- */
$(function () {
  $(window).scroll(function () {
    $('.scroll-fade01,.scroll-fade02,.scroll-fade03,.scroll-fade04,.scroll-fade05,.scroll-fade06,.scroll-fade07,.scroll-fade08').each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 100) {
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateY(0)');
      }
    });
  });
});
/* ----------------------------- */
/*  //ふわっと表示 */
/* ----------------------------- */
/* ----------------------------- */
/*  hamburger-menu */
/* ----------------------------- */
$(function () {
  $('#js-hamburger').click(function () {
    $('body').toggleClass('is-drawerActive');

    if ($(this).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', 'true');
      $('#js-global-menu').attr('area-hidden', 'false');
    } else {
      $(this).attr('aria-expanded', 'false');
      $('#js-global-menu').attr('area-hidden', 'true');
    }
  });

  $('#js-drawer-background').click(function () {
    $('body').removeClass('is-drawerActive');
    $('#js-hamburger').attr('aria-expanded', 'false');
    $('#js-global-menu').attr('area-hidden', 'true');
  });

  $('.hamburger-nav-link').click(function () {
    $('body').removeClass('is-drawerActive');
    $('#js-hamburger').attr('aria-expanded', 'false');
    $('#js-global-menu').attr('area-hidden', 'true');
  });
});
/* ----------------------------- */
/*  //hamburger-menu */
/* ----------------------------- */
/* ----------------------------- */
/*  FAQ-accordion */
/* ----------------------------- */
$(function () {
  $('.price-accordion-btn').on('click', function () {
    $(this).next().toggleClass('is-open');
    $(this).toggleClass('is-active');
  });
});
/* ----------------------------- */
/*  //FAQ-accordion */
/* ----------------------------- */
/* ----------------------------- */
/*  WORKS-swiper */
/* ----------------------------- */
let mySwiper = new Swiper('.swiper-container', {
  centeredSlides: true,
  slidesPerView: 1,
  // 以下にオプションを設定
  breakpoints: {
    // 以上の場合
    425: {
      slidesPerView: 1.7,
    },
    768: {
      slidesPerView: 2.7,
    },
    1024: {
      slidesPerView: 3.7,
    },
  },
  loop: true,
  //最後に達したら先頭に戻る

  //ページネーション表示の設定
  // pagination: {
  // el: '.swiper-pagination',
  //ページネーションの要素
  // type: 'bullets',
  //ページネーションの種類
  // clickable: true,
  //クリックに反応させる
  // },

  //ナビゲーションボタン（矢印）表示の設定
  // navigation: {
  // nextEl: '.swiper-button-next',
  //「次へボタン」要素の指定
  // prevEl: '.swiper-button-prev',
  //「前へボタン」要素の指定
  // },

  autoplay: {
    delay: 5000,
  },

  // slidesPreView: 3.5,
  spaceBetween: 56,
  effect: 'slide',
  //スクロールバー表示の設定
  /* scrollbar: {
    el: '.swiper-scrollbar', //要素の指定
  }, */
});
/* ----------------------------- */
/*  //WORKS-swiper */
/* ----------------------------- */

/* ----------------------------- */
/*  CONTACT-form google form */
/* ----------------------------- */

$(document).ready(function () {
  $('#contact-form').submit(function (event) {
    var formData = $('#contact-form').serialize();
    $.ajax({
      url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeGu7lh8W4rBaqz7EhZQhGpDK95Wk212FK1LUraSNDc9Edenw/formResponse',
      data: formData,
      type: 'POST',
      dataType: 'xml',
      statusCode: {
        0: function () {
          $('.end-message').slideDown();
          $('.submit-btn').fadeOut();
          //window.location.href = "thanks.html";
        },
        200: function () {
          $('.false-message').slideDown();
        },
      },
    });
    event.preventDefault();
  });
});
/* ----------------------------- */
/*  //CONTACT-form google form */
/* ----------------------------- */
/* ----------------------------- */
/*  CONTACT-form check */
/* ----------------------------- */
$(function () {
  $('#submit-button').on('click', function () {
    if ($("input[name = 'entry.748227620']").val() == '') {
      alert('お名前の入力をお願いします');
      return false;
    }
  });
});

$(function () {
  $('#submit-button').on('click', function () {
    if ($("input[name = 'entry.1202613657']").val() == '') {
      alert('e-mailの入力をお願いします');
      return false;
    }
  });
});

$(function () {
  $('#submit-button').on('click', function () {
    if ($("textarea[name = 'entry.1734011286']").val() == '') {
      alert('お問い合わせの内容の入力をお願いします');
      return false;
    }
  });
});

$(function () {
  $('#submit-button').on('click', function () {
    if ($("input[name = 'check']").prop('checked')) {
      return true;
    } else {
      alert('プライバシーポリシーに同意をチェックして下さい');
    }
  });
});

/* ----------------------------- */
/*  //CONTACT-form check */
/* ----------------------------- */
/* ----------------------------- */
/*  top revers btn */
/* ----------------------------- */
$(function () {
  var pageTop = $('.top-re-btn');
  pageTop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });
  pageTop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 300);
    return false;
  });
});
/* ----------------------------- */
/*  //top revers btn */
/* ----------------------------- */
/* ----------------------------- */
/*  smooth-scroll */
/* ----------------------------- */
$(function () {
  $('a[href^="#"]:not([href="#"])').click(function () {
    var target = $($(this).attr('href')).offset().top;
    target -= 150;
    $('html, body').animate({ scrollTop: target }, 300);
    return false;
  });
});
/* ----------------------------- */
/*  //smooth-scroll */
/* ----------------------------- */
