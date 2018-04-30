var time = 1000;
var headerList;
var hasGoneMobile = false;

function windowResized() {
	var width = $(window).width();
	var height = $(window).height();
	try {
		if (width < 1220) {
			if (hasGoneMobile) {
				return;
			}
			hasGoneMobile = true;
			goMobile();
		} else {
			if (!hasGoneMobile) {
				return;
			}
			hasGoneMobile = false;
			returnToDesktop();
		}
	
	} catch (Execption) {return;}
}

function goMobile() {
	document.getElementById("nav-bar").innerHTML = "<img id='logo' src='imgs/Logo.png' /> <img id='interface-logo' src='imgs/Interface_logo.png' />";
	
	var top = 0;
	
	document.getElementById("dropdown-button").innerHTML = "<div id='showmenu' style='z-index: 10; position: relative; top: -10px; left: 20px; width: 40px; height: 50px;'><div id='bar1'class='menubarstrip' style='top: 20px;'></div>" +
	"<div id='bar2' class='menubarstrip' style='top: 30px;'></div><div id='bar3' class='menubarstrip' style='visibility: visible; top: 40px;'></div></div>";
	
	$("#showmenu").click(function() {
		dropdownClick();
	});
}

function dropdownClick() {
	var deg = "315";
	var sign1 = "-=";
	var sign2 = "+=";
	var amount1 = 15;
	var amount2 = 5;
	var vis = "hidden";
	
	if (document.getElementById("bar3").style.visibility != "visible") {
		vis = "visible";
		deg = "0";
		sign1 = "+=";
		sign2 = "-=";
		$("#menu-dropdown").animate({
			height: "0%"
		}, 500);
	} else {
		$("#menu-dropdown").animate({
			height: "110%"
		}, 500);
	}
	
	$("#bar1").css({'transform' : 'rotate(' + deg + 'deg)'});
	$("#bar3").css({'transform' : 'rotate(' + deg + 'deg)'});
	$("#bar2").css({'transform' : 'rotate(-' + deg + 'deg)'});
	
	$("#bar3").animate({
		top: sign1 + amount1
	}, 200);
	$("#bar2").animate({
		top: sign1 + amount2
	}, 400);
	$("#bar1").animate({
		top: sign2 + amount2
	}, 400);
	
	setTimeout(function() {
		$("#bar3").css({'visibility' : vis});
	}, 202);
}

function returnToDesktop() {
	document.getElementById("dropdown-button").innerHTML = "";
	document.getElementById("menu-dropdown").style.height = "0%";
	
	document.getElementById("nav-bar").innerHTML = headerList;
	
	addAnimation();
}

$(window).resize(function() {
	windowResized();
});
$(function() {
	headerList = document.getElementById("nav-bar").innerHTML;
	windowResized();
});
function phoneClicked() {
	changeSize(26, 30);
	$("#phone").css({"border" : "solid 3px red"});
	$("#laptop").css({"border" : "solid 0px red"});
}
function laptopClicked() {
	changeSize(83, 0);
	$("#laptop").css({"border" : "solid 3px red"});
	$("#phone").css({"border" : "solid 0px red"});
}

function changeSize(percent, left_percent) {
	try {
	if (document.getElementById("bar3").style.visibility != "visible")
		dropdownClick();
	} catch (Execption) {}
	$("#customer-site").animate({
		width: percent + "%",
		left: left_percent + "%"
	}, time);
}

function showAboutCustomerSite() {
	$("#about-site-background").css({"display" : "block"});
	$("#about-site-background").animate({
		opacity: "1"
	}, time);
	$("#about-site-popup").css({"display" : "block"});
	$("#about-site-popup").animate({
		opacity: "1",
		top: "12.5%"
	}, time);
	
	var site = $("#customer-site").attr("src");
	
}

function hideAboutPopup() {
	$("#about-site-background").animate({
		opacity: "0"
	}, time, function () {
		$("#about-site-background").css({"display" : "none"});
	});
	$("#about-site-popup").animate({
		opacity: "0",
		top: "120%"
	}, time, function() {
		$("#about-site-popup").css({"display" : "none"});
	});
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
String.prototype.contains = function(it) { return this.indexOf(it) != -1; };