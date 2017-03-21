// script for popup login div

jQuery(document).ready(function($){
	//open popup
	$('.cd-popup-trigger').on('click', function(event){
		event.preventDefault();
		$('.cd-popup').addClass('is-visible');
	});

	//close popup
	$('.cd-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popup').removeClass('is-visible');
	    }
    });
});

// end
// script for popup own photos album in host profile

jQuery(document).ready(function($){
	//open popup
	$('.cd-popup-trigger').on('click', function(event){
		event.preventDefault();
		$('.cd-popup').addClass('is-visible');
	});

	//close popup
	$('.cd-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popup').removeClass('is-visible');
	    }
    });
});

// end



// script for opening profile dorpdown from navigation bar
$('.drop-profile-items').hide();
$("#showButton").click(function(e){
     $('.drop-profile-items').toggle(0);//or just show instead of toggle
});
// end




// SCRIPT FOR TABS IN SEARCH RESULT PAGE
	 $(".tab_content").hide();
	 $(".tab_content:first").show();

 /* if in tab mode */
	 $("ul.tabs li").click(function() {

		 $(".tab_content").hide();
		 var activeTab = $(this).attr("rel");
		 $("#"+activeTab).fadeIn();

		 $("ul.tabs li").removeClass("active");
		 $(this).addClass("active");

	 $(".tab_drawer_heading").removeClass("d_active");
	 $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");

	 });
 /* if in drawer mode */
 $(".tab_drawer_heading").click(function() {

		 $(".tab_content").hide();
		 var d_activeTab = $(this).attr("rel");
		 $("#"+d_activeTab).fadeIn();

	 $(".tab_drawer_heading").removeClass("d_active");
		 $(this).addClass("d_active");

	 $("ul.tabs li").removeClass("active");
	 $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
	 });


 /* Extra class "tab_last"
		to add border to right side
		of last tab */
 $('ul.tabs li').last().addClass("tab_last");

 // END OF SCRIPT FOR TABS




// FUNCTION FOR ACTIVING HEART COLOR AT SEARCH RESULT PAGE

 $('#heart-icon').click(function changeclass() {
		if ($('#heart-icon').hasClass('active-heart')){
            $('#heart-icon').removeClass('active-heart');
    } else {
		     $(this).addClass('active-heart');
		}
});

// END OF FUNCTION



// script for opening report dorpdown in guest message page
$('.drop-report-items').hide();
$("#showButton").click(function(e){
     $('.drop-report-items').toggle(0);//or just show instead of toggle
});
// end


$('.hide-on-click').click(function() {
		$('.invitation-on-open-message').hide();
}
)

// END OF SCRIPT



// SCRIPT FOR FILTER SEARCH EXPANTION
  $(document).ready(function($) {
		$('.view-more-filter-link').next().hide();
    $('#accordion').find('.accordion-toggle').click(function(){

      //Expand or collapse this panel
      $(this).next().slideToggle('fast');

      //Hide the other panels
      $(".accordion-content").not($(this).next()).slideDown('fast');

			$(".view-more-filter-link").hide();

    });
  });
	// END OF SCRIPT

	function updateTextInputmin(val) {
	          document.getElementById('textInputmin').value=val;
	        }
	function updateTextInputmax(val) {
	          document.getElementById('textInputmax').value=val;
	        }
