$=jQuery.noConflict();
(function($){
$(document).ready(function(){
	if ( $('.top-download-bar').length > 0 ) {
	
		topdlbarheight = $('.top-download-bar').outerHeight();
		scroolone = false;
		//readhidetopdlbarcookie = getCookie("hidetopdlbar");
		
		if ( /android/i.test(navigator.userAgent) ) {
			//if (readhidetopdlbarcookie == null) {
				$('.top-download-bar.top').removeClass("hidden");
				topdlbarheight = $('.top-download-bar').outerHeight();
			//}
		}
	
	}
});
$(window).scroll(function() {
	if ( /android/i.test(navigator.userAgent) ) {
		//&&(readhidetopdlbarcookie == null)
		if ( $('.top-download-bar').length > 0 ) {
			if ( $(this).scrollTop() >= topdlbarheight ) {
				if (scroolone == false) {
					$('body').css({'padding-top':topdlbarheight+'px'});
					//$('.top-download-bar').hide();
					$('.top-download-bar.top').addClass("hidden");
					$('.top-download-bar.sticky').removeClass("hidden");
					if ( ($('body.login').length > 0) || ($('body.page-peraturan').length > 0) || ($('body.page-news').length > 0) ) {
						$('.top-download-bar.top').removeClass("hidden");
						$('.top-download-bar.top').addClass('display-fix');
					}
					//$('.top-download-bar').slideDown();
					scroolone = true;
				}
			} else {
				$('body').css({'padding-top':'0'});
				$('.top-download-bar.top').removeClass("hidden");
				$('.top-download-bar.sticky').addClass("hidden");
				if ( ($('body.login').length > 0) || ($('body.page-peraturan').length > 0) || ($('body.page-news').length > 0) ) {
					$('.top-download-bar.top').removeClass('display-fix');
				}
				scroolone = false;
			}
		}
	}
});
$('#emailNotif').on('hidden.bs.modal', function () {
	//setCookie("cksemail","ok",0.00347);
});
})(jQuery);
function closetopdlbar() {
	$('.top-download-bar').remove();
	$('body').css({'padding-top':'0'});
	//setCookie("hidetopdlbar","ok",1);
}
function detectmob() { 
	 if( navigator.userAgent.match(/Android/i)
	 || navigator.userAgent.match(/webOS/i)
	 || navigator.userAgent.match(/iPhone/i)
	 || navigator.userAgent.match(/iPad/i)
	 || navigator.userAgent.match(/iPod/i)
	 || navigator.userAgent.match(/BlackBerry/i)
	 || navigator.userAgent.match(/Windows Phone/i)
	 ){
		return true;
	} else {
		return false;
	}
}
function forcelowercase(strInput) {
	cursorpos = strInput.selectionStart;
	strInput.value=strInput.value.toLowerCase();
	strInput.selectionEnd = cursorpos;
}
function fillanotherdata(targetdom,targetdata,strInput) {
	triminput = strInput.value.trim();
	$(targetdom).attr(targetdata,triminput);
	//console.log(strInput.value);
}
function updowntoggle(elclass) {
	$(elclass).slideToggle("slow", function() {
		isvisible = $(elclass).is(":visible");
		if (isvisible == true ) {
			$('#moremenu .icon').html('<img src="images/icon/carret-up.png?v=8">');
			$('#moremenu .text').text('Less');
		} else {
			$('#moremenu .icon').html('<img src="images/icon/carret-down.png?v=8">');
			$('#moremenu .text').text('More');
		}
	});
}
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
		//days => 0.0035 means 5 minutes
		//days => 0.0014 means 2 minutes
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function getRawCookie() {
    return document.cookie;
}
function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}
