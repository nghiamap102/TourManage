$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if (scroll > 200) {
        $('#header-top').addClass('scrolling');
    } else {
        $('#header-top').removeClass('scrolling');
    }
    if (scroll > 300) {
        $('#header-top').addClass('show');
    } else {
        $('#header-top').removeClass('show');
        if (scroll > 200 && scroll < 300) {
            $('#header-top').addClass('sleep');
        }
    }
});
window.onscroll = function() {
    scrollFunction();
    scrollTopFunction();
}

function scrollFunction() {
    var getValue = document.getElementsByClassName('animated');
    var arr = [];

    var x = document.documentElement.scrollTop;
    var y = document.body.scrollTop;
    var j = 0;
    for (i = 0; i < getValue.length; i++) {
        arr.push(getValue[i].classList);
    }
    for (i = 0; i < getValue.length; i++) {
        if (j < 10000) {
            if (document.documentElement.scrollTop > j || document.body.scrollTop > j) {
                getValue[i + 1].classList.add('fadeInUp');
                j += 280;
            }
        }
    }
}

function scrollTopFunction() {
    if (document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
        document.getElementById('to-top').style.display = "block";
    } else {
        document.getElementById('to-top').style.display = "none";
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}