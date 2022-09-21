
import $ from 'jquery';

$(function (){

    //实现奇偶行的变色

    $('li:odd').css('background-color','red');

    // $('li:even').css('background-color','cyan');
    $('li:even').css('background-color','blue');

    log();
})

function log() {
    console.log('hellbbbbbbßo log')
}