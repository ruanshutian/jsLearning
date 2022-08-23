"use strict"

/**
 * F.prototype
 */

// let animal = {
//     eats: true
// };
//
// function Rabbit(name) {
//     this.name = name;
// }
//
// Rabbit.prototype = animal;
//
// let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
//
// alert( rabbit.eats ); // true

/**
 * 默认的 F.prototype，构造器属性
 */

function Rabbit(name){
    this.name = name;
    alert(name)
}
alert(Rabbit.prototype.constructor ==Rabbit);
alert(rabbit.constructor ==Rabbit );

let rabbit = new Rabbit("11111");
let rabbit2 = new rabbit.constructor("2222");

