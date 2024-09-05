const init=document.querySelector('.init');
const how=document.querySelector('.howto');
document.querySelectorAll('.start').forEach((start)=>{
    start.addEventListener('click',()=>{
        window.location.href='stage1-1.html';
    });
});
document.querySelector('.help').addEventListener('click',()=>{
    init.style.display="none";
    how.style.display="flex";
});
document.querySelector('.back').addEventListener('click',()=>{
    how.style.display="none";
    init.style.display="flex";
});