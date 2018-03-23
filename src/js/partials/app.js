$(document).ready(function () {

    function scroll_bar_init() {
        $(".scroll_bar").slimscroll({
            width: 'auto',
            height: '100%',
            size: '3px',
            color: '#cccccc',
            distance: '-5px',
            opacity: .5,
            railVisible: false,
            railColor: '#555555',
            railOpacity: .2,
            railDraggable: true,
            railClass: 'slimScrollRail',
            barClass: 'slimScrollBar',
            wrapperClass: 'slimScrollDiv',
            allowPageScroll: false,
            wheelStep: 20,
            touchScrollStep: 200,
            borderRadius: '0',
            railBorderRadius: '0'
        });

    }

    function scroll_bar_destroy() {
        $(".scroll_bar").slimscroll({destroy: true}).css({overflow:"visible"});
    }

    function scrolling_top() {
        var top = jQuery(window).scrollTop();
        if (top > 200) {
            $(".header").addClass("header_position-fixed");
            $(".btn-up").fadeIn(300);
        } else {
            $(".header").removeClass("header_position-fixed");
            $(".btn-up").fadeOut(300);
        }
    }

    function resize_window() {
        if (jQuery(window).innerWidth() > 1199) {
            scroll_bar_destroy();
        }
    }

    scrolling_top();
    resize_window();
    $(window).resize(resize_window);
    $(window).scroll(scrolling_top);

    $(".burger-toggle").on("click", function () {
        var bar = $(".menu");
        var overlay = $(".overlay");
        var toggle = $(this);
        if (bar.hasClass("menu_active")) {
            toggle.removeClass("burger-toggle_active");
            $("body").css({"overflow": "auto"});
            bar.removeClass("menu_active");
            scroll_bar_destroy();
        } else {
            toggle.addClass("burger-toggle_active");
            scroll_bar_init();
            bar.addClass("menu_active");
            $("body").css({"overflow": "hidden"});
        }
    });

    $(".table-title-drop").on("click", function () {
        if (jQuery(window).innerWidth() < 600) {
            if ($(this).hasClass("table-title-drop_open")) {
                $(this).removeClass("table-title-drop_open").find("td").slideUp(300);
            } else {
                $(this).addClass("table-title-drop_open").find("td").slideDown(300);
            }
        }
    });

    $(".btn-up").click(function () {
        $("html, body").animate({scrollTop: 0}, 450);
        return false;
    });

    $(".menu .menu__parent .menu__button").on("click", function () {
        if ($(this).parent().hasClass("menu__parent_focus")) {
            $(this).removeClass("menu__button_active");
            $(this).parent().removeClass("menu__parent_focus").find(".menu__level").removeClass("menu__level_active");
        } else {
            $(this).addClass("menu__button_active");
            $(this).parent().addClass("menu__parent_focus").find(".menu__level").addClass("menu__level_active");
        }
        return false;
    })
});