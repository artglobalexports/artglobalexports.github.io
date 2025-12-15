/*
	Verti by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			speed: 300
		});

	// Nav.

		// Toggle.
			$(
				'<div id="navToggle">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);

/* Zoom-from-thumb lightbox for media page gallery */
(function($){
	var $overlay = null, $img = null, $close = null, currentThumb = null;

	function createOverlay(){
		$overlay = $('<div id="zoom-overlay"></div>');
		$img = $('<img class="zoom-img" src="" alt="" />');
		$close = $('<div class="zoom-close" aria-label="Close">&times;</div>');
		$overlay.append($img).append($close).appendTo('body');
	}

	function showZoom($thumb, src){
		if(!$overlay) createOverlay();
		currentThumb = $thumb;
		var rect = $thumb[0].getBoundingClientRect();

		// initial image state at thumbnail position
		$img.attr('src', src).css({
			top: rect.top + 'px',
			left: rect.left + 'px',
			width: rect.width + 'px',
			height: rect.height + 'px',
			position: 'absolute'
		});

		$overlay.show().css('opacity', 0);
		$overlay.animate({opacity: 1}, 160);

		// preload to get natural size
		var pre = new Image();
		pre.onload = function(){
			var vw = $(window).width(), vh = $(window).height();
			var maxW = vw - 80, maxH = vh - 120;
			var nw = pre.naturalWidth, nh = pre.naturalHeight;
			var ratio = Math.min(1, Math.min(maxW / nw, maxH / nh));
			var targetW = Math.round(nw * ratio), targetH = Math.round(nh * ratio);
			var targetLeft = Math.round((vw - targetW) / 2);
			var targetTop = Math.round((vh - targetH) / 2);

			$img.css({transition: 'all 360ms cubic-bezier(.2,.8,.2,1)'});

			// force repaint
			$img[0].getBoundingClientRect();

			// animate to center size
			$img.css({top: targetTop + 'px', left: targetLeft + 'px', width: targetW + 'px', height: targetH + 'px'});

			// show close button after animation
			setTimeout(function(){
				$close.css({display:'block', top: (targetTop + 8) + 'px', left: (targetLeft + targetW - 38) + 'px'});
				$('html').addClass('zoom-open');
			}, 380);
		};
		pre.src = src;
	}

	function hideZoom(reverse){
		if(!$overlay) return;
		$close.hide();
		if(!currentThumb || !currentThumb.length){
			$overlay.fadeOut(180);
			$('html').removeClass('zoom-open');
			return;
		}
		var rect = currentThumb[0].getBoundingClientRect();
		$img.css({transition: 'all 260ms ease'});
		$img.css({top: rect.top + 'px', left: rect.left + 'px', width: rect.width + 'px', height: rect.height + 'px'});
		setTimeout(function(){
			$overlay.fadeOut(180, function(){
				$img.attr('src','');
			});
			$('html').removeClass('zoom-open');
		}, 280);
	}

	// Open
	$(document).on('click', '.media-gallery a.image.fit', function(e){
		e.preventDefault();
		var $link = $(this);
		var $thumb = $link.find('img').first();
		if(!$thumb.length) return;
		var href = ($link.attr('href') || '').trim();
		var src = $thumb.attr('src');
		// If href is empty or just an anchor (#), ignore it and use the thumbnail src
		if (href && href !== '#' && href.indexOf('#') !== 0) src = href;
		showZoom($thumb, src);
	});

	// Close on overlay click or close button
	$(document).on('click', '#zoom-overlay, #zoom-overlay .zoom-close', function(e){
		e.preventDefault();
		if($(e.target).is('.zoom-img')) return;
		hideZoom(true);
	});

	// ESC to close
	$(document).on('keydown', function(e){
		if(e.key === 'Escape' || e.keyCode === 27){
			hideZoom(true);
		}
	});

	// Reposition close on resize
	$(window).on('resize', function(){
		if(!$overlay || !$overlay.is(':visible') || !$img.attr('src')) return;
		// reposition close near image center target if visible
		// simple approach: hide on resize
		hideZoom(false);
	});

})(jQuery);