(function(){var e,t,n,o,a,i,l;e=window,t=document,n="script",o="//www.google-analytics.com/analytics.js",a="ga",e.GoogleAnalyticsObject=a,e[a]=e[a]||function(){(e[a].q=e[a].q||[]).push(arguments)},e[a].l=1*new Date,i=t.createElement(n),l=t.getElementsByTagName(n)[0],i.async=1,i.src=o,l.parentNode.insertBefore(i,l),ga("create","UA-66609732-1","auto","state"),ga("state.send","pageview")}).call(this),function(){$loaded(function(){var e;if(""!==(e=function(e){var t;return e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]"),null===(t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search))?"":decodeURIComponent(t[1].replace(/\+/g," "))}("email"))&&$("#session_email").length)return $("#session_email").val(e),$("#session_password").focus()})}.call(this),function(){$loaded(function(){var t,n,o,a,i,e,l,c;if(n="logo_offset",e=250,t=function(){return window.matchMedia("(min-width: 641px)").matches},a=function(){return t()?$(".header-nav"):$(".toggle-nav-link")},c=function(e){return a().css("top",e),localStorage.setItem(n,e)},i=function(){return a().css("top",""),localStorage.removeItem(n)},o=function(){var e;return $(".header-nav,.toggle-nav-link").css("top",""),null===(e=$("header .title img").height())?i():(o=Math.floor(e/2-a().height()/2),t()||(o+=19),c(o))},(l=null)!=$(".container"))return $(window).on("load",o),$(window).resize(function(){return clearTimeout(l),l=setTimeout(o,e)})})}.call(this),function(){$loaded(function(){var e;return(e=$("#suspended")).addClass("underline"),e.qtip({content:{text:e.data("content")},position:{my:"top right",at:"bottom right",adjust:{y:2,x:5}},style:{width:200},hide:{fixed:!0}})})}.call(this),function(){}.call(this);