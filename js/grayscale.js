/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
$(document).ready(function () {

    init_masonry();

    $(window).resize(function (){
        init_masonry();
    });

    $(".timeline li .tl-icon").click("", function () {
        if ($(this).children(":first").attr('class').indexOf("fa fa-chevron-right") >= 0) {
            $(this).children(":first").attr('class', "fa fa-chevron-down");
        } else {
            $(this).children(":first").attr('class', "fa fa-chevron-right");
        }
    });
});


function init_masonry(){
    var $grid = $('#projects').imagesLoaded( function() {
        // init Masonry after all images have loaded

        var gutter = 12;
        var min_width = 250;

        var columWidth = function (containerWidth){
            var num_projects = (containerWidth/min_width | 0);
            var project_width = (((containerWidth - (num_projects-1)*gutter)/num_projects) | 0) ;
            if (containerWidth < min_width) {
                project_width = containerWidth;
            }

            $('.project-item').width(project_width);

            return project_width;
        }
        $grid.masonry({
            // options
            itemSelector: '.project-item',
            gutter: 12,
            columnWidth: columWidth($('#projects').width()),
            percentPosition: true
        });


    });

}

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

