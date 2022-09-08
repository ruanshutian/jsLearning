

let id = document.querySelector('#id');
let pwd = document.querySelector('#pwd');
let zc = document.querySelector('.zc');
zc.addEventListener('click',()=>{
    let id_value = id.value;
    let pwd_value = pwd.value;
    // console.log(id_value);
    // console.log(pwd_value);
    if(id_value=='账号' && pwd_value=='密码'){
        alert('注册失败，账号密码不得为空');
        return;
    }
    localStorage.setItem('id', id_value);
    localStorage.setItem('pwd', pwd_value);
    zc.href = '../index.html';

});

let back_to_dl =document.querySelector('.back_to_dl');
back_to_dl.addEventListener('click',()=>{
    back_to_dl.href = '../index.html';
});

