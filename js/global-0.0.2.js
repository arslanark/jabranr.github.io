/*! Global JavaScipt functions | Jabran Rafique | 1.0.0 */

// Google Analytics
var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-9809111-15"]);
_gaq.push(["_setDomainName", "jabran.me"]);
_gaq.push(["_trackPageview"]);

(function() {
var ga = document.createElement("script"); ga.type = "text/javascript"; ga.async = true;
ga.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ga, s);
})();

// iPhone active state enabler script
document.addEventListener("touchstart", function()	{}, false);
/*! JavaScript Document / Copyright (c) 2014 http://jabran.me/sandbox/socialmediadotjs / MIT License / 1.4 */
var facebook={fbinit:!1,init:function(a,b){window.onload=function(){var a=document.getElementById("fb-root");document.body.appendChild(a)};"undefined"!==typeof a?window.fbAsyncInit=function(){FB.init({appId:a.appid,channelUrl:a.channelurl,status:a.status||!1,cookie:!0,xfbml:!0,frictionlessRequests:a.flrequests||!1});facebook.fbinit=!0;document.getElementById("facebook-jssdk").src+="#xfbml=1&appid="+a.appid;"undefined"!==typeof a.width&&"undefined"!==typeof a.height?FB.Canvas.setSize({width:parseInt(a.width),
height:parseInt(a.height)}):FB.Canvas.setSize();typeof("undefined"!==a.autogrow)?FB.Canvas.setAutoGrow(a.autogrow):FB.Canvas.setAutoGrow();"undefined"!==typeof a.x&&"undefined"!==typeof a.y&&FB.Canvas.scrollTo(parseInt(a.x),parseInt(a.y));b&&"function"===typeof b&&b.call(this,window.FB)}:this.fbinit=!0},share:function(a,b,c){this.fbinit&&FB.ui({method:"feed",name:a.title,link:a.url,picture:a.image,caption:a.caption,description:a.description},function(a){return a&&a.post_id?"function"===typeof b?b.call(this,
a):!1:"function"===typeof c?c.call(this):!1})},invite:function(a,b){this.fbinit&&FB.ui({method:"apprequests",title:a.title,message:a.msg,to:a.to,exclude_ids:a.exclude_ids,max_recipients:a.max_to,data:a.data},function(a){return a&&a.to?"function"===typeof b?b.call(this,a):!1:!1})}},twitter={tweet:function(a){if(a){var b,c="//twitter.com/intent/tweet?";"undefined"!==typeof a.tweet&&(b="text="+encodeURIComponent(a.tweet));"undefined"!==typeof a.handler&&(b=b+"&via="+encodeURIComponent(a.handler));"undefined"!==
typeof a.url&&(b=b+"&url="+encodeURIComponent(a.url))}return window.open(c+b,"_blank")}},gplus={plus:function(a){if(a){var b;"undefined"!==typeof a.url&&(b="//plus.google.com/share?url="+encodeURIComponent(a.url))}return window.open(b,"_blank")}};
(function(a,b){var c,d,e=a.getElementsByTagName("script")[0];a.getElementById("facebook-jssdk")||(d=a.createElement("script"),d.id="facebook-jssdk",d.async=!0,d.src="//connect.facebook.net/en_US/all"+(b?"/debug":"")+".js",c=a.createElement("div"),c.id="fb-root",e.parentNode.insertBefore(c,e),e.parentNode.insertBefore(d,e))})(document,!1);