
import $ from 'jquery';

$(function (){

    //实现奇偶行的变色

    $('li:odd').css('background-color','red');

    $('li:even').css('background-color','cyan');

})