$(".name").keypress(function(event){
    var inputValue = event.charCode;
    if(!(inputValue >= 65 && inputValue <= 120) && (inputValue != 32 && inputValue != 0)) {
        event.preventDefault();
    }
});
$(".number").keypress(function (e) {
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        return false;
    }
});
$("#contact-form").submit(function(event) {
    event.preventDefault();
    $('.contact-loader').show();
    $('#contact-form').hide();

    var name = $('#contact-form input.name').val();
    var email = $('#contact-form input.email').val();
    var number = $('#contact-form input.number').val();
    var message = $('.message').val();
    $.ajax({
        method: 'POST',
        dataType: "json",
        url: "https://formspree.io/hirenkeradiya@gmail.com",
        data: { name: name, number:number, email: email, message:message  },
    })
    .done(function(msg) {
        $('.contact-loader').hide();
        var newMessage = '<div class="alert alert-success alert-dismissible" style="padding-bottom:241px;"><button type="button" class="close" data-dismiss="alert"><span>&times;</span></button><strong>sucess!</strong> Mail Send Sucessfully</div>';

        $('.details').prepend(newMessage);
    });
});
// it has used to the fixed menu at the top and slide to the anchor tag
$(window).scroll(function() {
    if ($(".menu").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        console.log("s");
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 2500, 'easeInOutExpo');
        event.preventDefault();
    });

});

// in the mobile screen that is toggle hide and show the menu
function showMobileMenu() {
    $(".mobile-menu-list").toggle();
}

$('#photoshop').waterbubble({ radius: 70,data: 0.8,waterColor: '#00a78e', textColor: 'black', txt: '80%', });
$('#html5').waterbubble({ radius: 70,data: 0.98,waterColor: '#00a78e', textColor: 'black', txt: '98%', });
$('#css3').waterbubble({ radius: 70,data: 0.98,waterColor: '#00a78e', textColor: 'black', txt: '98%', });
$('#php').waterbubble({ radius: 70,data: 0.8,waterColor: '#00a78e', textColor: 'black', txt: '80%', });
$('#photography').waterbubble({ radius: 70,data: 1,waterColor: '#00a78e', textColor: 'black', txt: '100%', });
$('#team-work').waterbubble({ radius: 70,data: 0.6,waterColor: '#00a78e', textColor: 'black', txt: '60%', });

function createCircleOverlay(previewEl) {
    var dummy = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    dummy.setAttributeNS(null, 'version', '1.1');
    dummy.setAttributeNS(null, 'width', '100%');
    dummy.setAttributeNS(null, 'height', '100%');
    dummy.setAttributeNS(null, 'class', 'overlay');
    var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttributeNS(null, 'cx', 0);
    circle.setAttributeNS(null, 'cy', 0);
    circle.setAttributeNS(null, 'r', Math.sqrt(Math.pow(previewEl.offsetWidth,2) + Math.pow(previewEl.offsetHeight,2)));
    dummy.appendChild(g);
    g.appendChild(circle);
    previewEl.appendChild(dummy);
}

new GridFx(document.querySelector('.grid'), {
    onInit : function(instance) {
        createCircleOverlay(instance.previewEl);
    },
    onResize : function(instance) {
        instance.previewEl.querySelector('svg circle').setAttributeNS(null, 'r', Math.sqrt(Math.pow(instance.previewEl.offsetWidth,2) + Math.pow(instance.previewEl.offsetHeight,2)));
    },
    onOpenItem : function(instance, item) {
        // item's image
        var gridImg = item.querySelector('img'),
        gridImgOffset = gridImg.getBoundingClientRect(),
        win = {width: document.documentElement.clientWidth, height: window.innerHeight},
        SVGCircleGroupEl = instance.previewEl.querySelector('svg > g'),
        SVGCircleEl = SVGCircleGroupEl.querySelector('circle');

        SVGCircleEl.setAttributeNS(null, 'r', Math.sqrt(Math.pow(instance.previewEl.offsetWidth,2) + Math.pow(instance.previewEl.offsetHeight,2)));
        // set the transform for the SVG g node. This will animate the circle overlay. The origin of the circle depends on the position of the clicked item.
        if( gridImgOffset.left + gridImg.offsetWidth/2 < win.width/2 ) {
            SVGCircleGroupEl.setAttributeNS(null, 'transform', 'translate(' + win.width + ', ' + (gridImgOffset.top + gridImg.offsetHeight/2 < win.height/2 ? win.height : 0) + ')');
        }
        else {
            SVGCircleGroupEl.setAttributeNS(null, 'transform', 'translate(0, ' + (gridImgOffset.top + gridImg.offsetHeight/2 < win.height/2 ? win.height : 0) + ')');
        }
    }
});
