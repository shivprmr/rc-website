// Custom Script
// Developed by: Samson.Onna
// CopyRights : http://webthemez.com
var customScripts = {
    profile: function () {
     	 var portfolio = $('#portfolio');
		var items = $('.items', portfolio); 
		var filters = $('.filters li a', portfolio); 
	
		items.imagesLoaded(function() {
			items.isotope({
				itemSelector: '.item',
				layoutMode: 'fitRows',
                filter: '.video',
				transitionDuration: '0.7s'
			});
		});
		
		filters.click(function(){
			var el = $(this);
			filters.removeClass('active');
			el.addClass('active');
			var selector = el.attr('data-filter');
			items.isotope({ filter: selector });
			return false;
		});            
    },
    fancybox: function () {
        // fancybox
        $(".fancybox").fancybox();
    },
    onePageNav: function () {

        $('#mainNav').onePageNav({
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 950,
            scrollThreshold: 0.2,
            filter: '',
            easing: 'swing',
            begin: function () {
                //I get fired when the animation is starting
            },
            end: function () {
                   //I get fired when the animation is ending
				if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('.header').addClass('addBg');
				}else{
						$('.header').removeClass('addBg');
				}
				
            },
            scrollChange: function ($currentListItem) {
                //I get fired when you enter a section and I pass the list item of the section
				if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('.header').addClass('addBg');
				}else{
						$('.header').removeClass('addBg');
				}
			}
        });
		
		$("a[href='#top']").click(function () {
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });
			$("a[href='#basics']").click(function () {
                $("html, body").animate({ scrollTop: $('#services').offset().top - 75 }, "slow"); 
                return false;
            });
    }, 
    owlSlider: function () {
        var owl = $("#owl-demo");
        owl.owlCarousel();
        // Custom Navigation Events
        $(".next").click(function () {
            owl.trigger('owl.next');
        })
        $(".prev").click(function () {
            owl.trigger('owl.prev');
        })
    },
    bannerHeight: function () {
        var bHeight = $(".banner-container").height();
        $('#da-slider').height(bHeight);
        $(window).resize(function () {
            var bHeight = $(".banner-container").height();
            $('#da-slider').height(bHeight);
        });
    },
	waySlide: function(){
		  	/* Waypoints Animations
		   ------------------------------------------------------ */		   			  
		 
			 						 
		},
		fitText: function(){			  
				setTimeout(function() {			
				$('h1.responsive-headline').fitText(1.2, { minFontSize: '16px', maxFontSize: '30px' });			
				}, 100);
		},
    init: function () {
        customScripts.onePageNav();
        customScripts.profile();
        customScripts.fancybox(); 
        customScripts.owlSlider();
		customScripts.waySlide();
		customScripts.fitText();
        customScripts.bannerHeight();
    }
}
$('document').ready(function () {
    customScripts.init();
});

/*-------------PARALAX------------------*/

(function($) {
 
    $.fn.parallax = function(options) {
 
        var windowHeight = $(window).height();
 
        // Establish default settings
        var settings = $.extend({
            speed        : 0.15
        }, options);
 
        // Iterate over each object in collection
        return this.each( function() {
 
          // Save a reference to the element
          var $this = $(this);
 
          // Set up Scroll Handler
          $(document).scroll(function(){
 
                var scrollTop = $(window).scrollTop();
                      var offset = $this.offset().top;
                      var height = $this.outerHeight();
 
        // Check if above or below viewport
      if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
        return;
      }
 
      var yBgPosition = Math.round((offset - scrollTop) * settings.speed);
 
                 // Apply the Y Background Position to Set the Parallax Effect
          $this.css('background-position', 'center ' + yBgPosition + 'px');
                
          });
        });
    }
}(jQuery));

$('.bg-1,.bg-3').parallax({
  speed : 0.15
});

$('.bg-2').parallax({
  speed : 0.25
});

// expand feature
const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");

readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("show-more");
  if (readMoreBtn.innerText === "Read More") {
    readMoreBtn.innerText = "Read Less";
  } else {
    readMoreBtn.innerText = "Read More";
  }
});

//cookies
const cookieStorage = {
    getItem: (item) => {
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
        return cookies[item];
    },
    setItem: (item, value) => {
        document.cookie = `${item}=${value};`
    }
}

const storageType = cookieStorage;
const consentPropertyName = 'jdc_consent';
const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);

window.onload = () => {

    const acceptFn = event => {
        saveToStorage(storageType);
        consentPopup.classList.add('hidden');
    }
    const consentPopup = document.getElementById('consent-popup');
    const acceptBtn = document.getElementById('accept');
    acceptBtn.addEventListener('click', acceptFn);

    if (shouldShowPopup(storageType)) {
        setTimeout(() => {
            consentPopup.classList.remove('hidden');
        }, 2000);
    }

};
/*------------END---------------*/


var btz_cookie_popup_html = `
<div id="btz-cookie-popup">
  <div class="btz-cookie-popup__c-p-card btz-cookie-popup__card"style="margin:auto;width=100%">
    <div class="btz-cookie-popup__c-p-close btz-cookie-popup--close"></div>
    <div class="btz-cookie-popup__content" style="margin:auto; width:100%">
    <h4>Join the mailing list!</h4>
    <p> </p>
          <form class="form-inline" style="margin:auto; width=100%" action="http://www.rekeshchauhan.us7.list-manage.com/subscribe/post?u=de187a3ce8722c31348b34e5a&amp;id=ce3986b22b" method="post" id="mc-embedded-subscribe" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate >
            <div class="input-group" style="margin:auto;">
              <input type="email" value="" style="margin: auto;" name="EMAIL" class="required email form-control" id="mce-EMAIL"  placeholder="Your email address...">
              <span class="input-group-btn">
              </span>
            </div>
            <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='MMERGE3';ftypes[3]='date';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
            <p> </p>
            <button  type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="btn">Subscribe</button>
    </div>
  </div>
</div>
`;

var btz_cookie_popup_css = document.createElement("style");
btz_cookie_popup_css.type = "text/css";
btz_cookie_popup_css.innerHTML = `
#btz-cookie-popup *, #btz-cookie-popup *:after, #btz-cookie-popup *:before {
  box-sizing: inherit !important;
}

#btz-cookie-popup {
  position: fixed !important;
  bottom: 10vh !important;
  right: 0 !important;
  z-index: 9999 !important;
  font-family: "Open Sans", HelveticaNeue, "Helvetica Neue", Helvetica, Arial, sans-serif !important;
}

#btz-cookie-popup .btz-cookie-popup__card {
  background: #000 !important;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.2) !important;
  display: flex !important;
  flex-wrap: wrap !important;
  height: 285px !important;
  max-width: 100% !important;
  position: relative !important;
  width: 400px !important;
  line-height: 1.5 !important;
}

#btz-cookie-popup .btz-cookie-popup--closed {
  -webkit-animation: btz-cookie-popup--close 0.4s ease-in-out forwards !important;
          animation: btz-cookie-popup--close 0.4s ease-in-out forwards !important;
}

#btz-cookie-popup .btz-cookie-popup--opened {
  -webkit-animation: btz-cookie-popup--open 0.4s ease-in-out forwards !important;
          animation: btz-cookie-popup--open 0.4s ease-in-out forwards !important;
}

#btz-cookie-popup .btz-cookie-popup__content {
  padding: 15px 15px !important;
  text-align: center !important;
}

#btz-cookie-popup .btz-cookie-popup__content--text-bold {
  font-weight: 600 !important;
}

#btz-cookie-popup h3 {
  font-family: "Open Sans", HelveticaNeue, "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  color: #fff !important;
  font-size: 18px !important;
  font-weight: 600 !important;
  margin: 0 0 0.5em !important;
}

#btz-cookie-popup p {
  font-family: "Open Sans", HelveticaNeue, "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  font-size: 14px !important;
  color: #fff !important;
  margin: 20px 0 !important;
}

#btz-cookie-popup a {
  font-family: "Open Sans", HelveticaNeue, "Helvetica Neue/", Helvetica, Arial, sans-serif !important;
  font-size: 14px !important;
  color: #fff !important;
  text-decoration: underline !important;
}

#btz-cookie-popup button {
  font-family: "Open Sans", HelveticaNeue, "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  background: #0e99cb !important;
  border: none !important;
  color: #fff !important;
  cursor: pointer !important;
  font-size: 14px !important;
  height: 3em !important;
  line-height: 3em !important;
  padding: 0 3em !important;
  transition: box-shadow 0.3s ease !important;
  outline: none !important;
}
#btz-cookie-popup button:hover {
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3) !important;
}

#btz-cookie-popup .btz-cookie-popup--close:after {
  color: #fff !important;
  content: "X" !important;
  cursor: pointer !important;
  font-size: 14px !important;
  font-weight: 600 !important;
  position: absolute !important;
  right: 0.8em !important;
  top: 0.5em !important;
  -webkit-transform: scaleX(1.25) !important;
          transform: scaleX(1.25) !important;
  transition: color 0.3s ease !important;
  -webkit-user-select: none !important;
     -moz-user-select: none !important;
      -ms-user-select: none !important;
          user-select: none !important;
}
#btz-cookie-popup .btz-cookie-popup--close:hover:after {
  color: #212121 !important;
}

@-webkit-keyframes btz-cookie-popup--close {
  0% {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  20% {
    -webkit-transform: scale(0.9, 1.1);
            transform: scale(0.9, 1.1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(0);
            transform: scale(0);
  }
}

@keyframes btz-cookie-popup--close {
  0% {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  20% {
    -webkit-transform: scale(0.9, 1.1);
            transform: scale(0.9, 1.1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(0);
            transform: scale(0);
  }
}
@-webkit-keyframes btz-cookie-popup--open {
  0% {
    opacity: 0;
    -webkit-transform: scale(0);
            transform: scale(0);
  }
  80% {
    -webkit-transform: scale(0.9, 1.1);
            transform: scale(0.9, 1.1);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
@keyframes btz-cookie-popup__open {
  0% {
    opacity: 0;
    -webkit-transform: scale(0);
            transform: scale(0);
  }
  80% {
    -webkit-transform: scale(0.9, 1.1);
            transform: scale(0.9, 1.1);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
`;

function btzSetCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function btzGetCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function btzCheckCookie() {
    var btz_cookie_popup_visited=btzGetCookie("cookie_pop_visited");
    if (btz_cookie_popup_visited != "") {
      console.log("Cookie popup visited: " + btz_cookie_popup_visited);
    } else {
      setTimeout(function () {
        
        var btz_cookie_popup_span = document.createElement('span');
        btz_cookie_popup_span.innerHTML = btz_cookie_popup_html;
        document.body.appendChild(btz_cookie_popup_span);
        document.body.appendChild(btz_cookie_popup_css);
                    
        var close = document.getElementsByClassName('btz-cookie-popup__c-p-close')[0];
        var card = document.getElementsByClassName('btz-cookie-popup__c-p-card')[0];
        var button = document.getElementsByClassName('btz-cookie-popup__c-p-button')[0];

        card.classList.add('btz-cookie-popup--opened');
        card.classList.remove('btz-cookie-popup--closed');

        card.addEventListener('click', function (e) {
          if (e.target === close | e.target === button) {
            card.classList.remove('btz-cookie-popup--opened');
            card.classList.add('btz-cookie-popup--closed');
            btzSetCookie("cookie_pop_visited", true, 365);
          }
        });
      }, 1000);
    }
};

setTimeout(function () {
  btzCheckCookie();
}, 10000); // 10 sec