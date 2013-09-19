// JavaScript Document
 
//Face box
var faceurlpass;
var facename;
var faceposx, faceposy, faceh, facew;
function faceboxhide(){
	//$('.face-name-wrap').remove();
	//console.log("hide function called! " +  faceurlpass + ' .face-name-wrap');
}

function facebox(){		
        	$("#facebox-div").prepend("<div id='facebox-div-wrap' class='face-name-wrap' style='left:"+faceposx+"; top: "+faceposy+"; " + "!important; display:block;'><div class='face-box' style='" + "width:"+ facew +"!important; height:"+ faceh + ";'></div> <div class='face-name-txt'><div class='face-name-top-arrow'></div><div class='face-name-space'>"+ facename +"</div></div></div>");	 		    
}


$(document).ready(function() {
	
	 $('area').addClass('faceshape');
	 
	$(".faceshape").mouseover(function(){
		faceurlpass = $(this).attr('href');		
		facename = $(this).attr('alt');
		var faceposition = $(this).attr('coords').split(',');
		faceposx = +faceposition[0]-96 +'px';//$(this).attr('posx');
		faceposy = +faceposition[1]-10 +'px';//$(this).attr('posy');
		faceh = +faceposition[2]-72 +'px';
		facew = +faceposition[3]-127 +'px';
		facebox(faceurlpass);
		console.log(faceposition[3] + "'px'")		
	}) 	
	$(".popup-wrap img").mouseover(function(){		
		$(".face-name-wrap").remove();
		//faceboxhide();
	})


});