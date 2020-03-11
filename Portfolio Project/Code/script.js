// Unhide nav on overlay click
    function openHomeNav() {
        var x = document.getElementsByClassName("navHidden");
        x[0].style.visibility = "visible";
    }

// Hide overlay on click
    function closeNav() {
        document.getElementById("overlayNav").style.display = "none";
    }

// Overlay subheading typing
    var typed = new Typed('.typing', {
        strings: [
            'IT Professional',
            'Team Manager',
            'Program Manager',
            'Web Designer',
            'Graphic Designer',
            'Software Developer'
        ],
        typeSpeed: 75,
        backSpeed: 75,
        smartBackspace: true, // this is a default
        loop: true
    });

// Navbar - changes background color to black when page scrolled
    $(window).scroll(function(){
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
    });

// Navbar - in mobile view hides navbar when nav item clicked
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

// JavaScript for disabling form submissions if there are invalid fields
    (function() {
        'use strict';
        window.addEventListener('load', function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
            });
        }, false);
    })();

// Submit button popover text
    $('.popover-dismiss').popover({
        trigger: 'hover'
    })
