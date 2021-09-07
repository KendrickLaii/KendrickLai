const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    direction: 'horizontal',
    smartphone: {
        smooth: true,
        direction: 'horizontal',
    }
});


$(document).ready(function () {
    
    $('#to-home').on('click', () => {
        scroll.scrollTo('#home')
    });

    $('#to-about').on('click', () => {
        scroll.scrollTo('#about')
    });

    $('#to-works').on('click', () => {
        scroll.scrollTo('#works')
    });

    $('#to-contact').on('click', () => {
        scroll.scrollTo('#contact')
    });

    console.log('hello')
});