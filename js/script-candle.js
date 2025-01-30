$(function() {
  var flame = $('#flame');
  var txt = $('h1');

  flame.on('click', function() {
    flame.removeClass('burn').addClass('puff');
    $('.smoke').each(function() {
      $(this).addClass('puff-bubble');
    });
    $('#glow').remove();
    txt.hide().html("It <b>will</b> come true..").delay(300).fadeIn(300);
    $('#candle').animate({ 'opacity': '.5' }, 100);
  });

  // ฟังก์ชันรีเซ็ต
  $('#refresh').on('click', function() {
    flame.removeClass('puff').addClass('burn');
    $('.smoke').removeClass('puff-bubble');
    $('body').append('<div id="glow"></div>'); // ใส่ glow กลับมา
    txt.hide().html("Make a wish...").delay(300).fadeIn(300);
    $('#candle').animate({ 'opacity': '1' }, 100);
  });
});