$(function(){
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: false,
    cssEase: 'linear'
  });

  $('h1').on('mouseover', function(){
    $(this).animate({
      opacity: 0.5,
    });
    $('h1').on('mouseout', function(){
      $(this).animate({
        opacity: 1.0,
      });
    });
  });

  $('#div-a>a').on('mouseover', function(){
    $(this).animate({
      opacity: 0.5,
    });
    $('#div-a>a').on('mouseout', function(){
      $(this).animate({
        opacity: 1.0,
      });
    });
  });

  $(window).scroll(function(){
    if($(window).scrollTop() >=100){
      $('#back-btn').fadeIn();
    } else {
      $('#back-btn').fadeOut();
    }
  });

  $('a[href^="#"]').on('click', function(){
  const target = $(this.hash);
  const position = $(target).offset().top;
  $('html,body').animate({scrollTop:position},400);
  return false;
  });

  $(window).scroll(function(){
    const wHeight = $(window).height();
    const wScroll = $(window).scrollTop();
    $('section').each(function(){
      const bPosition = $(this).offset().top;
      if (wScroll > bPosition - wHeight +200){
      $(this).addClass('fadeIn');  
      }
    });
  });

  $('.item,.item_center').on('click', function(){
    const imgSrc = $(this).children().attr('src');
    $('.bigimg').children().attr('src', imgSrc);
    $('.modal').fadeIn();
    $('body,html').css('overflow-y','hidden');
    return false 
  });

  $('.close-btn').on('click', function(){
    $('.modal').fadeOut();
    $('body,html').css('overflow-y','visible');
    return false
  });

});