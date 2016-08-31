$(document).ready(function(){
      function isIEorEDGE(){
      return navigator.appName == 'Microsoft Internet Explorer' || (navigator.appName == "Netscape" && navigator.appVersion.indexOf('Edge') > -1);
      };

      if (isIEorEDGE()) {
        $("#alert").css("display","block");
      };


	var flag = 0;

    $("#mole").click(function () {
    		if (flag == 0) {
        		$("#des").fadeTo("fast", "0");
        		$("#hb-title").fadeTo("slow", "1");
            $(".atc-button").fadeTo("slow", "0.6");
      			$(this).html("+");
      			flag = 1;
      			console.log(flag);
      		} else {
    			$("#des").fadeTo("slow", "1");
        		$("#hb-title").fadeTo("fast", "0");
            $(".atc-button").fadeTo("slow", "1");
      			$(this).html("-");
      			flag = 0;
      			console.log(flag);
      		}

    });

    $("#spinner-form").click(function(){
     	var mobi_display = $('#mobi-menu').css("display");
     	// console.log(mobi_display);
     	if (mobi_display == "none"){
     		$("#mobi-menu").css("display","block");
     		// console.log("good");
     	} else {
     		$("#mobi-menu").css("display","none");
     		// console.log("bad");
     	}
    	
    });

    var audio = $("audio")[0];
	$("#play-name").click(function(){
		audio.play();
	});




  // $(".hover").mouseleave(
  //   function() {
  //     $(this).removeClass("hover");
  //   }
  // );

});