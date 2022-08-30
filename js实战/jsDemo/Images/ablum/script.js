
let warp = document.getElementById('wrap');
let black = document.getElementById('black');
let big = document.getElementById('big');
let left = document.getElementById('left');
let right = document.getElementById('right');
let img = document.getElementById('img');
let link =wrap.getElementsByTagName("a");
let cur = 0;

for(let i=0;i< link.length;i++){
    link[i].index =i;
    link[i].onclick = function () {
        let src = this.href;
        cur = this.index;

        black.style.display = "block";
        big.style.display = "block";
        big.style.left = big.style.top = "50%";
        big.style.marginLeft = -big.offsetWidth/2 + "px";
        big.style.marginTop = -big.offsetHeight/2 + "px";
        img.src = src;

        // left.onclick = function () {
        //     cur--;
        //     if (cur < 0) {
        //         cur = link.length - 1;
        //     }
        // }
        //     点击向左按钮
        left.onclick = function(){

            cur -- ;
            if( cur<0 ){
            cur = link.length-1;
        }
            img.src = link[cur].href;

        }
            //点击向右按钮
            right.onclick = function(){

            cur ++ ;
            if( cur>=link.length ){
            cur = 0;
        }
            img.src = link[cur].href;

        }

            //阻止a默认跳转
            return false;
        }
}

    black.onclick = function(){
        black.style.display = "none";
        big.style.display = "none";
    }






//    window.onload = function(){
//
//     var wrap = document.getElementById("wrap");
//     var black = document.getElementById("black");
//     var big = document.getElementById("big");
//     var left = document.getElementById("left");
//     var right = document.getElementById("right");
//     var img = document.getElementById("img");
//     var link = wrap.getElementsByTagName("a");
//     var cur = 0;
//
//     for( var i = 0; i<link.length; i++ ){
//
//     link[i].index = i;
//     //点击图片显示大图
//     link[i].onclick = function(){
//
//     var src = this.href;
//
//     cur = this.index;
//
//     black.style.display = "block";
//     big.style.display = "block";
//     big.style.left = big.style.top = "50%";
//     big.style.marginLeft = -big.offsetWidth/2 + "px";
//     big.style.marginTop = -big.offsetHeight/2 + "px";
//     img.src = src;
//     //点击向左按钮
//     left.onclick = function(){
//
//         cur -- ;
//         if( cur<0 ){
//         cur = link.length-1;
//     }
//         img.src = link[cur].href;
//
//     }
//         //点击向右按钮
//         right.onclick = function(){
//
//         cur ++ ;
//         if( cur>=link.length ){
//         cur = 0;
//     }
//         img.src = link[cur].href;
//
//     }
//
//         //阻止a默认跳转
//         return false;
//     }
// }
//     //点击另外的地方大图消失
//         black.onclick = function(){
//
//         black.style.display = "none";
//         big.style.display = "none";
//     }
//
// }