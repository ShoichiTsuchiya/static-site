$(".slider .drag").draggable({
  axis: 'x',
  containment: 'parent',
  drag: function(e, ui) {
      var slider = $(this).parent();
      var toggleHover = (slider.hasClass('enabled')) ? (ui.position.left <= $(this).outerWidth()) : (ui.position.left >= (slider.outerWidth() - $(this).outerWidth() * 2));
      slider.addClass('active');
      slider.toggleClass('hover', toggleHover);
  },
  stop: function(e, ui) {
      var slider = $(this).parent();
      if(slider.hasClass('enabled')) {
          if(ui.position.left > $(this).outerWidth()) {
              $(this).animate({
                  left: (slider.outerWidth() - $(this).outerWidth())
              });
              slider.removeClass('hover');
              slider.removeClass('active');
          } else {
              $(this).animate({
                  left: 0
              });
              slider.removeClass();
              slider.children('span').text('Enable');
              $('.result').text('false').removeClass('true');
          }
      } else {
          if(ui.position.left < (slider.outerWidth() - $(this).outerWidth() * 2)) {
              $(this).animate({
                  left: 0
              });
              slider.removeClass('hover');
              slider.removeClass('active');
          } else {
              $(this).animate({
                  left: (slider.outerWidth() - $(this).outerWidth())
              });
              slider.removeClass().addClass('enabled');
              slider.children('span').text('Disable');
              $('.result').text('true').addClass('true');
          }
      }
  }
});
$('h1').on('click', function (){
  console.log('clicked')
})