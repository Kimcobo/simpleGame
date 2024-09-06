const progressPercent=document.querySelector('.percent');
const goals=document.querySelectorAll('.goal');
const totalGoals=goals.length;
let completes=document.querySelectorAll('.complete');
let totalCompletes=completes.length;
const percentChange=()=>{
    progressPercent.innerHTML=`${(totalCompletes/totalGoals)*100}% Completed`;
}
percentChange();
const back=document.querySelector('.back');
back.addEventListener('click',()=>{
    window.location.href="index.html";
});