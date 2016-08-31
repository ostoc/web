$(document).ready(function(){
  // function isIEorEDGE(){
  //   if (navigator.appName == 'Microsoft Internet Explorer'){
  //     return true; // IE
  //   }
  //   else if(navigator.appName == "Netscape"){                       
  //    return navigator.appVersion.indexOf('Edge') > -1; // EDGE
  //   }       
  //   return false;
  // };


  function isieEdge(){
    // var rv = 0;
    if (navigator.appVersion.indexOf('Trident') > -1) {
      return 1;
    }else if(navigator.appVersion.indexOf('Edge') > -1){
      return 2; 
    }
    return 0;
  }  
  
  if (isieEdge()) {
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