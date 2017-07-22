$(function () {
    $('.owl-carousel').owlCarousel({
        nav: false,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    function like($item) {
        var $like = $item.find('.like');

        $like.toggle();
    }

    var tapped = 0;
    $('.item').on('doubeclick, touchstart', function (e) {
        if (!tapped) {
            tapped = setTimeout(function () {
                tapped = null
            }, 300);
        } else {
            clearTimeout(tapped);
            tapped = null;
            like($(this));
        }
        e.preventDefault()
    });
});