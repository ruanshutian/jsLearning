





// alert("this is indexScript")


let spanTest = document.getElementsByTagName("span");

spanTest[0].onclick = function (){
    axios({
        method:"get",
        url:"http://localhost:3000/posts/2"
    }).then(res=>{
        alert("get success");
    });
}




