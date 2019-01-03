import $ from 'jquery';

function createSticky(sticky, elToAddClass = sticky) {
  if (typeof sticky === 'undefined') {
    return;
  }
  const pos = sticky.offset().top;
  const $win = $(window);
  $win.on('scroll', () => {
    if ($win.scrollTop() >= pos) {
		elToAddClass.addClass('fixed')
		$win.trigger('scroll-sticky-change', [ elToAddClass ]);
	} else {
		elToAddClass.removeClass('fixed');
		$win.trigger('scroll-sticky-change', [ elToAddClass ]);
	}
  });

}

export default createSticky;
