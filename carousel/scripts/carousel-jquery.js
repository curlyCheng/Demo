(function($) {
	$.fn.slide = function(opts) {
		opts = $.extend({}, $.fn.slide.opts, opts);
		var slideShow = $('#slide-show');
		var slides = slideShow.find('li');
		var $prev = $('.slide-wrapper .prev');
		var $next = $('.slide-wrapper .next');
		var $btns = $('#slide-box li');
		var count = slides.length - 2;
		var index = 1;
		var timer
		var interval = opts['interval'];
		var width = opts['width'];
		$(this).css('width', width + 'px');
		slideShow.css('left', '-' + width + 'px');

		function animate(offset) {
			var set;
			var left = parseInt(slideShow.css('left')) + offset;
			if (offset > 0) set = '+=' + offset;
			if (offset < 0) set = '-=' + Math.abs(offset);
			slideShow.animate({
				'left': set
			}, opts['milesecond'], function() {
				if (left > -200)
					slideShow.css('left', '-' + width * count + 'px');
				if (left < -width * count)
					slideShow.css('left', '-' + width + 'px');
			});
		}
		function buttons(){
			$btns.eq(index-1).addClass('show').siblings().removeClass('show');
		}

		function play() {
			timer = setTimeout(function() {
				$next.trigger('click');
				play();
			}, interval);
		}

		function stop() {
			clearTimeout(timer);
		}

		$prev.on('click', function() {
			if (slideShow.is(':animated')) {
				return;
			}
			if (index == 1) index = count;
			else index--;
			animate(width);
			buttons();
		});

		$next.on('click', function() {
			if (slideShow.is(':animated')) {
				return;
			}
			if (index == count) index = 1;
			else index++;
			animate(-width);
			buttons();
		});

		$btns.each(function(){
			$(this).click(function(){
				if(slideShow.is(':animated') || $(this).hasClass('show'))
					return;
				toIndex = parseInt($(this).attr('index'));
				var offset = -width * (toIndex - index);

				animate(offset);
				index = toIndex;
				buttons();
			})
		});

		$(this).hover(stop, play);
		play();
	}
	$.fn.slide.opts = {
		width: 550,
		interval: 3000,
		milesecond: 1500
	};
})(jQuery);