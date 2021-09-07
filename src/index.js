const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    direction: 'horizontal',
    smartphone: {
        smooth: true,
        direction: 'horizontal',
    },
    tablet: {
        smooth: true,
        direction: 'horizontal',
    }
});
