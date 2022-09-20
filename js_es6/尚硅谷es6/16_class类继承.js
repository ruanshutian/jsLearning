

/**
 * class继承es6
 */

class Phone{
    // constructor(brand, price) {
    //     this.brand = brand;
    //     this.price = price;
    // }
    get price(){
        console.log("get price");
        return'i love you';
    }
    set price(newVal){
        console.log('set value');
    }
    call() {
        console.log("i can call");
    }
}

// class SmartPhone extends Phone{
//     constructor(brand , price , color ,size) {
//         super(brand,price);
//         this.color = color;
//         this.size = size;
//     }
//     photo(){
//         console.log("拍照");
//     }
//     playGame(){
//         console.log("玩游戏");
//     }
//     //重写
//     call(){
//         console.log("i can fly")
//     }
// }
//
// const  test = new SmartPhone("xiaomi",799,"black",'ss');
// console.log(test);
// test.call()

let p = new Phone();
console.log(p.price)
p.price = 'free';
