jQuery(document).ready(function(){
    if(jQuery('.isotope-grid').length){
        var isogrid = jQuery('.isotope-grid').isotope({
            itemSelector:'.isotope-grid-item',
            layoutMode:'fitRows',
        })
    }

    jQuery(".portfolio-shuffle").click(function () {
        jQuery('.isotope-grid').isotope("shuffle");
    });

    jQuery('.portfolio-filter-listing li a').click(function () {
        jQuery(this).parent().siblings().removeClass('active');
        jQuery(this).parent().addClass('active');
        var filterValue = jQuery(this).attr('data-filter');
        isogrid.isotope({filter: filterValue});
    });
})