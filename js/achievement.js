const progress=document.querySelector('.progress');
const progressPercent=document.querySelector('.percent');
const goals=document.querySelectorAll('.goal');
const totalGoals=goals.length;
let totalCompletes=0;
const percentChange=()=>{
    progressPercent.innerHTML=`${parseInt((totalCompletes/totalGoals)*100)}% Completed`;
    if(parseInt(totalCompletes/totalGoals)*100===100){
        const congrat=document.createElement('span');
        congrat.innerHTML="CONGRATULATIONS! YOU COMPLETED ALL ACHIEVEMENTS!!";
        congrat.classList.add('congrat');
        progress.appendChild(congrat);
        progressPercent.style.color="#ffd700";
    }
}
const back=document.querySelector('.back');
back.addEventListener('click',()=>{
    window.location.href="index.html";
});
const FirstNoDamage=localStorage.getItem('FirstNoDamage');
const NoDamageOneOne=localStorage.getItem('NoDamage1-1');
const FirstVictory=localStorage.getItem('FirstVictory');
const ClearOneOne=localStorage.getItem('Clear1-1','yes');
if(FirstVictory){
    const data0=document.querySelector('div[data-index="0"]');
    const check0=document.querySelector('.check0');
    data0.style.filter="brightness(100%)";
    check0.innerHTML="Unlocked";
    check0.style.color="#fff";
    totalCompletes++;
}
if(FirstNoDamage){
    const data1=document.querySelector('div[data-index="1"]');
    const check1=document.querySelector('.check1');
    data1.style.filter="brightness(100%)";
    check1.innerHTML="Unlocked";
    check1.style.color="#fff";
    totalCompletes++;
}
if(ClearOneOne){
    const data2=document.querySelector('div[data-index="2"]');
    const check2=document.querySelector('.check2');
    data2.style.filter="brightness(100%)";
    check2.innerHTML="Unlocked";
    check2.style.color="#fff";
    totalCompletes++;
}
if(NoDamageOneOne){
    const data3=document.querySelector('div[data-index="3"]');
    const check3=document.querySelector('.check3');
    data3.style.filter="brightness(100%)";
    check3.innerHTML="Unlocked";
    check3.style.color="#fff";
    totalCompletes++;
}
console.log(totalCompletes);
percentChange();