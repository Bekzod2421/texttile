window.log = function(param){
    console.log(param);
};

$(function(){

	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
		isApple = /iPod|iPad|iPhone/i.test(navigator.userAgent),
		$doc = $(document),
		$win = $(window),
		$html = $(document.documentElement);

	$('table').wrap('<div class="table-wrapper"></div>');

	resizeController(1260, function() {
		log("Функция будет вызвана меньше чем 1260");
	}, function() {
		log("Функция будет вызвана больше чем 1260");
	});

	/*alignElements*/
	function blocksMatchHeight(arr) {
		for (var i = 0; i< arr.length; i++) {
			$(arr[i]).matchHeight();
		}
	}
	var alignElemets = function(){
		blocksMatchHeight([
			'.test'
		]);	
	}
	alignElemets();
	/*alignElements*/

	/*orientationChange*/
	window.addEventListener("orientationchange", function() {
		setTimeout(alignElemets, 500);
		log("orientationChange");
	}, false);
	/*orientationChange*/


	// Esc button
    $doc.on('keyup', function(keyUp){
	    if (keyUp.keyCode 
	    	== 27) {

	    	$('.block').removeClass('active');
	      	$html.removeClass('overflowHidden');
	    	
	        return false;
	    };
	});
	// Esc button

	// Document click begin
	$doc.on('click', function(event){
        if ( $(event.target).closest('.wrapper, .ui-datepicker, .ui-datepicker a, .ui-corner-all').length ){}else {
        	$('.block').removeClass('active');
	      	$html.removeClass('overflowHidden');
        };
    });
    // Document click end

    $('.prod-list').owlCarousel({
    	item:3,
    	margin:10,
    	nav:true,
    	navText: ["<img src='../img/arr-l.svg'>", "<img src='../img/arr-r.svg'>"],
    	responsive : {
		    0 : {
		    	items: 1,
		    	margin: 0	
		    },
		    768 : {
		        items: 2,
		        margin: 40, 
		    },
		    1023 : {
		    	items: 3,
		    }
		}
    });
    $('.gallery__list').owlCarousel({
    	item:3,
    	margin:40,
    	nav:true,
    	navText: ["<img src='../img/arr-l.svg'>", "<img src='../img/arr-r.svg'>"],
    	responsive : {
		    0 : {
		    	items: 1,
		    	margin: 0	
		    },
		    768 : {
		        items: 2,
		        margin: 40, 
		    },
		    1023 : {
		    	items: 3,
		    }
		}
    });

    var mql = window.matchMedia('all and (max-width: 1280px)');
    if (mql.matches) {
        $('.news-list').addClass('owl-carousel').owlCarousel({
        	items:2,
        	responsive : {
			    0 : {
			    	items: 1,
			    	margin: 0	
			    },
			    768 : {
			        items: 2,
			        margin: 40, 
			    },
			    1023 : {
			    	items: 3,
			    }
			}
        });
    }
    $html = $(document.documentElement);
    $('.burger-mobile').on('click', function() {
    	$('.menu-mobile').toggleClass('opened');
    	$('.menuClose').toggleClass("opened");
    	$('.site-black-background').fadeIn();
    	$html.toggleClass('oveflowHidden');
    });

    $('.menuClose').on("click", function(event) {
    	$('.menu-mobile').removeClass('opened');
    	$('.site-black-background').fadeOut();
    	$html.removeClass('oveflowHidden');
    	$(this).removeClass('opened');
    });
    $('.site-black-background').on('click', function(){
    	$('.menuClose').removeClass("opened");
    	$('.site-black-background').fadeOut();
    	$html.removeClass('oveflowHidden');
    	$('.menu-mobile').removeClass('opened');
    });

    $('.sidebar li a').on('click', function() {
    	$(this).toggleClass('opened');
    	$(this).siblings('ul').toggleClass('opened');
    });

    $('.sidebar li').has('ul').addClass('haschild');
    var limit = $(window).height() / 3,
        $backToTop = $('.up');

    $(window).scroll(function() {
        if ($(this).scrollTop() > limit) {
            $backToTop.fadeIn();
        } else {
            $backToTop.fadeOut();
        }
    });
    // scroll body to 0px on click
    $backToTop.click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 1500);
        return false;
    });

    $('.burger a').on('click', function() {
    	$('#receiver').toggleClass('opened');
    });

    var tele = document.getElementById('teleporter'),
  	rec = document.getElementById('receiver');

	window.onresize = resize;
	resize();

	function resize() {
	  const rChildren = rec.children;
	  let numW = 0;

	  [...rChildren].forEach(item => {
	    item.outHTML = '';
	    tele.appendChild(item);
	  })

	  const teleW = tele.offsetWidth,
	    tChildren = tele.children;

	  [...tChildren].forEach(item => {
	    numW += item.offsetWidth;

	    if (numW > teleW) {
	      item.outHTML = '';
	      rec.appendChild(item);
	    }
	  });
	}

});