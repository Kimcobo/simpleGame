const init=document.querySelector('.init');
const how=document.querySelector('.howto');
const opt=document.querySelector('.opt');
const clear=document.querySelector('.clear');
const progressCheck=localStorage.getItem('progress1-1');
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
document.querySelector('.achievement').addEventListener('click',()=>{
    window.location.href="achievement.html";
});
if(progressCheck){
    const ctn=document.createElement('span');
    ctn.innerHTML="CONTINUE";
    ctn.style.color="#0a4";
    opt.appendChild(ctn);
    ctn.addEventListener('click',()=>{
        window.location.href="continuePage.html";
    });
}
clear.addEventListener('click',()=>{
    if(window.confirm("데이터를 삭제하시겠습니까?")){
        if(window.confirm("정말로 삭제하시겠습니까?")){
            alert("데이터가 삭제되었습니다.")
            localStorage.clear();
            window.location.reload();
        }
    }
});