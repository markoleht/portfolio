//SCROLLSPY

$(document).ready(function () {
    $('body').scrollspy({
        target: ".navbar",
        offset: 50
    });

    $("#myNavbar a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        } 
    });

    $("#nupp1").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = '#about';

            
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        } 
    });
});



//form validation
(function () {
    'use strict';
    window.addEventListener('load', function () {

        var forms = document.getElementsByClassName('needs-validation');

        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

//progress bar

window.addEventListener('scroll', function() {
    var window_height = window.innerHeight;
    var window_top_position = window.scrollY;
    var window_bottom_position = (window_top_position + window_height);
    console.log(1)
    
    jQuery('.skillbar').each(function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
        if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
            console.log(2)
            if(!$element.hasClass('in-view')) {
                $element.addClass('in-view');
                jQuery(this).find('.skillbar-bar').delay(100).animate({
                    width: jQuery(this).attr('data-percent')
                }, 1000);
            }
        } else {
            if($element.hasClass('in-view')) {
                $element.removeClass('in-view');
                jQuery(this).find('.skillbar-bar').css({
                    width: 0
                });
            }
        }
    });
});
//$window.trigger('scroll');

//TOOLTIP
$('[data-toggle="tooltip"]').tooltip();
    $('#nupp1', '#nupp').tooltip();







 