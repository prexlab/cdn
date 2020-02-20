const getScrollTrigger = function (selector, callback) {

    return function () {
        let scroll = $(window).scrollTop();
        let windowHeight = window.innerHeight ? window.innerHeight: $(window).height();

        $(selector).each(function () {

            var position = $(this).offset().top;

            console.log([position, scroll, windowHeight, scroll + windowHeight * 3 / 4]);

            if ((scroll + windowHeight * 3 / 4 > position) && !$(this).is('.scrolled')) {
                $(this).addClass('scrolled');
                callback(this);
            }
        });
    }
};
