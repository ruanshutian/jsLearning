

/**
 * class继承es6
 */

class Phone{
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
    call() {
        console.log("i can call");
    }
}

class SmartPhone extends Phone{
    constructor(brand , price , color ,size) {
        super(brand,price);
        this.color = color;
        this.size = size;
    }
    photo(){
        console.log("拍照");
    }
    playGame(){
        console.log("玩游戏");
    }
}

const  test = new SmartPhone("xiaomi",799,"black",'ss');
console.log(test);

