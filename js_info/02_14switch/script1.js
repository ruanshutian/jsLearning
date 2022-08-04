"use strict"


// let a = 2 + 2;
// switch (a) {
//   case 3:
//     alert( 'Too small' );
//     break;
//   case 4:
//     alert( 'Exactly!' );
//     break;
//   case 5:
//     alert( 'Too big' );
//     break;
//   default:
//     alert( "I don't know such values" );
// }

// let a = 2 + 2;
// switch (a) {
//   case 3:
//     alert( 'Too small' );
//   case 4:
//     alert( 'Exactly!' );
//   case 5:
//     alert( 'Too big' );
//   default:
//     alert( "I don't know such values" );
// }


// let a ="1";
// let b=0;
// switch(+a){
//   case b+1:
//     alert(1111);
//     break;
//     default:
//       alert(222);
// }



//case分组

// let a=3;
// switch(a){

//   case 4:
//     alert("right!");
//     break;
//   case 3:
//   case 5:
//     alert("wwwww");
//     alert("yyyy");
//     break;
//   default:
//     alert("aaaa");
// }

let arg = prompt("Enter a value?")//prompt 的结果是字符串类型的 "3"
switch (arg) {
  case '0':
  case '1':
    alert( 'One or zero' );
    break;

  case '2':
    alert( 'Two' );
    break;

  case 3:
    alert( 'Never executes!' );
    break;
  default:
    alert( 'An unknown value' )
}


