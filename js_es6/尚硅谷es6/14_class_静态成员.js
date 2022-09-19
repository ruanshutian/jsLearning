

/**
 * class
 */

// function Phone(){
//
// }
// Phone.name = "rst";
// Phone.change = function (){
//     console.log(" i can change the world");
// }
// Phone.prototype.size = '3.14';
//
// let test =new Phone();
// console.log(test.name);
// console.log(test.size);


class Phone{
    static name ="rst";
    static change(){
        console.log("i can change");
    }
}
let test =new Phone();
console.log(Phone.name);
console.log(test.name);
/**
 * static 静态变量属于类的属性，不属于实例对象的属性！
 */
