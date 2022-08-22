"use strict"

/**
 *
 *
 * getter 和 setter
 */

// let user = {
//     name: "John",
//     surname: "Smith",
//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     },
//     set fullName(value) {
//         [this.name, this.surname] = value.split(" ");
//     }
// };
// alert(user.fullName);
// user.fullName = "Alice Cooper";
// alert(user.name); // Alice
// alert(user.surname); // Cooper


/**
 * 访问器描述符
 */


/**
 * 更聪明的 getter/setter
 */

let user = {
    get name() {
        return this._name;
    },

    set name(value) {
        if (value.length < 4) {
            alert("Name is too short, need at least 4 characters");
            return;
        }
        this._name = value;
    }
};

user.name = "Pete";
alert(user.name); // Pete
user.name = ""; // Name 太短了……
