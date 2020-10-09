$(function(){
		
		$("main").show();
		$("#preload-page").delay(4000).fadeOut(1000);
		
		$("#h41").click(function(){
			$("#exhibition-img").css("display", "block");
			$("#countdown").animate({left: "12%"}, 10);
			$("#slideshow0").css("display", "none");
			
		});
		
		$("#h42").click(function(){
			$("#exhibition-img").css("display", "none");
			$("#countdown").animate({left: "-100%"}, 10);
			$("#slideshow0").css("display", "block");
		
		});
		
		
		$("#rele-logo2").click(function(){
			$("#exhibition-img").css("display", "none");
			$("#countdown").animate({left: "-100%"}, 10);
			$("#slideshow0").css("display", "block");
		
		});
		
		
		$("#offslide-btn").click(function(){
			   $("#offslide").animate({left: "0%"}, 800);
			   $("#offslide-btn").css("display", "none");
			   $("#offslide-h1").animate({left: "15%"} ,900);
			   $("#offslide-btn").off(click);
			   
		});
		
		
		$("#menu-cover").click(function(){
			$("#menu-cover").css("display", "none");
			$("#close-trigger").css("display", "block");
			$("#menu-cover").off(click);
		});
		
		$("#close-trigger").click(function(){
			$("#menu-cover").css("display", "block");
			$("#close-trigger").css("display", "none");
			$("#offslide-close").trigger("click");
			$("#close-trigger").off(click);
		});
		
		
		$("#offslide-close").click(function(){
			   $("#offslide").animate({left: "-100%"}, 800);
			   $("#offslide-btn").css("display", "block");
			   $("#offslide-h1").animate({left: "-70%"}, 900);
			   $("#offslide-close").off(click);
		});	
	
		$("#works-span").click(function(){
			$("#down").animate({height: "13%"}, 800);
			$("#contact").animate({top: "79%"}, 500);
			$("#exhibition").animate({top: "86%"}, 500);
			$("#works-span").css("display", "none");
			$("#works-span2").css("display", "block");
			$("#mob-year").css("display", "block");
			$("#mob-series").css("display", "block");
			$("#mob-year").animate({bottom: "0%", opacity: ".3"}, 800);
			$("#mob-series").animate({bottom: "35%", opacity: ".3"}, 800);
			$("#works-span").off(click);
		});
		
		$("#works-span2").click(function(){
			$("#down").animate({height: "0%"}, 800);
			$("#contact").animate({top: "66%"}, 1000);
			$("#exhibition").animate({top: "73%"}, 1000);
			$("#works-span").css("display", "block");
			$("#works-span2").css("display", "none");
			$("#mob-year").animate({bottom: "0%", opacity: "0"}, 800);
			$("#mob-series").animate({bottom: "35%", opacity: "0"}, 800);
			$("#works-span2").off(click);
		});
		
		$("#slideshow li").click(function(){
			$("#span-trig").trigger("click");
		});
		
  
	});