// alert("hello script1!");

// /**
//  * Ajax   允许浏览器和服务器通信而无需刷新当前整个页面的技术
//  */

/**
 * XMLHttpRequest
 */
/**
 * get
 * @returns {boolean}
 */
// window.onload = function (){
//     // 1 获取a节点，并为其添加onclick响应函数
//     document.getElementsByTagName("a")[0].onclick = function (){
//         //3 创建xhttpRequest对象
//         let request = new XMLHttpRequest()
//
//         //4 准备发送请求的数据  ：url
//         let url = this.href + "?time" +new Date()
//         let method = "GET";
//
//         //5调用xtthpRequest 对象 open方法
//         request.open(method,url);
//
//         //6调用 send方法
//         request.send(null);
//
//         //7为   添 加onreadstatechange响应函数
//         request.onreadystatechange = function (){
//             // alert(request.readyState )
//             //8 判断是否完成： xmlHttpRequest对象readyState属性值为4
//             if(request.readyState ==4){
//                 //9在判断响应是否可用 ： XMLHTtpRequest对象status属性值为200
//                 if(request.status ==200 || request.status ==304){
//                     //10 打印响应结果：responseText
//                     alert(request.responseText)
//                 }
//             }
//         }
//         //2 取消a节点默认行为
//         // return false;
//     }
// }


/**
 * post
 */
// window.onload = function (){
//     // 1 获取a节点，并为其添加onclick响应函数
//     document.getElementsByTagName("a")[0].onclick = function (){
//         //3 创建xhttpRequest对象
//         let request = new XMLHttpRequest()
//
//         //4 准备发送请求的数据  ：url
//         let url = this.href + "?time" +new Date()
//         let method = "POST";
//
//         //5调用xtthpRequest 对象 open方法
//         request.open(method,url);
//         request.setRequestHeader("ContentType","application/x-www-form-urlencoded")
//
//
//         //6调用 send方法
//         request.send("name = 'ruanshutian'");
//
//         //7为   添 加onreadstatechange响应函数
//         request.onreadystatechange = function (){
//             // alert(request.readyState )
//             //8 判断是否完成： xmlHttpRequest对象readyState属性值为4
//             if(request.readyState ==4){
//                 //9在判断响应是否可用 ： XMLHTtpRequest对象status属性值为200
//                 if(request.status ==200 || request.status ==304){
//                     //10 打印响应结果：responseText
//                     alert(request.responseText)
//                 }
//             }
//         }
//         //2 取消a节点默认行为
//         return false;
//     }

/**
 * html
 */
// window.onload = function (){
//     // 1 获取a节点，并为其添加onclick响应函数
//     document.getElementsByTagName("a")[0].onclick = function (){
//         //3 创建xhttpRequest对象
//         let request = new XMLHttpRequest()
//
//         //4 准备发送请求的数据  ：url
//         let url = this.href + "?time" +new Date()
//         let method = "GET";
//
//         //5调用xtthpRequest 对象 open方法
//         request.open(method,url);
//
//         //6调用 send方法
//         request.send(null);
//
//         //7为   添 加onreadstatechange响应函数
//         request.onreadystatechange = function (){
//             // alert(request.readyState )
//             //8 判断是否完成： xmlHttpRequest对象readyState属性值为4
//             if(request.readyState ==4){
//                 //9在判断响应是否可用 ： XMLHTtpRequest对象status属性值为200
//                 if(request.status ==200 || request.status ==304){
//                     document.getElementById("ajaxTest").innerHTML = request.responseText;
//                     // alert(request.responseText)
//                 }
//             }
//         }
//         //2 取消a节点默认行为
//         return false;
//     }
// }

/**
 * xml
 */
window.onload = function (){
    // 1 获取a节点，并为其添加onclick响应函数
    document.getElementsByTagName("a")[0].onclick = function (){
        //3 创建xhttpRequest对象
        let request = new XMLHttpRequest()

        //4 准备发送请求的数据  ：url
        let url = this.href + "?time" +new Date()
        let method = "GET";

        //5调用xtthpRequest 对象 open方法
        request.open(method,url);

        //6调用 send方法
        request.send(null);

        //7为   添 加onreadstatechange响应函数
        request.onreadystatechange = function (){
            // alert(request.readyState )
            //8 判断是否完成： xmlHttpRequest对象readyState属性值为4
            if(request.readyState ==4){
                //9在判断响应是否可用 ： XMLHTtpRequest对象status属性值为200
                if(request.status ==200 || request.status ==304){
                    //1 结果xml格式，获取
                    let result = request.responseXML;
                    //2 先创建响应节点，再把节点加入
                    // let name = result.getElementsByTagName("name")[0].firstChild.nodeValue;
                    // let email = result.getElementsByTagName("email")[0].firstChild.nodeValue;
                    alert(request.responseXML)

                    // let aNode = document.createElement("a");
                    // aNode.appendChild(document.createTextNode(name));
                    // aNode.href = "mailto:"+email;
                    //
                    // let hNode = document.createElement("h2")
                    // hNode.appendChild(aNode)
                    //
                    // let Node = document.getElementById("ajaxTest");
                    // Node.appendChild(hNode);

                    // brNode = document.createElement("br");
                    // Node.appendChild(brNode);

                }
            }
        }
        //2 取消a节点默认行为
        return false;
    }
}
