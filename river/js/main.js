// All custom codes with comment
/*nav*/


// animation on scroll
$(document).ready(function () {
    var $animation_elements = $('.effect2');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
        $.each($animation_elements, function () {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);
            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass('animated zoomIn');
            } else {
                $element.removeClass('animated zoomIn');
            }
        });
    }
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
    /*footer link start*/

    $("ul.contact-socials li a").mouseover(function () {
        var getcolor = $(this).attr("setcolor");
        $(this).addClass(getcolor);
        $("#footer").css("background", "#2d0d8a");
    });
    $("ul.contact-socials li a").mouseout(function () {
        var getcolor = $(this).attr("setcolor");
        $(this).removeClass(getcolor);
        $("#footer").css("background", "#000");
    });
    /*----------footer social links*/
    /*scroll top*/
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    /*scroll arrow ends*/

});
