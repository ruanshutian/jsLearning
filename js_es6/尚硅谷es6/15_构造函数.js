

/**
 * class
 */

function  Phone (brand,price){
    this.brand = brand;
    this.price = price;
}
Phone.prototype.call = function (){
    console.log("call func");
}

function SmartPhone(brand,price,color,size){
    Phone.call(this, brand , price);
    this.color =color;
    this.size = size;
}
SmartPhone.prototype =new Phone;
// SmartPhone.prototype.constructor = SmartPhone;

SmartPhone.prototype.photo = function (){
    console.log("1111");
}
SmartPhone.prototype.playGame = function (){
    console.log("222");
}
const test =new SmartPhone("tt",2444,"black",'s.sin');
console.log(test)

