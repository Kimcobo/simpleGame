const progress11=localStorage.getItem('progress1-1');
const span11=document.querySelector('.oneone');
const progress12=localStorage.getItem('progress1-2');
const span12=document.querySelector('.onetwo');
if(progress11){
    span11.style.color="rgba(33, 33, 255, 1)";
    span11.addEventListener('click',()=>{
        window.location.href="stage1-1.html";
    });
}
if(progress12){
    span12.style.color="rgba(33, 33, 255, 1)";
    span12.addEventListener('click',()=>{
        window.location.href="stage1-2.html";
    });
}