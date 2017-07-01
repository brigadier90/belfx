$(function() {


	
	var topNav = $(".top-nav-bar");
	var bottomNav = $(".bottom-nav-bar");

	//check if the user is scrolled down to begin with
	if($(document).scrollTop() > 20) {
		topNav.css("top", "-67px")
		bottomNav.css("top", "0px")
		bottomNav.css("position", "fixed")
		bottomNav.css("background-color", "rgba(34,34,34,0.5)")
	}

	$("#hamburger-image").click(function() {

		if($(".menu-items-list-container").css("display") == "none") {
			$(".menu-items-list-container").css("display", "block");


		} else {
			$(".menu-items-list-container").css("display", "none");
		}
		
	});


	//desktop menu dropdown
	$(".menu-item").hover(function () {

		//.hamburger-list because remember hamburger is in a different ul
		if($(".hamburger-list").css("display") == "none") {//clever way to know if we are in face in mobile or desktop view
			var dropdown = $(this).find(".dropdown");

			//get the li offset from top and bottom
			var left = $(this).offset().left;
			var top = $(this).offset().top;

			//check if we have the outer 2 right elements
			var firstLi = $(".menu-item:first-child");
			var secondLI = $(".menu-item:nth-child(2)");
			if ($(this).is(firstLi) || $(this).is(secondLI)) {
				//set the dropdown offset
				left = $(this).offset().left - dropdown.width() + $(this).width() + 20;

				if(bottomNav.css("position") == "fixed") {
					top = $(this).height() + 33;
				} else {
					
					top = 53;
				}

				dropdown.css("left", left + "px");
				dropdown.css("top", top + "px");
			} else {
				//set the dropdown offset
				left = $(this).offset().left;
				
				if(bottomNav.css("position") == "fixed") {
					top = $(this).height() + 33;
				} else {
					
					top = 53;
				}

				dropdown.css("left", left + "px");
				dropdown.css("top", top + "px");
				/* {
					dropdown.css("position", "fixed");
				} */
			}

			//make it visible
			dropdown.slideDown(250

				);

			
		}

	}, function () {
		var dropdown = $(this).find(".dropdown");
		dropdown.css("display", "none");
	});


	//scroll and hide menu effect
	$(window).scroll(function() {
		var windowTop = $(this).scrollTop();
		
		if(windowTop > 20 && bottomNav.css("position") == "absolute") {
			topNav.animate({top: "-67px"}, 1000);
			bottomNav.css("position", "fixed" );
			bottomNav.animate({top: "0px", backgroundColor: "rgba(34,34,34,0.5)" }, 700);
			
		} else if((windowTop <= 20) && bottomNav.css("position") == "fixed") {
			bottomNav.css("position", "absolute" );
			bottomNav.animate({top: "67px", backgroundColor: "transparent"}, 700);
			topNav.animate({top: "0px"}, 700);

	
		}

		console.log(parseInt(windowTop));		
		
	});

		

});