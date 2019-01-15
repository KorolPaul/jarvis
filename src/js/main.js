$(window).on('load', function () { 

    /* Menu toggle */
    $('.menu-toggle').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('opened');
        $('.menu').toggleClass('opened');
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

    $(".information").on('click', 'button', function(e) {
        e.preventDefault();

        $(".information_button.active, .information_page.active").removeClass('active');

        $(this).addClass('active');
        $('.information_page[data-tab="'+ $(this).data('tab') +'"]').addClass('active');
    });

    /* Widjet */
    $('.cart-button').on('click', function() {
        $('#cart-widjet').toggleClass('opened');
    });
    $('.settings-button').on('click', function() {
        $('#profile-widjet').toggleClass('opened');
    });
    $('.search-button').on('click', function() {
        $('#search-widjet').toggleClass('opened');
    });
    $('.widjet_close').on('click', function() {
        $('.widjet').removeClass('opened');
    });

 });
