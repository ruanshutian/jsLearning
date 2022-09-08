


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

let id_pwd_list={
    'rst':'rst',
};

//注册
let login_zc = document.querySelector('.zc')
login_zc.addEventListener('click',()=>{
    console.log('sss');
    login_zc.href = 'page/zc.html';
});
id_pwd_list[localStorage.getItem('id')] = localStorage.getItem('pwd');

//登陆
let login_dl = document.querySelector('.dl');
login_dl.onclick = (e)=>{
    let login_success = false;
    // console.log(id_pwd_list);
    // if(id.value=='账号' || pwd.value=='密码'){
    //     alert('登陆失败，账号密码不得为空');
    //     login_success = false;
    //     e.preventDefault();
    //     // return;
    // }
    if(!id_pwd_list.hasOwnProperty(id.value)){
        alert('账号不存在');
        login_success = false;
        e.preventDefault();
        // return;
    }
    else if(id_pwd_list[id.value]!=pwd.value){
        alert('密码错误');
        login_success = false;
        e.preventDefault();
        // return;
    }
    else {
        login_success =true;
    }
    console.log(login_success);
    if(login_success){
        login_dl.href = 'page/main.html';
    }
}

