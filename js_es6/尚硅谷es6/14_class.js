

/**
 * class
 */

// function Phone(brand,price){
//     this.brand = brand ;
//     this.price = price;
// }
//
// Phone.prototype.call = function (){
//     console.log(" i can call");
// }
//
// let huawei = new Phone("huazi",5999);
// huawei.call();
// console.log(huawei);


class Phone{
    constructor(brand,price) {
        this.brand = brand;
        this.price =price;
    }
    //
     call(){
         console.log("i can call you");
     }
}
let oneplus = new Phone("1+",1999);
console.log(oneplus);
oneplus.call()
