$(document).ready(function(){$(".box-shadow-menu").click(function(){$(".mainnav").addClass("open")}),$("html").on("touchstart",function(){$(".mainnav").removeClass("open")}),$("html").click(function(){$(".mainnav").removeClass("open")}),$(".mainnav").click(function(){event.stopPropagation()}),$(".box-shadow-menu").click(function(){event.stopPropagation()}),$(".mainnav").on("touchstart",function(){event.stopPropagation()}),$(".box-shadow-menu").on("touchstart",function(){event.stopPropagation()})}),$(document).ready(function(){var n=250,o=300;$(window).scroll(function(){$(this).scrollTop()>n?$(".top").fadeIn(500):$(".top").fadeOut(500)}),$(".top").click(function(n){n.preventDefault(),$("html, body").animate({scrollTop:0},o)})}),$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var n=$(this.hash);if(n=n.length?n:$("[name="+this.hash.slice(1)+"]"),n.length)return $("html,body").animate({scrollTop:n.offset().top},1e3),!1}})});