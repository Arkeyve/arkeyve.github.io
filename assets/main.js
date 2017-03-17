$("document").ready(function() {
	var loadingImage = new TimelineMax();

	loadingImage
	.to($(".logo"), 2, {
		delay: 4
	})
	.to($("#logo"), 2, {
		delay: -2,
		strokeWidth: "0.1",
		fill: "#fff"
	})
	.to($(".logo"), 2, {
		delay: -1.90,
		y: -60,
		ease: Power1.easeOut
	})
	.to($(".logo_text"), 2, {
		delay: -0.5,
		autoAlpha: 1,
		ease: Power1.easeOut
	});
});