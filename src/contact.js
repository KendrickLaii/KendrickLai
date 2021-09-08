const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    direction: 'vertical',
    tablet: {
        smooth: true,
        direction: 'vertical',
    },    
});

$(document).ready(() => {
    $(".loading").fadeOut("slow");
})

