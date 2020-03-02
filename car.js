var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');
var x = 205
var y = 100
var score = 0
var speed = 1
var hpos
var res = false
var key = 1
var jx
var oo
var gameover = false
var texts = 14
var hx
var jpos
var texty = 700
var ua = window.navigator.userAgent.toLowerCase();
window.addEventListener("keydown", handleKeydown);

function handleKeydown(e){
  console.log(event.keyCode)
  if(gameover == false){
    var keyCode = e.keyCode;
    switch(keyCode){
      case 39:
          console.log('b')
          key += 1
          break;
      case 37:
          console.log('c')
          key -= 1
          break
          
  }  
  }else{
    if(event.keyCode==32){
        if(gameover==true){
            retryy()
        }
      }
  }
}
//canvas.addEventListener('click', onClick, false);
if(ua.indexOf("windows nt") !== -1) {
    document.addEventListener('click', onClick, false);
}else{
    document.addEventListener('touchstart', onClick, false);
}
function draw(){

    ctx.clearRect(0,0,736,658)
    ctx.beginPath();
    ctx.fillRect(100,550,530,50)
    ctx.fillRect(hx,500,160,50)
    ctx.fillRect(jx,500,160,50)
    ctx.arc(x, y, 50, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;
    ctx.fill()
    if(key == 0){
        x = 168
    }else if(key == 1){
        x = 368
    }else if(key ==2){
        x = 568
    }
    if(hpos == 0){
        hx = 100
    }else if(hpos == 1){
        hx = 285
    }else if(hpos ==2){
        hx = 470
    }
    if(jpos == 0){
        jx = 100
    }else if(jpos == 1){
        jx = 285
    }else if(jpos ==2){
        jx = 470
    }
    if(gameover == false){
        y += speed
        speed += 0.9
        if(y > 450){
            if(hpos==key || jpos == key){
                gameover = true
                setTimeout(gover,500)
            }
        }
        if(y > 500){
            setTimeout(ran,100)
            speed = -29
            score += 1
    
        }
        if(key == -1){
            key = 2
        }
        if(key == 3){
            key = 0
        }
        ctx.font = "48px pixeled";
        ctx.textAlign = 'center'
        ctx.fillText(score,368,100)
    }else{

    }
    if(res == true){
        if(gameover == true){
        ctx.font = "38px pixeled";
        ctx.fillText("RESULT",368,texty-70)
        ctx.font = "68px pixeled";
        ctx.fillText("SCORE:"+score,368,texty)
        ctx.font = "58px pixeled";
        ctx.fillText("TAP TO RETRY",368,texty+150)
        
        texty-=texts
        texts-=0.2
        if(texts<0){
            texts=0
        }
        }

        if(ua.indexOf("windows nt") !== -1) {
    document.addEventListener('click', onClick, false);
    }else{
    document.addEventListener('touchstart', onClick, false);
}
    }
    
}
function ran(){
    hpos = Math.floor( Math.random() * 3 );
    jpos = Math.floor( Math.random() * 3 );
}
function gover(){
     res = true
}
function onClick(e){
    if(gameover==false){
        if(e.cilentX-canvas.x<368){
            key+=1
        }else{
            key-=1
        }
    }else{
        retryy()
    }


}
function retryy(){
    x = 205
    y = 450
    score = 0
    speed = -29
    hpos
    res = false
    key = 1
    gameover = false
    texts = 14
    texty = 700
}
setInterval(draw,10)