//WORKS PERFECTLY 11-26-13
$(document).ready(function() {
	
    $('.main_tab a').click(function() {
		// save $(this) in a variable for efficiency
		var $this = $(this);
		// hide panels
		$('.ltMenu').hide(); //was .ltMenu
		// retrieve href from link (is id of panel to display) 
		var ltMenu = $this.attr('href');
		// show panel
                if((ltMenu === '#start') || (ltMenu === '#apps') || (ltMenu === '#tAndT')|| (ltMenu === '#direct')){
                    $(ltMenu).fadeIn(250); //was fadeIn
                    if(ltMenu === '#start'){  // or href parent is class of ul!!
                        $('#middle_banner h1').replaceWith('<h1>Startup</h1>');
                        $('.breadcrumb p').replaceWith('<p><a href="index.html">Home</a> / Startup</p>');
                    }else if(ltMenu === '#apps'){
                        $('#middle_banner h1').replaceWith('<h1>Applications</h1>');
                        $('.breadcrumb p').replaceWith('<p><a href="index.html">Home</a> / Applications</p>');
                    }else if(ltMenu === '#tAndT'){
                        $('#middle_banner h1').replaceWith('<h1>Training/Tutorials</h1>');
                        $('.breadcrumb p').replaceWith('<p><a href="index.html">Home</a> / Training/Tutorials</p>');
                    }else if(ltMenu === '#direct'){
                        $('#middle_banner h1').replaceWith('<h1>Directories</h1>');
                        $('.breadcrumb p').replaceWith('<p><a href="index.html">Home</a> / Directories</p>');
                    };
                    return(false);
                  }else{
                    $('.ltMenu[id="homePic"]').show();
                    $('#middle_banner h1').replaceWith('<h1>Help Desk home</h1>');
                    $('.breadcrumb p').replaceWith('<p>/ Help Desk Home</p>');
               };
	}); // end click
	 $('.ltMenu:not([id="homePic"])').hide();
	// open first tab
}); // end ready