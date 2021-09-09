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
    $(".loading").delay(200).fadeOut("slow");
    console.log('hello')
})



