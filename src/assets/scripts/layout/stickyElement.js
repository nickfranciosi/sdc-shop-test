import $ from 'jquery';

function createSticky(sticky) {
  if (typeof sticky === 'undefined') {
    return;
  }
  const pos = sticky.offset().top;
  const $win = $(window);
  $win.on('scroll', () => {
    $win.scrollTop() >= pos ? sticky.addClass('fixed') : sticky.removeClass('fixed');
  });

}

export default createSticky;
