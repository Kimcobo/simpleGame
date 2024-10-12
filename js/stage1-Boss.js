//const ax=document.querySelector('.axe');
    //ax.style.display="none";
    // =========================================
    // 카운트다운
    const countDownDisplay=document.createElement('div');
    countDownDisplay.classList.add('countdown');
    document.body.appendChild(countDownDisplay);
    let countDown=5;
    const InitCount=()=>{
        countDownDisplay.classList.remove('warning');
        countDownDisplay.innerHTML=countDown;
        countDown--;
        if(countDown<0){ // ==-1
            countDownDisplay.innerHTML="START";
        }
        if(countDown<-1){
            clearInterval(countDownInterval);
            gameStart();
        }
    }
    const Warning=()=>{
        countDownDisplay.innerHTML="WARNING";
        countDownDisplay.classList.add('warning');
    }
    Warning();
    setTimeout(InitCount,100000);
    let countDownInterval=setInterval(InitCount,1000);
    // ===============================================
    // hp바
    const hp=document.querySelector('.hp');
    let curHP=hp.querySelector('.currentHP');
    curHP.style.width="500px";
    // console.log(curHP.style.width);
    // 보스 hp바
    const bossHP=document.querySelector('.bossHP');
    let curBossHP=bossHP.querySelector('.bossCurrentHP');
    curBossHP.style.width="1000px";
    // stun바
    const stun=document.querySelector('.stun');
    let curStun=stun.querySelector('.currentStun');
    curStun.style.height="0px";
    // ============================
    // 게임 시작
    const play=document.querySelector('.play');
    const end=document.querySelector('.gameover');
    const again=end.querySelector('.again');
    const giveUp=end.querySelector('.give_up');
    const clear=document.querySelector('.clear');
    const selectMain=document.querySelector('#main');
    const bossMain=document.querySelector('.boss');
    const attack=document.querySelector('.attack');
    let nameNum=0; // 개체 구분 이름변수 (랜덤 1~9)
    let nameNum2=0; // 개체 구분 이름변수 (nameNum을 제외한 랜덤 1~9)
    let attackChance=2;
    let clickable=false; // 연속클릭 방지 상태변수
    let isAttack=false;
    let targetTimer="";
    let takingDamage=false;
    let bossDown=false;
    let isPossibleAttackBoss=false;
    // let completedAchievement=[];
    let groggy="";
    // 게임 스타트
    const gameStart=()=>{
        countDownDisplay.style.display="none";
        const recover=()=>{
            // 보스 다운되면 일정 시간 후 다시 일어나고 setInterval 재개
                bossMain.style.backgroundImage="url('images/Devil.png')";
                bossDown=false;
                isPossibleAttackBoss=false;
                attack.style.display="none";
                targetTimer=setInterval(randomTarget,1000);
                console.log(isPossibleAttackBoss);
        }
        const randomTarget=()=>{
        attackChance=2;
        nameNum=Math.ceil(Math.random()*9); // Math.floor(Math.random()*9)+1
        nameNum2=Math.ceil(Math.random()*9);
        while(nameNum===nameNum2){
            nameNum2=Math.ceil(Math.random()*9);
            if(nameNum!==nameNum2){
                break;
            }
        }
        console.log(nameNum2);
        const target=document.querySelector(`.b${nameNum} img`);
        const target2=document.querySelector(`.b${nameNum2} img`);
        target.style.display="block";
        target2.style.display="block";
        bossMain.style.backgroundImage="url('images/Devil_noarm.png')";
        clickable=true;
        isAttack=true;
        setTimeout(()=>{
            target.style.display="none";
            target2.style.display="none";
            bossMain.style.backgroundImage="url('images/Devil.png')";
            clickable=false;
            if(attackChance>=1){
                curHP.style.width=`${parseInt(curHP.style.width)-100}px`;
                takingDamage=true;
                isAttack=false;
                if(parseInt(curHP.style.width)<=0){
                gameEnd();
                }
            }
            console.log(parseInt(curHP.style.width));
            console.log(takingDamage);
            if(isPossibleAttackBoss===true){
                // 기절한 동안 보스 공격 > 피 다 달면 승리
                clearInterval(targetTimer);
                bossMain.style.backgroundImage="url('images/DevilDown.png')";
                // bossDown=true;
                curStun.style.height="0px";
                attack.style.display="block";
                console.log('DOWN!');
                bossDown=true;
                groggy=setTimeout(recover,3000);
            }
            console.log(`isPossibleAttackBoss : ${isPossibleAttackBoss}`);
        },800);
        }
        targetTimer=setInterval(randomTarget,1000);
        // 해머 움직임
        //document.body.style.cursor="none";
        /*document.addEventListener('mousemove',(e)=>{
        // console.log(e.clientX,e.clientY);
        ax.style.left=e.clientX+'px';
        ax.style.top=e.clientY+'px';
        });
        document.addEventListener('mousedown',()=>{
        ax.style.transform="rotate(-68deg)";
        // setTimeout(()=>{ax.style.transform="rotate(0deg)"},300); // 버그 방지용
        });
        document.addEventListener('mouseup',()=>{
        ax.style.transform="rotate(0deg)";
        });*/
    }
    document.querySelectorAll('.BossAttack>img').forEach((ms)=>{
        ms.addEventListener('click',()=>{
            if(clickable==true){
                curStun.style.height=`${parseInt(curStun.style.height)+50}px`;
                ms.style.display="none";
                attackChance--;
                if(parseInt(curStun.style.height)>=500){
                    curStun.style.height="500px";
                    isPossibleAttackBoss=true;
                }
            }
            if(attackChance<=0){
                clickable=false;
                isAttack=false;
            }
            console.log(attackChance);
        });
        });
        // SP 가득차면 보스 공격 가능하게
        bossMain.addEventListener('click',()=>{
            if(bossDown){
                curBossHP.style.width=`${parseInt(curBossHP.style.width)-10}px`;
                if(parseInt(curBossHP.style.width)<=0){
                    bossMain.style.backgroundImage="url('images/DevilDown.png')";
                    gameClear();
                }
            }
        });
    // =================================
    // 게임 끝
const gameEnd=()=>{
    clearTimeout(groggy);
    clearInterval(targetTimer);
    play.style.display="none";
    end.style.display="flex";
    curHP.style.width="500px";
    countDown=5;
    clickable=false;
    isAttack=false;
    takingDamage=false;
    bossDown=false;
    isPossibleAttackBoss=false;
    curBossHP.style.width="1000px";
    curStun.style.height="0px";
    //document.body.style.cursor="default";
    //ax.style.display="none";
}
    // ==============================
    // 다시 시작
    const replay=()=>{
        end.style.display="none";
        countDownDisplay.style.display="flex";
        play.style.display="block";
        InitCount();
        countDownInterval=setInterval(InitCount,1000);
    }
    again.addEventListener('click',replay);
    giveUp.addEventListener('click',()=>{
        window.location.href="index.html";
    });
    // =============================
    const gameClear=()=>{
        if(takingDamage==false){
        localStorage.setItem('NoDamage1-Boss','yes');
        }
        localStorage.setItem('Clear1-Boss','yes');
        clearTimeout(groggy);
        clearInterval(targetTimer);
        clear.style.display="flex";
        //document.body.style.cursor="default";
        //ax.style.display="none";
    }
    selectMain.addEventListener('click',()=>{
        window.location.href="index.html";
    });