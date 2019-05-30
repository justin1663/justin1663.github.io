// JavaScript Document
$(document).ready(function () {
	"use strict";

	$(".main-image").click(function () {
		$(".main-image").fadeOut();
	});
	$(".column-img").click(function () {
		var that = $(this).children("img").attr("src");
		$(".main-image img").attr("src", that);
		$(".main-image").fadeIn();
		$(".main-image .pull-left img").css("bottom", $(".main-image .pull-left img").height() / 2);
	});

});
