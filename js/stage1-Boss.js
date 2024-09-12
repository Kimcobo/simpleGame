//const ax=document.querySelector('.axe');
    //ax.style.display="none";
    // =========================================
    // 카운트다운
    const countDownDisplay=document.createElement('div');
    countDownDisplay.classList.add('countdown');
    document.body.appendChild(countDownDisplay);
    let countDown=5;
    const InitCount=()=>{
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
    InitCount();
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
    let nameNum=0; // 개체 구분 이름변수 (랜덤 1~9)
    let clickable=false; // 연속클릭 방지 상태변수
    let isAttack=false;
    let targetTimer="";
    let takingDamage=false;
    let bossDown=false;
    let isPossibleAttackBoss=false;
    let completedAchievement=[];
    let groggy="";
    // 게임 스타트
    const gameStart=()=>{
        countDownDisplay.style.display="none";
      // countDownDisplay.remove();
      //document.body.style.cursor="none";
      //ax.style.display="block";
      // 타겟 랜덤으로 나오기
        const recover=()=>{
            // 보스 다운되면 일정 시간 후 다시 일어나고 setInterval 재개
                bossMain.style.backgroundImage="url('images/Boss.png')";
                bossDown=false;
                isPossibleAttackBoss=false;
                targetTimer=setInterval(randomTarget,1000);
                console.log(isPossibleAttackBoss);
        }
        const randomTarget=()=>{
        nameNum=Math.ceil(Math.random()*9); // Math.floor(Math.random()*9)+1
        const target=document.querySelector(`.b${nameNum} img`);
        target.style.display="block";
        clickable=true;
        isAttack=true;
        setTimeout(()=>{
            target.style.display="none";
            clickable=false;
            if(isAttack===true){
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
                bossMain.style.backgroundImage="url('images/BossDown.png')";
                // bossDown=true;
                curStun.style.height="0px";
                console.log('DOWN!');
                bossDown=true;
                groggy=setTimeout(recover,3000);
            }
            /* if(bossDown==true){
                console.log('DOWN!');
                groggy=setTimeout(recover,3000);
            } */
            console.log(`isPossibleAttackBoss : ${isPossibleAttackBoss}`);
            // console.log(`BossDown : ${bossDown}`);
        },800);
        // setTimeout(()=>{},500);
        }
        targetTimer=setInterval(randomTarget,1000);
        // ==================================
        document.querySelectorAll('.BossAttack>img').forEach((ms)=>{
        ms.addEventListener('click',()=>{
            if(clickable==true){
                curStun.style.height=`${parseInt(curStun.style.height)+50}px`;
                clickable=false;
                isAttack=false;
                ms.style.display="none";
                if(parseInt(curStun.style.height)>=500){
                    curStun.style.height="500px";
                    isPossibleAttackBoss=true;
                }
            }
        });
        });
        // SP 가득차면 보스 공격 가능하게
        bossMain.addEventListener('click',()=>{
            if(bossDown){
                curBossHP.style.width=`${parseInt(curBossHP.style.width)-2}px`;
                if(parseInt(curBossHP.style.width)<=0){
                    bossMain.style.backgroundImage="url('images/BossDown.png')";
                    gameClear();
                }
            }
    });
        /* bossMain.addEventListener('click',()=>{
            if(isPossibleAttackBoss){
                curBossHP.style.width=`${parseInt(curBossHP.style.width)-10}px`;
                if(parseInt(curBossHP.style.width)<=0){
                    bossMain.style.backgroundImage="url('images/BossDown.png')";
                    gameClear();
                }
            }
        }); 
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
    // =================================
    // 게임 끝
const gameEnd=()=>{
    clearTimeout(groggy);
    clearInterval(targetTimer);
    play.style.display="none";
    end.style.display="flex";
    //document.body.style.cursor="default";
    //ax.style.display="none";
}
    // ==============================
    // 다시 시작
    const replay=()=>{
        end.style.display="none";
        countDownDisplay.style.display="flex";
        play.style.display="block";
        curHP.style.width="500px";
        countDown=5;
        clickable=false;
        isAttack=false;
        bossDown=false;
        isPossibleAttackBoss=false;
        curBossHP.style.width="1000px";
        curStun.style.height="0px";
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
    /* const achieve=document.querySelectorAll('.achieve');
    const checkAchieve=()=>{
        achieve.forEach((a)=>{
        
        });
    }
    */