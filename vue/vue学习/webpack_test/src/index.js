
import $ from 'jquery';

//导入样式*（在webpack中，一切皆模块）
import './css/index.css'
import './css/index.less'

import test from './images/test.png'
$('.box').attr('src' , test);

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

function info(target){
    target.info = "Person info "
}

@info
class Person{}

console.log(Person.info);
