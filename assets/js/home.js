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
    if (scroll == 0) {
        $('#header-top').removeClass('sleep')
    }
});

function eyepassword() {
    var x = document.getElementById("input_password");
    var y = document.getElementById("eye-open");
    var z = document.getElementById("eye-close");
    if (x.type === 'password') {
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    } else {
        x.type = 'password';
        y.style.display = "none";
        z.style.display = "block";
    }
};

window.onscroll = function() {
    scrollTopFunction();
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



function getEle(id) {
    return document.getElementById(id);
}


function abc() {
    var check = getEle('theme');

    if (check.checked === true) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');

        if (document.documentElement.getAttribute('data-theme') === 'dark') {

            getEle('sun').style.animationName = "sunOp";
            getEle('moon').style.animationName = "moonOp";

            // if (document.documentElement.getAttribute('data-theme') === 'dark') {
            //     console.log(document.documentElement.getAttribute('data-theme'));
        }
        // }
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        if (document.documentElement.getAttribute('data-theme') === 'light') {
            getEle('sun').style.animationName = "moonOp";
            getEle('moon').style.animationName = "sunOp";
        }
    }
}
document.getElementById('theme').addEventListener('change', abc)
window.onload = function() {

    eyepassword();
}





$('#input_username').on('keyup', function(e) {
    var val = $(this).val();
    if (val == '' || val.length < 8) {
        document.getElementById('username_err').innerHTML = "Vui lòng nhập đúng thông tin ";
    } else {
        document.getElementById('username_err').innerHTML = "";
    }
});
var items = document.querySelectorAll('.animated')

function callbackFunc() {

    for (var i = 0; i < items.length; i++) {
        var rect = items[i].getBoundingClientRect();

        if (rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)) {
            items[i].classList.add("fadeInUp");
        }
    }
}
window.addEventListener("load", callbackFunc);
window.addEventListener("resize", callbackFunc);
window.addEventListener("scroll", callbackFunc);