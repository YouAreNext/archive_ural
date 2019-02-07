$(document).ready(function () {
	$(".js-form-row-select").select2({
	});
	$(".js-form-row-date").datetator({
	});
    
    
    $(".modal-order").fancybox({
        'hideOnContentClick': true,
        'padding':0,
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
      
     $(".fancy-img").fancybox();
});