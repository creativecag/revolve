/* 

	jquery.revolve.js
	element rotation plugin
	author: chris greninger (cgreninger@gmail.com | www.creativecag.com)
	Copyright 2011-2012 Chris Greninger
	
	Usage Example:
	$('#container').revolve({
		slide : 'p',
		duration : 4000,
		fadeDuration : 1500
	});
	
*/

(function($){
 
    $.fn.extend({ 
         
        // pass the options variable to the function
        revolve: function(options) {
 
            // set the default values
            var defaults = {
                duration : 4000,
                fadeDuration : 1500,
				slide : 'img'
            },
            options =  $.extend(defaults, options);

            return this.each(function() {
                var o = options;
				var $container = $(this);			
			
				// show the first slide immediately.
				$container.find(o.slide + ':first').css('display','block').addClass('active');

				if ($(this).find(options.slide).length > 1) {

					// loop thru slides every o.duration seconds
				 	setInterval(function() {
				
						// set variables for current and next slides
						var $current = $container.find('.active');
						var $next = $current.next(o.slide);

						// if there is not a next slide, set the next variable back to the first slide
						if (! $current.next(o.slide).length > 0) {
							$next = $container.find(o.slide+':first');
						}

						// fade in the next slide on top of current slide
						$next.stop(true,true).fadeIn(o.fadeDuration).addClass('active');

						// fade out current slide
						$current.fadeOut(o.fadeDuration).removeClass('active');
			
					}, o.duration);
				
				}
			
            });
        }
    });
     
})(jQuery);