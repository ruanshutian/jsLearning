


let id = document.getElementById('id');
let pwd =document.getElementById('pwd');

id.onfocus = ()=>{
    if(id.value === "账号") {
        id.value = "";
    }
    id.style.color ='#333';
}
id.onblur = ()=>{
    id.style.color ='#999';
    if(id.value === ""){
        id.value = "账号";
    }

}

let flag =0;

pwd.onfocus =()=>{
    if(pwd.value === '密码'){
        pwd.value ="";
        pwd.type ="password";
        img.src = 'img/close.png';
        flag=1
    }

}
pwd.onblur =()=>{
    if(pwd.value ===""){
        pwd.value ="密码";
        pwd.type = "text";
    }
}


let img =document.getElementById('eye');

eye.onclick = function (){
    if(flag ==0){
        pwd.type = "password";
        img.src = 'img/close.png';
        flag=1
    }else {
        pwd.type ='text';
        img.src = 'img/open.png';
        flag=0;
    }
}

//登陆
let login_dl = document.getElementById('dl');
let login_success = true;
login_dl.onclick = ()=>{
    if(login_success){
        login_dl.href = 'page/main.html';
    }
}

