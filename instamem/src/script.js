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
        var $count = $item.find('footer > span');
        if ($count.hasClass('liked')) {
            $count.removeClass('liked');
            $count.text(parseInt($count.text()) - 1);
        } else {
            $count.addClass('liked');
            $count.text(parseInt($count.text()) + 1);
        }

        $like.animate({
            opacity: 1,
            height: '128px',
            width: '128px'
        }, 100, function () {
            $like.animate({
                height: '96px',
                width: '96px'
            }, 100, function () {
                setTimeout(function () {
                    $like.animate({
                        opacity: 0,
                        height: '56px',
                        width: '56px'
                    }, 50);
                }, 100);
            });
        });
    }

    var tapped = 0;
    $('.item').on('doubeclick, touchstart', function (e) {
        if (!tapped) {
            tapped = setTimeout(function () {
                tapped = null;
            }, 300);
        } else {
            clearTimeout(tapped);
            tapped = null;
            like($(this));
        }
        e.preventDefault();
    });
});