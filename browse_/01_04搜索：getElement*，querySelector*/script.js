




/**
 * document.getElementById 或者只使用 id
 */

// let elem = document.getElementById("elem");
// elem.style.background = "red";


// elem.style.background = "red";//id直接用

// let  elem =5;
// console.log(elem);


/**
 * querySelectorAll
 */

// let elements = document.querySelectorAll('ul>li:last-child');
// // let elements = document.querySelectorAll('ul');
// for(let elem of elements){
//     console.log(elem.innerHTML);
//     // console.log(elem.innerHTML);
// }

/**
 * querySelector
 */

// console.log(document.querySelector('ul'));

/**
 * matches
 */

// for(let elem of document.body.children){
//     // console.log(elem);
//     if(elem.matches('a[href$="zip"]')){
//         console.log(elem.href);
//     }
// }

/**
 * closest
 */

// let chapter = document.querySelector('.chapter');
// console.log(chapter.closest('.book'));
// console.log(chapter.closest('.contents'));
// console.log(chapter.closest('h1'));

/**
 * getElementsBy*
 */

// let inputs = table.getElementsByTagName('input');
// for(let input of inputs){
//     console.log(input.value + ":" +input.checked );
// }

// let form = document.getElementsByName('my-form')[0];
//
// let article = form.getElementsByClassName('article');
// console.log(article.length);

/**
 * 实时的集合
 */

let divss = document.body.querySelectorAll('div');
console.log(divss.length); // 1




















