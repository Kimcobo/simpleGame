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
    // 적 공격게이지 & 공격
    // 게임 시작
    let obj=20;
    const Ob=document.querySelector('.obj');
    const play=document.querySelector('.play');
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
    let completedAchievement=[];
    Ob.innerHTML=obj;
    // 게임 스타트
    const gameStart=()=>{
      localStorage.setItem('progress1-1','yes');
      countDownDisplay.style.display="none";
      // countDownDisplay.remove();
      //document.body.style.cursor="none";
      //ax.style.display="block";
      // 타겟 랜덤으로 나오기
      const randomTarget=()=>{
        nameNum=Math.ceil(Math.random()*9); // Math.floor(Math.random()*9)+1
        const target=document.querySelector(`.z${nameNum} img`);
        target.style.display="block";
        clickable=true;
        isAttack=true;
        setTimeout(()=>{
          target.style.display="none";
          clickable=false;
          if(isAttack==true){
            curHP.style.width=`${parseInt(curHP.style.width)-50}px`;
            takingDamage=true;
            isAttack=false;
            if(parseInt(curHP.style.width)<=0){
              gameEnd();
            }
          }
          console.log(parseInt(curHP.style.width));
          console.log(takingDamage);
        },1000);
        // setTimeout(()=>{},500);
      }
      targetTimer=setInterval(randomTarget,2000);
      // ==================================
      document.querySelectorAll('.zombies>img').forEach((ms)=>{
        ms.addEventListener('click',()=>{
          if(clickable==true){
            obj--;
            Ob.innerHTML=obj; //
            clickable=false;
            isAttack=false;
            ms.style.display="none";
          }
          if(obj==0){
            gameClear();
          }
        });
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
      obj=20;
      clickable=false;
      isAttack=false;
      Ob.innerHTML=obj;
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
        localStorage.setItem('NoDamage1-1','yes');
      }
      localStorage.setItem('Clear1-1','yes');
      localStorage.setItem('progress1-2','yes');
      clearInterval(targetTimer);
      clear.style.display="flex";
      //document.body.style.cursor="default";
      //ax.style.display="none";
    }
    selectNext.addEventListener('click',()=>{
      window.location.href="stage1-2.html";
    });
    selectMain.addEventListener('click',()=>{
      window.location.href="index.html";
    });
    /* const achieve=document.querySelectorAll('.achieve');
    const checkAchieve=()=>{
      achieve.forEach((a)=>{
        
      });
    }
    */
