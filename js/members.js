(function() {
	
	function init() {
		var speed = 250,
			easing = mina.easeinout;

		[].slice.call ( document.querySelectorAll( '.membercard > a' ) ).forEach( function( el ) {
			var s = Snap( el.querySelector( 'svg' ) ), path = s.select( 'path' ),
				pathConfig = {
					from : path.attr( 'd' ),
					to : el.getAttribute( 'data-path-hover' )
				};

			el.addEventListener( 'mouseenter', function() {
				path.animate( { 'path' : pathConfig.to }, speed, easing );
			} );

			el.addEventListener( 'mouseleave', function() {
				path.animate( { 'path' : pathConfig.from }, speed, easing );
			} );
		} );
	}

	init();

})();

//responsive menu

let menuIcon = document.querySelector('.menuIcon');
let nav = document.querySelector('.overlay-menu');

menuIcon.addEventListener('click', () => {
	if (nav.style.transform != 'translateX(0%)') {
		nav.style.transform = 'translateX(0%)';
		nav.style.transition = 'transform 0.2s ease-out';
	} else { 
		nav.style.transform = 'translateX(-100%)';
		nav.style.transition = 'transform 0.2s ease-out';
	}
});


// Toggle Menu Icon ========================================
let toggleIcon = document.querySelector('.menuIcon');

toggleIcon.addEventListener('click', () => {
	if (toggleIcon.className != 'menuIcon toggle') {
		toggleIcon.className += ' toggle';
	} else {
		toggleIcon.className = 'menuIcon';
	}
});