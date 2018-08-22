import $ from 'jquery';

function createSticky(sticky, elToAddClass = sticky) {
  if (typeof sticky === 'undefined') {
    return;
  }
  const pos = sticky.offset().top;
  const $win = $(window);
  $win.on('scroll', () => {
    $win.scrollTop() >= pos ? elToAddClass.addClass('fixed') : elToAddClass.removeClass('fixed');
  });

}

export default createSticky;
