

/**
 *  创建一个元素
 */
// let div = document.createElement('div');
// let textNode = document.createTextNode('Here I am');
// div.className = "alert";
// div.innerHTML = "<string>Hi there!</string> you've read an important message";


/**
 * 插入方法
 */
// let div = document.createElement('div');
// let textNode = document.createTextNode('Here I am');
//
// div.className = "alert";
//
// div.innerHTML = "<string>Hi there!</string> you've read an important message";
// document.body.append(div);
//
// ol.before('before');
// ol.after('after');
//
// let liFirst = document.createElement('li');
// liFirst.innerHTML = 'prepend';
// ol.prepend(liFirst);
//
// let liLast = document.createElement('li');
// liLast.innerHTML = "append";
// ol.append(liLast);
//
// div.before('<p>Hello</p>',document.createElement('hr'));


/**
 * insertAdjacentHTML/Text/Element
 */

// div.insertAdjacentHTML('beforebegin','<p>Hello</p>');
// div.insertAdjacentHTML('afterend','<p>Bye</p>');

/**
 * 节点移除
 */

// let div =document.createElement('div');
// div.className = 'alert';
// div.innerHTML = "<strong>Hi there!</strong>ddddd";
// document.body.append(div);
// setTimeout(()=>div.remove(),1000);
//
// let first =document.createElement('div');
// first.innerHTML = "first";
// let second = document.createElement('div');
// second.innerHTML = "second";
// document.body.append(first);
// document.body.append(second);
//
// second.after(first);

/**
 * 克隆节点：cloneNode
 */

// let div2 =div.cloneNode(true);
// div2.querySelector('strong').innerHTML = "Bye there";
// div.after(div2);


/**
 * DocumentFragment
 */

let ul = document.createElement('ul');
ul.innerHTML = 'this is ul';
document.body.append(ul);

// function getListContent(){
//     let fragment = new DocumentFragment();
//     for(let i=1;i<=3;i++){
//         let li = document.createElement('li');
//         li.append(i);
//         fragment.append(li);
//     }
//     return fragment;
// }
// ul.append(getListContent());

function getListContent() {
    let result = [];

    for(let i=1; i<=3; i++) {
        let li = document.createElement('li');
        li.append(i);
        result.push(li);
    }

    return result;
}

ul.append(...getListContent());

/**
 * 老式的 insert/remove 方法
 */

/**
 * 聊一聊 “document.write”
 */







