$(document).on('click', 'form input[type="submit"]', function(){
/*var m =$(this).closest('form'); 
var fio = m.find('input[name="submitted[name]"]').val(); 
var phone = m.find('input[name="submitted[phone]"]').val(); 
var mail = m.find('input[name="submitted[e_mail]"]').val(); 
var sub = 'Заявка';
if (phone!='' && phone!=undefined && fio!=''){
$.getJSON('http://api.calltouch.ru/calls-service/RestAPI/564/requests/orders/register/', {
subject: sub, 
fio: fio, 
email: mail,
phoneNumber: phone, 
sessionId: window.call_value 
}); 
}*/
});

(function ($) {
    /**
     * Theme behaviors.
     */
    Drupal.behaviors.defaultTheme = {
        attach: function (context, settings) {

            //табы на странице контактов
            if (jQuery("body").hasClass("page-node-21")) {
                jQuery('#contacts-tabs').tabs();
            }


            /* sotrudniki slider */
            jQuery("#carousel").jcarousel({
                scroll: 1,
                initCallback: carouselCallback,
                buttonNextHTML: null,
                buttonPrevHTML: null,
                wrap: "circular",
                itemFirstInCallback: itemFirstInCallback,
                visible: 3
            });

            function itemFirstInCallback(carousel, active, idx) {
                var size = carousel.size(), n;

                if (idx > 18) {
                    n = Math.floor(idx / size);
                    idx = (Math.abs(idx) - n * size) - size
                }

                if (idx <= 0) {
                    console.log('<= 0');
                    n = Math.floor(Math.abs(idx) / size);
                    console.log(n);
                    idx = size * n + idx;
                }


                jQuery('#carousel .jcarousel-control a').removeClass('active');
                jQuery('#carousel .jcarousel-control a').eq(idx - 1).addClass('active');
            }

            function carouselCallback(carousel) {
                for (var i = 1; i <= carousel.options.size; i++) {
                    jQuery('#carousel .jcarousel-control').append(jQuery('<a />', {text: i, href: '#'}));
                }

                jQuery('#carousel .jcarousel-control a').bind('click', function () {
                    carousel.scroll($.jcarousel.intval(jQuery(this).text()));
                    return false;
                });

                jQuery('#carousel-prev').bind('click.carousel', function () {
                    carousel.prev();
                    return false;
                });

                jQuery('#carousel-next').bind('click.carousel', function () {
                    carousel.next();
                    return false;
                });
            }


            /* front page video slider */
            /* Backup @author Максим <maxkorz@gmail.com>
            jQuery("#video-carousel").jcarousel({
                scroll: 1,
                initCallback: videoCarouselCallback,
                buttonNextHTML: null,
                buttonPrevHTML: null,
                // wrap: "circular",
                itemFirstInCallback: videoItemFirstInCallback,
                visible: 1
            });

            function videoItemFirstInCallback(carousel, active, idx) {
                var size = carousel.size(), n;

                if (idx > 18) {
                    n = Math.floor(idx / size);
                    idx = (Math.abs(idx) - n * size) - size
                }

                if (idx <= 0) {
                    console.log('<= 0');
                    n = Math.floor(Math.abs(idx) / size);
                    console.log(n);
                    idx = size * n + idx;
                }


                $('#video-carousel .jcarousel-control a').removeClass('active');
                $('#video-carousel .jcarousel-control a').eq(idx - 1).addClass('active');
            }


            function videoCarouselCallback(carousel) {
                for (var i = 1; i <= carousel.options.size; i++) {
                    $('#video-carousel .jcarousel-control').append($('<a />', {text: i, href: '#'}));
                }

                $('#video-carousel .jcarousel-control a').bind('click', function () {
                    carousel.scroll($.jcarousel.intval($(this).text()));
                    return false;
                });

                $('#video-carousel #carousel-prev').bind('click.carousel', function () {
                    carousel.prev();
                    return false;
                });

                $('#video-carousel #carousel-next').bind('click.carousel', function () {
                    carousel.next();
                    return false;
                });
            }


            $('#video-carousel li a').click(function (e) {
                e.preventDefault();
                var videoLink = $(this).find('img').attr('data');
                $(this).find('img').remove();
                $(this).find('i').remove();
                $(this).append('<iframe id="' + videoLink + '" width="560" height="315" src="//www.youtube.com/embed/' + videoLink + '?autoplay=1&amp;loop=1&amp;&amp;playlist=Video_ID" frameborder="0" allowfullscreen></iframe>');
                return false;
            });*/



        jQuery("#rcarousel").rcarousel({
            orientation: "vertical",
            height: 97,
            width: 173
        });
        jQuery("#rcarousel img").click(function(){
            jQuery('#video-carousel').jcarousel('scroll', parseInt(jQuery(this).attr('alt')));
            jQuery('#rcarousel img').css('border', '3px solid #fff');
            jQuery(this).css('border', '3px solid #DA2D2D');
        });
        jQuery("#rcarousel-next").click(function() {
            jQuery("#rcarousel").rcarousel("next");
            jQuery("#rcarousel img").click(function(){
                jQuery('#video-carousel').jcarousel('scroll', parseInt(jQuery(this).attr('alt')));
                jQuery('#rcarousel img').css('border', '3px solid #fff');
                jQuery(this).css('border', '3px solid #DA2D2D');
            });
            return false;
        });
        jQuery("#rcarousel-prev").click(function() {
            jQuery("#rcarousel").rcarousel("prev");
            jQuery("#rcarousel img").click(function(){
                jQuery('#video-carousel').jcarousel('scroll', parseInt(jQuery(this).attr('alt')));
                jQuery('#rcarousel img').css('border', '3px solid #fff');
                jQuery(this).css('border', '3px solid #DA2D2D');
            });
            return false;
        });
        
        jQuery("[name='submitted[phone]']").mask("+7 (999) 999-99-99");

            /* front page video slider */
            /* @author Максим <maxkorz@gmail.com> 07.07.2014 */
            jQuery("#video-carousel").jcarousel({
                scroll: 1,
                initCallback: videoCarouselCallback,
                buttonNextHTML: null,
                buttonPrevHTML: null,
                // wrap: "circular",
                itemFirstInCallback: videoItemFirstInCallback,
                visible: 1
            });

            function videoItemFirstInCallback(carousel, active, idx) {
                var size = carousel.size(), n;

                if (idx > 18) {
                    n = Math.floor(idx / size);
                    idx = (Math.abs(idx) - n * size) - size
                }

                if (idx <= 0) {
                    console.log('<= 0');
                    n = Math.floor(Math.abs(idx) / size);
                    console.log(n);
                    idx = size * n + idx;
                }


                $('#video-carousel .carousel-preview img').removeClass('active');
                $('#video-carousel .carousel-preview img').eq(idx - 1).addClass('active');
            }


            function videoCarouselCallback(carousel) {
            //    for (var i = 1; i <= carousel.options.size; i++) {
            //        $('#video-carousel .carousel-preview img').data("id", i);
            //    }

                $('#video-carousel .carousel-preview img,   #rcarousel img').bind('click', function () {
                    jQuery('.jcarousel-item embed').each(function () {
                        if (typeof this.stopVideo == 'function') {
                            this.stopVideo();
                            console.log('click__');
                        }
                    });
                    var id = $(this).attr('id');
                    carousel.scroll($.jcarousel.intval(id[id.length-1]));
                    return false;
                });
            }


//add tau

function play__(clip){

       var mv = "http://www.youtube.com/v/"+clip+"&autoplay=0&rel=0";
       swfobject.embedSWF(mv, "ytapiplayer", "560", "315", "8");
}


$('#__video-carousel li a').click(function (e) {
        e.preventDefault();
        var videoID = $(this).find('img').attr('data');
        $(this).find('img').remove();
        $(this).find('i').remove();
        $("#video_container").css('z-index',1);
        play__(videoID);
    });
//end tau



/**/
            $('#video-carousel li a').click(function (e) {
                e.preventDefault();
                var videoID = $(this).find('img').attr('data');
                $(this).find('img').remove();
                $(this).find('i').remove();
                var url = videoID + '?enablejsapi=1&amp;version=3&amp;playerapiid=ytplayer&amp;version=3&amp;hl=ru_RU';
                var object = '<object width="560" height="315"><param name="movie" value="//www.youtube.com/v/' + url + '"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="//www.youtube.com/v/' + url + '" id="'+videoID+'" type="application/x-shockwave-flash" width="560" height="315" allowscriptaccess="always" allowfullscreen="true"></embed></object>';
                //$(this).append('<iframe id="' + videoLink + '" width="560" height="315" src="//www.youtube.com/embed/' + videoLink + '?autoplay=1&amp;loop=1&amp;&amp;playlist=Video_ID" frameborder="0" allowfullscreen></iframe>');
                $(this).append(object);
                return false;
            });      // end click function
        }
        
        
        
        
        
    };


    if (window.location.pathname == '/spasibo') {
        spasiboPage();
    }

    
    
    

})(jQuery);

jQuery(document).ready(function () {   
	var plus = "",
	    ua = navigator.userAgent.toLowerCase(),
	    isAndroid = ua.indexOf("android") > -1;
	if(isAndroid) 
	{
	    plus = "+";
	}
	setTimeout(function(){
		var phone = $("#phone_1").text();
		var text = $("#phone_1").html();
		$("#phone_1").html('<a style="color: #333; text-decoration: none;" href="tel:'+plus+phone.replace(/[^0-9]/g, "")+'">'+text+'</a>');
	    }, 3000);   
	setTimeout(function(){
		var phone2 = $("#contact-phone").text();
		var text2 = $("#contact-phone").html();
		$("#contact-phone").html('<a style="color: #333; text-decoration: none;" href="tel:'+plus+phone2.replace(/[^0-9]/g, "")+'">'+text2+'</a>');
	    }, 3000);
		
        
        
        
	$('#awards_front_container .item:first').before($('#awards_front_container .item:last')); 
    $("#awards_front_wrapper_left").click(function() {
        if(!$('#awards_front_container').is(':animated')) {
            var left_indent = parseInt($('#awards_front_container').css('marginLeft')) + 240;
            $('#awards_front_container').animate({'marginLeft' : left_indent},300,function(){  
                $('#awards_front_container .item:first').before($('#awards_front_container .item:last'));  
                $('#awards_front_container').css({'marginLeft' : '-240px'});  
            });  
        }     
    });
    $("#awards_front_wrapper_right").click(function() {
        if(!$('#awards_front_container').is(':animated')) {
            var left_indent = parseInt($('#awards_front_container').css('marginLeft')) - 240;
            $('#awards_front_container').animate({'marginLeft' : left_indent},300,function(){  
                $('#awards_front_container .item:last').after($('#awards_front_container .item:first'));  
                $('#awards_front_container').css({'marginLeft' : '-240px'});   
            });  
        }  
    });
    setInterval(function() {
        $("#awards_front_wrapper_right").click();
    }, 3000);
    
    
    $('#banners_container .item:first').before($('#banners_container .item:last')); 
    $("#banners_wrapper_left").click(function() {
        if(!$('#banners_container').is(':animated')) {
            var left_indent = parseInt($('#banners_container').css('marginLeft')) + 770;
            $('#banners_container').animate({'marginLeft' : left_indent},300,function(){  
                $('#banners_container .item:first').before($('#banners_container .item:last'));  
                $('#banners_container').css({'marginLeft' : '-770px'});  
            });  
        }     
    });
    $("#banners_wrapper_right").click(function() {
        if(!$('#banners_container').is(':animated')) {
            var left_indent = parseInt($('#banners_container').css('marginLeft')) - 770;
            $('#banners_container').animate({'marginLeft' : left_indent},300,function(){  
                $('#banners_container .item:last').after($('#banners_container .item:first'));  
                $('#banners_container').css({'marginLeft' : '-770px'});   
            });  
        }  
    });
    setInterval(function() {
        $("#banners_wrapper_right").click();
    }, 7000);
    
    
    
    $('#clients_front_container .item:first').before($('#clients_front_container .item:last')); 
    $("#clients_front_wrapper_left").click(function() {
        if(!$('#clients_front_container').is(':animated')) {
             if($('#clients_front_container').parents(".region-sidebar-second").length)
                var left_indent = parseInt($('#clients_front_container').css('marginLeft')) + 160;
            else
                var left_indent = parseInt($('#clients_front_container').css('marginLeft')) + 190;
            $('#clients_front_container').animate({'marginLeft' : left_indent},300,function(){  
                $('#clients_front_container .item:first').before($('#clients_front_container .item:last'));  
                if($('#clients_front_container').parents(".region-sidebar-second").length)
                    $('#clients_front_container').css({'marginLeft' : '-160px'});  
                else
                    $('#clients_front_container').css({'marginLeft' : '-190px'});  
            });  
        }     
    });
    $("#clients_front_wrapper_right").click(function() {
        if(!$('#clients_front_container').is(':animated')) {
            if($('#clients_front_container').parents(".region-sidebar-second").length)
                var left_indent = parseInt($('#clients_front_container').css('marginLeft')) - 160;
            else
                var left_indent = parseInt($('#clients_front_container').css('marginLeft')) - 190;
            $('#clients_front_container').animate({'marginLeft' : left_indent},300,function(){  
                $('#clients_front_container .item:last').after($('#clients_front_container .item:first'));  
                if($('#clients_front_container').parents(".region-sidebar-second").length)
                    $('#clients_front_container').css({'marginLeft' : '-160px'});  
                else
                    $('#clients_front_container').css({'marginLeft' : '-190px'});  
            });  
        }  
    });
    setInterval(function() {
        $("#clients_front_wrapper_right").click();
    }, 5000);
    
    
    
});

/* spasibo page */
function spasiboPage() {

    var spasiboName = getCookie('spasibo');
    if (!(spasiboName === undefined)) {
        //console.log('cookie = ' + spasiboName);
        jQuery(document).ready(function () {
            jQuery('.spasibo_l h2').text(spasiboName + ', Спасибо за обращение в ArrowMedia!');
            deleteCookie('spasibo');
        });
    }


    var spasiboTime = getCookie('spasiboTime');
    if (!(spasiboTime === undefined)) {
        //console.log('cookie = ' + cookie);
        jQuery(document).ready(function () {
            jQuery('.spasibo_l h3').text('Наши менеджеры свяжутся с вами ' + spasiboTime + '.');
            deleteCookie('spasiboTime');
        });
    }


}

/* seo tracker */
function get_user_info() {
    get_id_webform();

    var source = '';
    var campaign = '';
    var medium = '';
    var term = '';
    var land_page = '';

    var utmz = jQuery.cookie('__utmz');
    var con_firm = jQuery.cookie('_webform_confirmation');
    //console.log(utmz);
    var utmz_array = utmz.split("|");
    source = utmz_array[0].split("=")[1];
    campaign = utmz_array[1].split("=")[1];
    medium = utmz_array[2].split("=")[1];
    //console.log(utmz[0]);
    if (utmz_array[3]) {
        term = utmz_array[3].split("=")[1];
    }
    land_page = window.location.pathname;

    console.log("///-->");
    console.log(con_firm);
    console.log(utmz);
    console.log(medium);          //Канал
    console.log(source);         //Откуда пришли
    console.log(term);          //Запрос
    console.log(land_page);    //Посадка
    //console.log(campaign);

    if (utmz) jQuery("input[name='submitted[test]']").val(utmz);
    if (utmz_array[2]) jQuery("input[name='submitted[kanal]']").val(medium);
    if (utmz_array[0]) jQuery("input[name='submitted[istochnik]']").val(source);
    if (utmz_array[0]) jQuery("input[name='submitted[kampaniya]']").val(campaign);
    if (utmz_array[3]) jQuery("input[name='submitted[klyuchevoy_zapros]']").val(term);
    jQuery("input[name='submitted[posadochnaya_stranica]']").val(land_page);


    call_value_ = window.call_value;
   // console.log('call_value: '+call_value_);
    jQuery("input[name='submitted[call_value]']").val(call_value);


}

function utf8_encode(argString) {
  //  discuss at: http://phpjs.org/functions/utf8_encode/
  // original by: Webtoolkit.info (http://www.webtoolkit.info/)
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: sowberry
  // improved by: Jack
  // improved by: Yves Sucaet
  // improved by: kirilloid
  // bugfixed by: Onno Marsman
  // bugfixed by: Onno Marsman
  // bugfixed by: Ulrich
  // bugfixed by: Rafal Kukawski
  // bugfixed by: kirilloid
  //   example 1: utf8_encode('Kevin van Zonneveld');
  //   returns 1: 'Kevin van Zonneveld'

  if (argString === null || typeof argString === 'undefined') {
    return '';
  }

  var string = (argString + ''); // .replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  var utftext = '',
    start, end, stringl = 0;

  start = end = 0;
  stringl = string.length;
  for (var n = 0; n < stringl; n++) {
    var c1 = string.charCodeAt(n);
    var enc = null;

    if (c1 < 128) {
      end++;
    } else if (c1 > 127 && c1 < 2048) {
      enc = String.fromCharCode(
        (c1 >> 6) | 192, (c1 & 63) | 128
      );
    } else if ((c1 & 0xF800) != 0xD800) {
      enc = String.fromCharCode(
        (c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
      );
    } else { // surrogate pairs
      if ((c1 & 0xFC00) != 0xD800) {
        throw new RangeError('Unmatched trail surrogate at ' + n);
      }
      var c2 = string.charCodeAt(++n);
      if ((c2 & 0xFC00) != 0xDC00) {
        throw new RangeError('Unmatched lead surrogate at ' + (n - 1));
      }
      c1 = ((c1 & 0x3FF) << 10) + (c2 & 0x3FF) + 0x10000;
      enc = String.fromCharCode(
        (c1 >> 18) | 240, ((c1 >> 12) & 63) | 128, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
      );
    }
    if (enc !== null) {
      if (end > start) {
        utftext += string.slice(start, end);
      }
      utftext += enc;
      start = end = n + 1;
    }
  }

  if (end > start) {
    utftext += string.slice(start, stringl);
  }

  return utftext;
}


function md5 ( str ) {	// Calculate the md5 hash of a string
	// 
	// +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
	// + namespaced by: Michael White (http://crestidg.com)

	var RotateLeft = function(lValue, iShiftBits) {
			return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
		};

	var AddUnsigned = function(lX,lY) {
			var lX4,lY4,lX8,lY8,lResult;
			lX8 = (lX & 0x80000000);
			lY8 = (lY & 0x80000000);
			lX4 = (lX & 0x40000000);
			lY4 = (lY & 0x40000000);
			lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
			if (lX4 & lY4) {
				return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
			}
			if (lX4 | lY4) {
				if (lResult & 0x40000000) {
					return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
				} else {
					return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
				}
			} else {
				return (lResult ^ lX8 ^ lY8);
			}
		};

	var F = function(x,y,z) { return (x & y) | ((~x) & z); };
	var G = function(x,y,z) { return (x & z) | (y & (~z)); };
	var H = function(x,y,z) { return (x ^ y ^ z); };
	var I = function(x,y,z) { return (y ^ (x | (~z))); };

	var FF = function(a,b,c,d,x,s,ac) {
			a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
			return AddUnsigned(RotateLeft(a, s), b);
		};

	var GG = function(a,b,c,d,x,s,ac) {
			a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
			return AddUnsigned(RotateLeft(a, s), b);
		};

	var HH = function(a,b,c,d,x,s,ac) {
			a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
			return AddUnsigned(RotateLeft(a, s), b);
		};

	var II = function(a,b,c,d,x,s,ac) {
			a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
			return AddUnsigned(RotateLeft(a, s), b);
		};

	var ConvertToWordArray = function(str) {
			var lWordCount;
			var lMessageLength = str.length;
			var lNumberOfWords_temp1=lMessageLength + 8;
			var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
			var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
			var lWordArray=Array(lNumberOfWords-1);
			var lBytePosition = 0;
			var lByteCount = 0;
			while ( lByteCount < lMessageLength ) {
				lWordCount = (lByteCount-(lByteCount % 4))/4;
				lBytePosition = (lByteCount % 4)*8;
				lWordArray[lWordCount] = (lWordArray[lWordCount] | (str.charCodeAt(lByteCount)<<lBytePosition));
				lByteCount++;
			}
			lWordCount = (lByteCount-(lByteCount % 4))/4;
			lBytePosition = (lByteCount % 4)*8;
			lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
			lWordArray[lNumberOfWords-2] = lMessageLength<<3;
			lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
			return lWordArray;
		};

	var WordToHex = function(lValue) {
			var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
			for (lCount = 0;lCount<=3;lCount++) {
				lByte = (lValue>>>(lCount*8)) & 255;
				WordToHexValue_temp = "0" + lByte.toString(16);
				WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
			}
			return WordToHexValue;
		};

	var x=Array();
	var k,AA,BB,CC,DD,a,b,c,d;
	var S11=7, S12=12, S13=17, S14=22;
	var S21=5, S22=9 , S23=14, S24=20;
	var S31=4, S32=11, S33=16, S34=23;
	var S41=6, S42=10, S43=15, S44=21;

	str = this.utf8_encode(str);
	x = ConvertToWordArray(str);
	a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;

	for (k=0;k<x.length;k+=16) {
		AA=a; BB=b; CC=c; DD=d;
		a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);
		d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
		c=FF(c,d,a,b,x[k+2], S13,0x242070DB);
		b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
		a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
		d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
		c=FF(c,d,a,b,x[k+6], S13,0xA8304613);
		b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
		a=FF(a,b,c,d,x[k+8], S11,0x698098D8);
		d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
		c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
		b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
		a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
		d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
		c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
		b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
		a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);
		d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
		c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
		b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
		a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);
		d=GG(d,a,b,c,x[k+10],S22,0x2441453);
		c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
		b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
		a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
		d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
		c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
		b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
		a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
		d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
		c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);
		b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
		a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
		d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
		c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
		b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
		a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
		d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
		c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
		b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
		a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
		d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
		c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
		b=HH(b,c,d,a,x[k+6], S34,0x4881D05);
		a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
		d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
		c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
		b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
		a=II(a,b,c,d,x[k+0], S41,0xF4292244);
		d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
		c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
		b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
		a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
		d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
		c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
		b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
		a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
		d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
		c=II(c,d,a,b,x[k+6], S43,0xA3014314);
		b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
		a=II(a,b,c,d,x[k+4], S41,0xF7537E82);
		d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
		c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
		b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
		a=AddUnsigned(a,AA);
		b=AddUnsigned(b,BB);
		c=AddUnsigned(c,CC);
		d=AddUnsigned(d,DD);
	}

	var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);

	return temp.toLowerCase();
}

function addZero(i) {
 return (i < 10)? "0" + i: i;
 }
function kokoc_send() {
	var currentTime = new Date();
	var month = currentTime.getMonth() + 1;
	var day = currentTime.getDate();
	var year = currentTime.getFullYear();
	$("input[name='submitted[secret]']").val(md5(year + "-" + addZero(month) + "-" + addZero(day)));
	$("input[name='submitted[product]']").val($("h1").html());
    var cookie_parts = jQuery.cookie("_ga").split(".");
    var clientID = cookie_parts[2] + "." + cookie_parts[3];
    //console.log(clientID);
	$("input[name='submitted[client_id]']").val(clientID);
}
/*function get_call_value(){






}*/

/* check webforms, virtual links */
function get_id_webform() {
    //console.log('-get_id_webform-');

    var checkform208 = 0
        , checkform140 = 0
        , checkform372 = 0
        , form_id = ''
        , webformConfirmation = ''
        , siteURI = window.location.protocol + '//' + window.location.hostname + window.location.pathname + window.location.search  /*  google analytics */
        , top_form = '/request-top/success?pid='
        , bottom_form = '/request-bot/success?pid='
        , virtuallink = ''
        , usernameinput208 = ''
        , usernameinput140 = ''
        , usernameinput372 = ''
        , vform = 0
        ;

    //ga
    var _gaq = _gaq || [];
    _gaq.push(
        ['_setAccount', 'UA-3611645-1'],
        ['_trackPageview'],
        ['b._setAccount', 'UA-3611645-1'],
        ['b._trackPageview']
    );

    (function () {
        var ga = document.createElement('script');
        ga.type = 'text/javascript';
        ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ga, s);
    })();


    checkform208 = jQuery('#webform-ajax-wrapper-208').length;
    checkform140 = jQuery('#webform-ajax-wrapper-140').length;
    checkform372 = jQuery('#webform-ajax-wrapper-372').length; //Обратный звонок

    if ((checkform208 || checkform140 ) || checkform372) {
        vform = 1;
    }


    if (!( getCookie('spasibo') === undefined)) {
        deleteCookie('spasibo');
    }

    console.log('checkform208 = ' + checkform208);
    console.log('checkform140 = ' + checkform140);
    console.log('checkform372 = ' + checkform372);
    console.log('form_id = ' + form_id);
    console.log('siteURI = ' + siteURI);
    //console.log('sid = ' + data);
    console.log('vform  = ' + vform);

    //форма обратного звонка
    if (checkform372) {
        /*
         if (!( getCookie('spasiboTime')  === undefined)){
         deleteCookie('spasiboTime');
         }
         */
        form_id = '372';
        usernameinput372 = jQuery('#edit-submitted-name').val();

        setCookie('spasibo', usernameinput372);
        //setCookie('spasiboTime',   jQuery('select#edit-submitted-date-field-time-to-call option:selected').text() );
    }
    if (checkform140) {
        form_id = '140';
        usernameinput140 = jQuery('#edit-submitted-contacts').val();
        setCookie('spasibo', usernameinput140);
    }
    if (checkform208) {
        form_id = '208';
        usernameinput208 = jQuery('#edit-submitted-kontaktnoe-lico').val();
        setCookie('spasibo', usernameinput208);
    }


    if (vform) {

        jQuery.ajax({
            url: 'sites/all/themes/default/templates/get_id_webform.php',
            type: 'POST',
            data: 'form_id=' + form_id,
            success: function (data) {
                //create vlink
                if (form_id == '140') {
                    virtuallink = window.location.pathname + bottom_form + (data + 1);
                }
                if (form_id == '208') {
                    virtuallink = window.location.pathname + top_form + (data + 1);
                }

                /*
                 console.log('checkform208 = ' + checkform208);
                 console.log('checkform140 = ' + checkform140);
                 console.log('checkform372 = ' + checkform372);
                 console.log('form_id = ' + form_id);
                 console.log('siteURI = ' + siteURI);
                 console.log('sid = ' + data);
                 console.log('virtuallink  = ' + virtuallink );
                 console.log('vform  = ' + vform );
                 */

                //wait for ajax success
                var checkSuccess = setInterval(function () {

                    webformConfirmation = jQuery('.webform-confirmation').length;

                    if (webformConfirmation) {

                        clearInterval(checkSuccess);
dataLayer.push({'event': 'formsSubmit'});
                        //username
                        if (form_id == '208') {
                            jQuery('#webform-ajax-wrapper-208 .webform-confirmation p:eq(0)').html(usernameinput208 + ', спасибо за обращение в ArrowMedia! Наши менеджеры свяжутся с вами в ближайшее время.');

                        }

                        if (form_id == '140') {
                            jQuery('#webform-ajax-wrapper-140 .webform-confirmation p:eq(0)').html(usernameinput140 + ', спасибо за обращение в ArrowMedia! Наши менеджеры свяжутся с вами в ближайшее время.');

                        }

                        //виртуальные ссылки для форм отправки заявок
                        if ((form_id == '208') || (form_id == '140')) {
                            _gaq.push(['_setAccount', 'UA-3611645-1'], ['_trackPageview', virtuallink]);
                        }
                        window.location.href = '//arwm.ru/spasibo';


                    }

                }, 300);
            }
        });
    }

}

/* callback time checker */
function webform_time_checker() {

    //wait for callback form wrapper
    var checkCallbackFormLoad = setInterval(function () {
        callbackFormLoad = jQuery('#modalContent .popups-container').length;
        if (callbackFormLoad) {
            clearInterval(checkCallbackFormLoad);

            //clear cookie
            if (!( getCookie('spasibo') === undefined)) {
                deleteCookie('spasibo');
            }
            if (!( getCookie('spasiboTime') === undefined)) {
                deleteCookie('spasiboTime');
            }
            jQuery('#modalContent .popups-container').css({
                'background': 'url("http://www.arwm.ru/sites/all/themes/default/images/popup-bg2.png") no-repeat 48% 100%'
            });

        }
    }, 100);


    //wait for callback form inputs
    var checkCallbackForm = setInterval(function () {

        callbackForm = jQuery('#webform-ajax-wrapper-372').length;

        if (callbackForm) {

            clearInterval(checkCallbackForm);
            jQuery('#edit-webform-ajax-submit-372').attr('value', 'Перезвоните мне').mousedown(function () {
                get_id_webform();
            });


            /*
             //bind form check
             jQuery('#edit-actions').click(function(){
             get_id_webform();
             });

             //create array of calltime
             moment.lang('ru');
             var timeArr = ['Сейчаc'],
             i=1,
             k=10;
             while (i<=18){
             if (i<=9){
             if ((moment().format("(dd)") != 'СБ') || (moment().format("(dd)") != 'ВС') ){
             timeArr.push( 'с '+k+' до '+parseInt(k+1)+' ' + moment().format("(D.MM, dd)")  );
             i++
             }
             } else {
             if(i==10){ k=10; }
             if ((moment().format("(dd)") != 'СБ') || (moment().add('days', 1).format("(dd)") != 'ВС') ){
             timeArr.push( 'с '+k+' до '+parseInt(k+1)+' ' + moment().add('days', 1).format("(D.MM, dd)")  );
             i++
             }
             }
             k++;
             }

             jQuery('#edit-submitted-date-field-time-to-call').html('');
             for (var i=0; i<=18; i++){
             jQuery('#edit-submitted-date-field-time-to-call').append('<option value="'+i+'">' + timeArr[i] + '</option>');
             }
             jQuery('select#edit-submitted-date-field-time-to-call option:eq(0)').attr('selected', 'selected');
             */
        }

    }, 100);

   

}


/* cookie tools */
function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
}
function setCookie(name, value, props) {
    props = props || {};
    var exp = props.expires
    if (typeof exp == "number" && exp) {
        var d = new Date()
        d.setTime(d.getTime() + exp * 1000)
        exp = props.expires = d
    }
    if (exp && exp.toUTCString) {
        props.expires = exp.toUTCString()
    }

    value = encodeURIComponent(value)
    var updatedCookie = name + "=" + value
    for (var propName in props) {
        updatedCookie += "; " + propName
        var propValue = props[propName]
        if (propValue !== true) {
            updatedCookie += "=" + propValue
        }
    }
    document.cookie = updatedCookie

}
function deleteCookie(name) {
    setCookie(name, null, { expires: -1 })
}
