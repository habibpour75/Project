$(document).ready(function () {
    function cycle() {
        var $items = $("#ulServices");

        function rotate() {
            var $active = $items.find('li.activeSlide');
            // $active.find('.more').css("display","none");
            index = $items.find('li').index($active.get(0));
            fucn = setTimeout(function () {
                $active.removeClass('activeSlide');
                $active.next().addClass('activeSlide');
                if (($items.find('li').index($active) + 1) == $items.find('li').length) {
                    $active.removeClass('activeSlide');
                    $items.find('li:first').addClass('activeSlide');
                }
                rotate();
            }, 2000);
        }

        rotate();

    }
    cycle();
    $("#ulServices li").on('click', function (event) {
        $("#ulServices li.activeSlide").removeClass('activeSlide');
        $(this).addClass('activeSlide');
        return false;
    });
    var $current;
    $("#ulServices li").mouseover(function () {
        $current = $('#ulServices').find('li.activeSlide');
        $current.removeClass('activeSlide');
        clearTimeout(fucn);
    });
    $("#ulServices li").mouseleave(function () {
        if ($current.length === 0) {
            $(this).addClass('activeSlide');
        }
        else {
            $current.addClass('activeSlide');
        }
        cycle();

    });


    //==============================================================

    //var x = UIkit.slider("#slider_service");
    UIkit.util.on('#slider_service', 'itemshown', function () {
        var $testSlider = $("#slider_service");
        var x = $testSlider.find('li.uk-active');
        $(x).addClass('activeSlide');
        //$('#slider_service ').animate({ transform: 'none'});
    });

    UIkit.util.on('#slider_service', 'itemhidden', function () {
        var $testSlider = $("#slider_service");
        var x = $testSlider.find('li.activeSlide');
        $(x).removeClass('activeSlide');
        //$('#slider_service ').animate({ transform: 'none'});
    });


});