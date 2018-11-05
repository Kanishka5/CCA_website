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

//loader



//onclick functions

function abt() {
	loader = new SVGLoader( document.getElementById( 'loader' ), { speedIn : 300 } );
	let about = document.getElementById('about');
	let arhn = document.getElementById('arhn');
	let cells = document.getElementById('cells');
	let member = document.getElementById('team');
	let contact = document.getElementById('contact');
	let nav = document.querySelector('.overlay-menu');
	let toggleIcon = document.querySelector('.menuIcon');
	about.style.display="block";
	arhn.style.display="none";
	cells.style.display="none";  
	member.style.display="none";
	contact.style.display="none";
	toggleIcon.className = 'menuIcon';
	nav.style.transform = 'translateX(-100%)';
	nav.style.transition = 'transform 0.2s ease-out';
	loader.show();
					  // after some time hide loader
					  setTimeout( function() {
						  loader.hide();
					  }, 1000 );
  };

  function arhn() {
	loader = new SVGLoader( document.getElementById( 'loader' ), { speedIn : 300 } );
	let about = document.getElementById('about');
	let arhn = document.getElementById('arhn');
	let cells = document.getElementById('cells');
	let member = document.getElementById('team');
	let contact = document.getElementById('contact');
	let nav = document.querySelector('.overlay-menu');
	let toggleIcon = document.querySelector('.menuIcon');
	about.style.display="none";
	arhn.style.display="block";
	cells.style.display="none";  
	member.style.display="none";
	contact.style.display="none";
	toggleIcon.className = 'menuIcon';
	nav.style.transform = 'translateX(-100%)';
	nav.style.transition = 'transform 0.2s ease-out';
	loader.show();
					  // after some time hide loader
					  setTimeout( function() {
						  loader.hide();
					  }, 1000 );
  };

  function cells() {
	loader = new SVGLoader( document.getElementById( 'loader' ), { speedIn : 300 } );
	let about = document.getElementById('about');
	let arhn = document.getElementById('arhn');
	let cells = document.getElementById('cells');
	let member = document.getElementById('team');
	let contact = document.getElementById('contact');
	let nav = document.querySelector('.overlay-menu');
	let toggleIcon = document.querySelector('.menuIcon');
	about.style.display="none";
	arhn.style.display="none";
	cells.style.display="block";  
	member.style.display="none";
	contact.style.display="none";
	toggleIcon.className = 'menuIcon';
			nav.style.transform = 'translateX(-100%)';
  nav.style.transition = 'transform 0.2s ease-out';
	loader.show();
					  // after some time hide loader
					  setTimeout( function() {
						  loader.hide();
					  }, 1000 );
  };

  function members() {
	loader = new SVGLoader( document.getElementById( 'loader' ), { speedIn : 300 } );
	let about = document.getElementById('about');
	let arhn = document.getElementById('arhn');
	let cells = document.getElementById('cells');
	let member = document.getElementById('team');
	let contact = document.getElementById('contact');
	let nav = document.querySelector('.overlay-menu');
	let toggleIcon = document.querySelector('.menuIcon');
	about.style.display="none";
	arhn.style.display="none";
	cells.style.display="none";  
	member.style.display="block";
	contact.style.display="none";
	toggleIcon.className = 'menuIcon';
  nav.style.transform = 'translateX(-100%)';
  nav.style.transition = 'transform 0.2s ease-out';
	loader.show();
					  // after some time hide loader
					  setTimeout( function() {
						  loader.hide();
					  }, 1000 );
  };

  function contact() {
	loader = new SVGLoader( document.getElementById( 'loader' ), { speedIn : 300 } );
	let about = document.getElementById('about');
	let arhn = document.getElementById('arhn');
	let cells = document.getElementById('cells');
	let member = document.getElementById('team');
	let contact = document.getElementById('contact');
	let nav = document.querySelector('.overlay-menu');
	let toggleIcon = document.querySelector('.menuIcon');
	about.style.display="none";
	arhn.style.display="none";
	cells.style.display="none";  
	member.style.display="none";
	contact.style.display="block";
	toggleIcon.className = 'menuIcon';
	nav.style.transform = 'translateX(-100%)';
	nav.style.transition = 'transform 0.2s ease-out';
	loader.show();
					  // after some time hide loader
					  setTimeout( function() {
						  loader.hide();
					  }, 1000 );
  };