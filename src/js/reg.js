import $ from './lib/jquery.esm.js';
console.log($);
//---密码和短信点击状态切换------------
$('.title').children().click(function () {
    $('.title').children().removeClass('active');

    $(this).toggleClass('active');


});
// ------------end------------------------

// -------------密码、短信、扫码框切换--------
$('.title').children().eq(0).click(function () {

    $('.pwd').css('display', 'block');
    $('.tel').css('display', 'none');
    $('.codebox').css('display', 'none');

});

$('.title').children().eq(1).click(function () {

    $('.pwd').css('display', 'none');
    $('.tel').css('display', 'block');
    $('.codebox').css('display', 'none');

});

$('#codebtn').click(function () {

    $('.pwd').css('display', 'none');
    $('.tel').css('display', 'none');
    $('.codebox').css('display', 'block');

});


$('.codebox>.img1').click(function () {

    if ($('.title').children().eq(0).hasClass('active')) {

        $('.pwd').css('display', 'block');
        $('.tel').css('display', 'none');
        $('.codebox').css('display', 'none');

    } else {

        $('.pwd').css('display', 'none');
        $('.tel').css('display', 'block');
        $('.codebox').css('display', 'none');

    }

});
// -------------end--------------------------------

//-------------获取验证码倒计时-----------------------
$('.getmsg').click(function () {

    let num = 10;
    let timer = setInterval(() => {
        num--;
        if (num === 0) {
            num = randomCode();
            clearInterval(timer);
        };
        $(this).text(num).css({ 'color': 'red', 'background-color': '#6ed5c9', 'font-size': '16px', 'font-weight': 'bold' });
    }, 1000);


});

// --------------获取区号-------------------

$('#selectbox').click(function () {

    let value = $(this).val();
    $(this).prev().prev().text(value)

})

// ----------------验证手机号-----------------
$('input[type=tel]').blur(function () {
    $(this).removeClass('ture');
    let reg = /^1[3-9]\d{9}$/;

    let str = $(this).val();

    let value = reg.exec(str);

    console.log(value);
    if (value) {
        // console.log(2);
        $('.tel>.cue-box').css('display', 'none');
        $(this).attr('class', 'ture');
    } else {
        // console.log(3);
        $('.tel>.cue-box').css('display', 'block');
    }

});

//-------------------随机验证码---------------
let res = [];
for (let i = 0; i < 16; i++) {
    res.push(i.toString(16))
};
function randomCode() {
    let empty = '';
    for (let i = 0; i < 4; i++) {
        let index = Math.round(Math.random() * 15);
        empty += res[index];

    }

    let reg1 = /[0-9]+[a-z]+/gi;

    reg1.test(empty) ? empty : randomCode();

    return empty;

}

//----------------验证密码------------------

$('.pwd-box input[type=text]').blur(function () {
    $(this).removeClass('ture');
    // console.log(2);

    let value1 = $(this).val();
    console.log(value1);
    let value2 = $('.getmsg').text();
    console.log(value2);
    if (value1 === value2) {
        $(this).attr('class', 'ture');
        $('.tel>.cue-box').css('display', 'none')
    } else if (!value1) {
        $('.tel>.cue-box').css('display', 'block').text('请获取验证码！');
    }
    else {
        $('.tel>.cue-box').css('display', 'block').text('验证码错误！');
    }

})

//-----------------登录-------------------------

$('button[type=submit]').click(function () {

    if ($('.pwd-box input[type=text]').hasClass('ture') && $('input[type=tel]').hasClass('ture')) {

        alert('登录成功！');
        location.href = 'http://localhost/www.tmall.com/src/index.html'

    } else {
        alert('登录失败!')
    }

})
//--------------------end------------------------------------

