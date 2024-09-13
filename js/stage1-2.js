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
    // ============================
    // 게임 시작
    let obj=10;
    const Ob=document.querySelector('.obj2');
    const play=document.querySelector('.play2');
    const end=document.querySelector('.gameover');
    const again=end.querySelector('.again');
    const giveUp=end.querySelector('.give_up');
    const clear=document.querySelector('.clear');
    const selectNext=document.querySelector('#next');
    const selectMain=document.querySelector('#main');
    let nameNum=0; // 개체 구분 이름변수 (랜덤 1~9)
    let clickable=false; // 연속클릭 방지 상태변수
    let isAttack=false;
    let targetTimer="";
    let takingDamage=false;
    Ob.innerHTML=obj;
    let health=2;
    // 게임 스타트
    const gameStart=()=>{
        countDownDisplay.style.display="none";
        // countDownDisplay.remove();
        //document.body.style.cursor="none";
        //ax.style.display="block";
        // 회복하는 함수
        // 고민중
        // 타겟 랜덤으로 나오기
        const randomTarget=()=>{
        nameNum=Math.ceil(Math.random()*9); // Math.floor(Math.random()*9)+1
        const target=document.querySelector(`.s${nameNum} img`);
        //const targetHP=document.querySelector(`.s${nameNum} span`);
        health=2;
        target.setAttribute('src','images/Skeleton.png');
        target.style.display="block";
        //targetHP.style.display="block";
        clickable=true;
        isAttack=true;
        setTimeout(()=>{
            target.style.display="none";
            //targetHP.style.display="none";
            clickable=false;
            if(isAttack==true){
                curHP.style.width=`${parseInt(curHP.style.width)-50}px`;
                takingDamage=true;
                isAttack=false;
                if(parseInt(curHP.style.width)<=0){
                    gameEnd();
                }
            }
            // console.log(parseInt(curHP.style.width));
            // console.log(takingDamage);
            // 시간 안에 못 잡으면 적들 체력 원래대로 회복
        },800);
        // setTimeout(()=>{},500);
        }
        targetTimer=setInterval(randomTarget,1000);
        // ==================================
        // 해머 움직임
        /*document.body.style.cursor="none";
        document.addEventListener('mousemove',(e)=>{
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
        }); */
    }
    // =================================
    const skels=document.querySelectorAll('.skeletons>img');
        skels.forEach((ms)=>{
                health=2;
        ms.addEventListener('click',()=>{
            console.log('click');
            if(clickable==true){
                health--;
                // ms.dataset.count=1;
                ms.setAttribute('src','images/Skeleton_damaged.png');
                if(health<=0){
                    obj--;
                    Ob.innerHTML=obj;
                    // ms.dataset.count=0;
                    clickable=false;
                    isAttack=false;
                    ms.style.display="none";
                    ms.setAttribute('src','images/Skeleton.png');
                }
                if(obj==0){
                    gameClear();
                }
                // console.log(health);
            }
        });
        });
    // 게임 끝
const gameEnd=()=>{
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
        obj=10;
        clickable=false;
        isAttack=false;
        takingDamage=false;
        Ob.innerHTML=obj;
        health=2;
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
        localStorage.setItem('NoDamage1-2','yes');
        }
        localStorage.setItem('Clear1-2','yes');
        localStorage.setItem('progress1-Boss','yes');
        clearInterval(targetTimer);
        clear.style.display="flex";
        //document.body.style.cursor="default";
        //ax.style.display="none";
    }
    selectNext.addEventListener('click',()=>{
        window.location.href="stage1-Boss.html";
    });
    selectMain.addEventListener('click',()=>{
        window.location.href="index.html";
    });