//Placeholder Work-Around -- Nate Szytel 1/28/2013
//used for IE 7 and 8
  


$(function() {  
						
	'use strict'; 
	
	if(document.createElement("input").placeholder != undefined){
		return;	
	}
	$("<style type='text/css'> .placeholder{ color:#B0B0B0;} </style>").appendTo('head'); //Creates a class and dynamically and appends it to the HTML
	$('[placeholder]').blur(function() {   
		if($(this).val() == '' || $(this).val() == $(this).attr('placeholder')) {  
			
			$(this).val($(this).attr('placeholder')).addClass('placeholder');  
		}
	}).focus(function() {
		if($(this).val() == $(this).attr('placeholder')){ 
			$(this).setCursorPosition(0);
		}
	}).keypress(function() {  		
		if($(this).val() == $(this).attr('placeholder')) {
			$(this).val('').removeClass('placeholder'); 
		}
	}).keyup(function(){
		if($(this).val() == '') {  
			$(this).val($(this).attr('placeholder')).addClass('placeholder').setCursorPosition(0);  
		}
	}).blur();
	$("form").submit(function() {  
		$(this).find('[placeholder]').each(function() {
						
			if($(this).val() == $(this).attr('placeholder')) { 
				$(this).val('');
			}
		});
	});
});




//This function taken from http://tranthanhepu.blogspot.com/2011/10/jquery-set-cursor-position-in-text-area.html
(function($) {
  $.fn.setCursorPosition = function(pos) {
	   if ($(this).get(0).setSelectionRange) {
		    $(this).get(0).setSelectionRange(pos, pos);
	   } else if ($(this).get(0).createTextRange) {
             var range = $(this).get(0).createTextRange();
	     range.collapse(true);
	     range.moveEnd('character', pos);
	     range.moveStart('character', pos);
	     range.select();
	   }
	 }
})(jQuery);
