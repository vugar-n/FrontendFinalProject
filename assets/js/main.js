$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            $('#mainNav').addClass('navbar-fixed-top')
                .css('background-color', '#fff !important');

            $(".navbar-nav li a").css({
                color: "black"
            })

            $(".navbar-brand img").attr('src', 'assets/img/logo-inverted.png');


        } else {
            $("#mainNav").removeClass('navbar-fixed-top')
                .removeAttr('style');
            $(".navbar-nav li a").removeAttr('style');
            $(".navbar-brand img").attr('src', 'assets/img/logowhite.png');
        }
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
		if ($(this).scrollTop() > 600) {
			$('.back-to-top').fadeIn();
		} else {
			$('.back-to-top').fadeOut();
		}
	});
	
	$('.back-to-top').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});


  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
        window.location.hash = hash;
      });
    }
  });
      
});



 
