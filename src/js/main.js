$(window).on('load', function () { 

    /* Menu toggle */
    $('.menu-toggle').on('click', function(e) {
        e.preventDefault();
        $(this).next().toggleClass('opened');
    });

    $('.menu').on('click', '.menu_list-item__parent > a', function(e) {
        e.preventDefault();
        $(this).next().toggleClass('opened');
    });


    /* Dropdown */
    $("select:visible").chosen({
        disable_search: true
    });

    /* Tabs */
    $(".tabs").on('click', 'button', function(e) {
        e.preventDefault();

        $(".tabs_button.active, .tabs_tab.active").removeClass('active');

        $(this).addClass('active');
        $('.tabs_tab[data-tab="'+ $(this).data('tab') +'"]').addClass('active');
    });

    /* Widjet */
    $('.cart-button, .widjet_close').on('click', function() {
        $('.widjet').toggleClass('opened');
    });

 });
