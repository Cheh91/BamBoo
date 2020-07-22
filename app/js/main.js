$(function () {

    $(".btn__down").click(function(){
        $("html, body").animate({scrollTop:$(document).height()}, 2000);

        return false;
    });


    $('.gallery__slider').slick({
        // dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "120px",
        variableWidth: true,
        autoplay: true,
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    });




    $(".default__option").click(function () {
        $(this).parent().toggleClass("active");
    });

    $(".select__ul li").click(function () {
        let currentele = $(this).html();
        $(".default__option li").html(currentele);
        $(this).parents(".form__select").removeClass("active");
    });



    $(".default__option-2").click(function () {
        $(this).parent().toggleClass("active");
    });

    $(".select__ul-2 li").click(function () {
        let currentele = $(this).html();
        $(".default__option-2 li").html(currentele);
        $(this).parents(".form__select-2").removeClass("active");
    });


    $(".default__option-3").click(function () {
        $(this).parent().toggleClass("active");
    });

    $(".select__ul-3 li").click(function () {
        let currentele = $(this).html();
        $(".default__option-3 li").html(currentele);
        $(this).parents(".form__select-3").removeClass("active");
    });



    $(".sub-form__default-option").click(function () {
        $(this).parent().toggleClass("active");
    });

    $(".sub-form__select-ul li").click(function () {
        let currentele = $(this).html();
        $(".sub-form__default-option li").html(currentele);
        $(this).parents(".sub-form__select").removeClass("active");
    });


    $(".sub-form__default-option-2").click(function () {
        $(this).parent().toggleClass("active");
    });

    $(".sub-form__select-ul-2 li").click(function () {
        let currentele = $(this).html();
        $(".sub-form__default-option-2 li").html(currentele);
        $(this).parents(".sub-form__select-2").removeClass("active");
    });


    jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function () {
        var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });


    $('.reviews__slider').slick({
        // dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    });


   
    // $('.popup-modal').magnificPopup({
    //     type: 'inline',
    //     preloader: false,
    //     focus: '#username',
    //     modal: true,
    //     closeOnContentClick: true,
    // });
    // $(document).on('click', '.popup__close', function (e) {
    //     e.preventDefault();
    //     $.magnificPopup.close();
    // });


    function popupMenu(selector){
        let menu = $(selector);
        let button = menu.find(".burger-menu");
        let links = menu.find(".menu__link");
        let overlay = menu.find(".popup__overlay");
        let close = menu.find(".popup__close");

        button.on("click", (e) => {
            e.preventDefault()
            toggleMenu()
        })

        links.on("click", () => toggleMenu());
        overlay.on("click", () => toggleMenu());
        close.on("click", () => toggleMenu());

        function toggleMenu(){
            menu.toggleClass("menu__btn-active");

            // if(menu.hasClass("menu__btn-active")){
            //     $("body").css("overflow", "hidden");
            // } else {
            //     $("body").css("overflow", "visible");
            // }
        }
        
    }

    popupMenu(".menu__btn")
    
})
