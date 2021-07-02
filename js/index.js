// window.onscroll = function() {
//     onScrollHeaderListener();
// };


$(function () {
    $(document).scroll(function () {
        const scrollPos = $(this).scrollTop();
        onScrollHeaderListener(scrollPos);
    });
})

function onScrollHeaderListener(scrollPos) {
    if (scrollPos > 100) {
        $('#header').removeClass('header--big');
    } else {
        $('#header').addClass('header--big');
        // $('#1-banner-text').css('opacity', 1);
    }

    const bannerTextEl = $('#1-banner-text');
    const bannerHeight = $('#banner-img').height();
    const textTop = Number(bannerTextEl.css('top').slice(0, -2));
    console.log("scrollPos", scrollPos, "bannerHeight", bannerHeight, "top", textTop, "---", (textTop + (scrollPos)));

    bannerTextEl.css({
        'transform': `translate3d(0, ${scrollPos / 3}px, 0)`,
        'opacity': 1 - (scrollPos / 510)
    });
}
