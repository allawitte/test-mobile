$(window).bind("load resize", function () {
    var width = $(window).width();
    //var height = $(window).height();
    var height = screen.height;
    if (width < 1000) {


        setPartnersBlock();

        setMainMenu();

        setCarousel(width);

        $('.secondary-menu-wrapper').attr('class', 'mobile-secondary-menu-wrapper clearfix');
        $('.secondary-menu').attr('class', 'mobile-secondary-menu');

        setSendRequestButton();

        setBottomPanel(height);

        setServiceMenuImgs();

        socialInMainContent();

        fullVersionLink();

    }
    else {
        console.log('desktop');
        $('.mobile').remove();
        $('#mobile-rcarousel').attr('id', 'rcarousel');
        $('.mobile-secondary-menu-wrapper').attr('class', 'secondary-menu-wrapper');
        $('.mobile-secondary-menu').attr('class', 'secondary-menu');
        $('#header').removeClass('close');
    }
});

function socialInMainContent(){
    if($('#content .like-social').length == 0) {
        var iLike = '<a href="" class="like"><i class="fa fa-thumbs-up"></i>Нравится</a><br/>';
        var txt = 'Нравится 298 людям. <a href="">Зарегистрируйтесь</a>, чтобы узнать, что нравится друзьям.';
        $('#content').append('<div class="mobile like-social">'+iLike+txt+'</div>');

        var socialIcons = $('#main-menu-outer .social_icons').clone();
        //console.log(socialIcons);
        socialIcons.appendTo('#content');
        $('#content .social_icons').addClass('mobile');
    }
}

function fullVersionLink(){
    if($('#footer .full-version').length == 0){
        $('#footer').append('<a href="" class="mobile full-version">Перейти к полной версии сайта</a>');
    }
}
function setCarousel(width){
    $('#video-reviews_wrapper li').css({'float': 'none', 'width': width});
    $('#rcarousel').attr('id', 'mobile-rcarousel').css({'width': '', 'height': ''});
    $('#mobile-rcarousel img').css({'max-width': '173px', 'width': '30%', 'height': ''});
}
function setServiceMenuImgs(){
    if ($('#services-menu .description img').length == 0) {
        var srcArr = ['img/flag.svg', 'img/graph-line.svg', 'img/group.svg', 'img/devices.svg'];
        $('#services-menu .description').append('<img src="" alt="" class="mobile"/>');
        $('#services-menu .description img').each(function (index) {
            $(this).attr('src', srcArr[index]);
        });

    }
}

function setSendRequestButton(){
    var sendRequest = $('#send_request').clone();
    if ($('#services-menu #send_request').length == 0) {
        sendRequest.appendTo('#services-menu');
        $('#services-menu #send_request').attr('class', 'mobile');
    }
}

function setPartnersBlock() {

    if ($('.region-highlighted .partners').length == 0) {
        var partnersBlock = $('#content > div:first-child').clone();
        partnersBlock.attr('class', 'mobile partners').css({'margin': ''});
        partnersBlock.appendTo('.region-highlighted');
        slideAward();
    }
}

function setBottomPanel(height) {
    var bottomPanel = '<div class="mobile bottom-panel"><i class="fa fa-phone" ></i><i class="fa fa-envelope"></i><i class="fa fa-facebook"></i></div>'
    if ($('.bottom-panel').length == 0) {
        $('.html').append(bottomPanel);
        //$('.html .bottom-panel').css({'position': 'fixed', 'top': height});
    }
}

function setMainMenu() {
    if ($('#header .fa').length == 0) {
        $('#header').append('<i class="mobile fa fa-phone" ></i>').append('<i class="mobile fa fa-bars" ></i>').append('<i class="mobile fa fa-times close" ></i>');
    }
    if ($('#main-menu-outer.close').length == 0) {
        $('#main-menu-outer').attr('class', 'close');
        var headerContacts = $('#header-contacts').clone();
        headerContacts.appendTo('#main-menu-outer #main-menu-wrapper');

        $('#main-menu-outer #main-menu-wrapper #header-contacts').attr('class', 'mobile');
        $('#main-menu-outer #main-menu-wrapper #header-contacts').attr('id', '');
        $('#header').on('click', '#header .fa-bars', toggleMobileMenu);
        $('#header').on('click', '#header .fa-times', toggleMobileMenu);
    }
}

function toggleMobileMenu() {

    if($(this).hasClass('fa-bars')){
        $('.mobile.fa.fa-bars').toggleClass('close');
        $('.mobile.fa.fa-times').toggleClass('close');
    }
    else if($(this).hasClass('fa-times')){
        $('.mobile.fa.fa-bars').toggleClass('close');
        $('.mobile.fa.fa-times').toggleClass('close');
    }
    $('#main-menu-outer').toggleClass('close');
}

function slideAward() {
    $('#content').on('click', '.partners #awards_front_wrapper_left', moveLeft);
    $('#content').on('click', '.partners #awards_front_wrapper_right', moveRight);


    function moveRight() {
        if (!$('.partners #awards_front_container').is(':animated')) {
            var left_indent = parseInt($('.partners #awards_front_container').css('marginLeft')) + 240;
            $('.partners #awards_front_container').animate({'marginLeft': left_indent}, 300, function () {
                $('.partners #awards_front_container .item:first').before($('#awards_front_container .item:last'));
                $('.partners #awards_front_container').css({'marginLeft': '-240px'});
            });
        }
    };

    function moveLeft() {
        if (!$('.partners #awards_front_container').is(':animated')) {
            var left_indent = parseInt($('.partners #awards_front_container').css('marginLeft')) - 240;
            $('.partners #awards_front_container').animate({'marginLeft': left_indent}, 300, function () {
                $('.partners #awards_front_container .item:last').after($('#awards_front_container .item:first'));
                $('.partners #awards_front_container').css({'marginLeft': '-240px'});

            });
        }
    }

    setInterval(function () {
        $(".partners #awards_front_wrapper_right").click();
    }, 3000);

    $('.partners #awards_front_container .item:first').before($('.partners #awards_front_container .item:last'));


}

//$('parent_static').on('event', 'children_dinamic', handler);
/**
 * Created by Alla on 7/10/2017.
 */
