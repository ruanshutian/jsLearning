

/**
 * map基本用法
 */

let m =new Map();

m.set("rst","rst");

m.set("change",function (){
    console.log("Hello");
});
let key = {
    school :"ustc"
};
m.set(key, ["beijing","shanghai","shengzheng"]);


m.delete("rst")

console.log(m.get("change"))
console.log(m.get(key))

for(let v of m){
    console.log(v);
}


m.clear()


console.log(m.size);
console.log(m)


