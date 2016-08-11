$(document).ready(function() {

$('#myCarousel').carousel({
	interval: 10000
	})
    
    $('#myCarousel').on('slid.bs.carousel', function() {
    	//alert("slid");
	});

$("h1").slabText({
            // Don't slabtext the headers if the viewport is under 380px
            "viewportBreakpoint":380
});

}); 