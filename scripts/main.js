// 用户登陆提示
// 注意单引号 
let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button')
myHeading.textContent = 'my Cat';

function setUserName(){
    let name = prompt("pls input your name");
    myHeading.textContent = 'myCat' + name;
    localStorage.setItem=('Name',name)
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    myName = localStorage.getItem('name')
    myHeading.textContent = 'myCat' + myName
}


myButton.onclick = ()=>{
    setUserName;
}

//图片切换
let catImage = document.querySelector('img');

catImage.onclick = ()=> {
    let catSrc = catImage.getAttribute('src')
    if( catSrc ==='images/blackCat.jpg'){
        catImage.setAttribute('src','images/whiteCat.jpeg');
    }else{
        catImage.setAttribute('src','images/blackCat.jpg');
    }
}



