/* global $ */
$(function(){
    // alert('OK');
    // $('xxx').yyy('zzz');
    // $('xxx') --> どこの場所に対して：セレクタ
    // .yyy() --> 何をする？: メソッド
    // y(zzz) --> どんな風に　：引数
    // $('#h1').text('ユーザー一覧');
    // $('#h1').addClass('red');
    // メソッドチェーン
    $('#h1').text('ユーザー一覧').addClass('red');
    
    $('#btn').on('click', () => {
        alert('OK');
    });
    
    $('h2').eq(0).text(`現在のユーザーの人数: 1人`).addClass('green').after($('<div>'));
    
    // const div = $('<div>');
    // $('h2').eq(0).;
});