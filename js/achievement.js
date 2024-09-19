const progress=document.querySelector('.progress');
const progressPercent=document.querySelector('.percent');
const goals=document.querySelectorAll('.goal');
const totalGoals=goals.length;
let totalCompletes=0;
const percentChange=()=>{
    progressPercent.innerHTML=`${parseInt((totalCompletes/totalGoals)*100)}% Completed`;
    if(parseInt(totalCompletes/totalGoals)*100===100){
        // const congrat=document.createElement('span');
        // congrat.innerHTML="CONGRATULATIONS! YOU COMPLETED ALL ACHIEVEMENTS!!";
        // congrat.classList.add('congrat');
        // progress.appendChild(congrat);
        // congrat 추가 시 innerbox 높이 및 스크롤 이벤트 망가질까봐 일단 뺌
        progressPercent.style.color="#ffd700";
    }
}
const back=document.querySelector('.back');
back.addEventListener('click',()=>{
    window.location.href="index.html";
});
const NoDamageOneOne=localStorage.getItem('NoDamage1-1');
const ClearOneOne=localStorage.getItem('Clear1-1','yes');
const ClearOneTwo=localStorage.getItem('Clear1-2');
const NoDamageOneTwo=localStorage.getItem('NoDamage1-2');
const ClearOneBoss=localStorage.getItem('Clear1-Boss');
const NoDamageOneBoss=localStorage.getItem('NoDamage1-Boss');
const data0=document.querySelector('div[data-index="0"]');
const check0=document.querySelector('.check0');
const data1=document.querySelector('div[data-index="1"]');
const check1=document.querySelector('.check1');
const data2=document.querySelector('div[data-index="2"]');
const check2=document.querySelector('.check2');
const data3=document.querySelector('div[data-index="3"]');
const check3=document.querySelector('.check3');
const data4=document.querySelector('div[data-index="4"]');
const check4=document.querySelector('.check4');
const data5=document.querySelector('div[data-index="5"]');
const check5=document.querySelector('.check5');
const data6=document.querySelector('div[data-index="6"]');
const check6=document.querySelector('.check6');
const data7=document.querySelector('div[data-index="7"]');
const check7=document.querySelector('.check7');
const data8=document.querySelector('div[data-index="8"]');
const check8=document.querySelector('.check8');
const data9=document.querySelector('div[data-index="9"]');
const check9=document.querySelector('.check9');
if(ClearOneOne){
    data0.style.filter="brightness(100%)";
    check0.innerHTML="Unlocked";
    check0.style.color="#fff";
    data2.style.filter="brightness(100%)";
    check2.innerHTML="Unlocked";
    check2.style.color="#fff";
    totalCompletes++;
    totalCompletes++;
}
if(NoDamageOneOne){
    data1.style.filter="brightness(100%)";
    check1.innerHTML="Unlocked";
    check1.style.color="#fff";
    data3.style.filter="brightness(100%)";
    check3.innerHTML="Unlocked";
    check3.style.color="#fff";
    totalCompletes++;
    totalCompletes++;
}
if(ClearOneTwo){
    data4.style.filter="brightness(100%)";
    check4.innerHTML="Unlocked";
    check4.style.color="#fff";
    totalCompletes++;
}
if(NoDamageOneTwo){
    data5.style.filter="brightness(100%)";
    check5.innerHTML="Unlocked";
    check5.style.color="#fff";
    totalCompletes++;
}
if(ClearOneBoss){
    data6.style.filter="brightness(100%)";
    check6.innerHTML="Unlocked";
    check6.style.color="#fff";
    totalCompletes++;
    data8.querySelector('.text>div>h3').innerHTML="First Step";
    data8.querySelector('.text>p').innerHTML="Complete Stage 1";
    data9.querySelector('.text>div>h3').innerHTML="Touch Not Allowed";
    data9.querySelector('.text>p').innerHTML="Complete Stage 1 without taking a damage";
}
if(NoDamageOneBoss){
    data7.style.filter="brightness(100%)";
    check7.innerHTML="Unlocked";
    check7.style.color="#fff";
    totalCompletes++;
}
if(ClearOneOne && ClearOneTwo && ClearOneBoss){
    data8.style.filter="brightness(100%)";
    check8.innerHTML="Unlocked";
    check8.style.color="#fff";
    totalCompletes++;
}
if(NoDamageOneOne && NoDamageOneTwo && NoDamageOneBoss){
    data9.style.filter="brightness(100%)";
    check9.innerHTML="Unlocked";
    check9.style.color="#fff";
    totalCompletes++;
}
console.log(totalCompletes);
percentChange();
const innerbox=document.querySelector('.innerbox');
const wrap=document.querySelector('.wrapper');
const track=document.querySelector('.track');
const bar=document.querySelector('.bar');
const barMax=parseInt(track.clientHeight-bar.clientHeight);
console.log(barMax);