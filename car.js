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
var hari = new Image()
hari.src="photo.png"
var gameover = false
var texts = 14
var hx
var jpos
var sky = new Image()
sky.src = "skyhill.png"
var retryok=false
var texty = 700
var ua = window.navigator.userAgent.toLowerCase();
window.addEventListener("keydown", handleKeydown);
if(ua.indexOf("windows nt") !== -1) {
    document.addEventListener('click', onClick, false);
}else{
    document.addEventListener('touchstart', onClick, false);
}
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

function draw(){
    
    ctx.clearRect(0,0,736,658)
    ctx.drawImage(sky,0,0)
    ctx.beginPath();
    
    ctx.drawImage(hari,hx,500)
    ctx.drawImage(hari,jx,500)
    ctx.fillStyle = "rgb(181,43,43)";
    ctx.arc(x, y, 50, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;
    ctx.fill()
        ctx.fillStyle = "rgb(0, 0, 0)";
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
        ctx.font = "78px a";
        ctx.textAlign = 'center'
        ctx.fillText(score,368,100)
    }else{

    }
    if(res == true){
        if(gameover == true){
        ctx.font = "38px a";
        ctx.fillText("RESULT",368,texty-70)
        ctx.font = "68px a";
        ctx.fillText("SCORE:"+score,368,texty)
        ctx.font = "48px a";
        ctx.fillText("TAP OR SPACE TO RETRY",368,texty+150)
        
        texty-=texts
        texts-=0.2
        if(texts<0){
            texts=0
            retryok=true
            
        }
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
    var touchObject = event.changedTouches[0] 
    var clickpos = touchObject.pageX - canvas.offsetLeft
    console.log(e.pageX - canvas.offsetLeft)
    if(gameover==false){
        if(clickpos<368){
            key -= 1
        }else if(clickpos>368){
            key += 1
        }
    }else{
        if(retryok==true){
            retryy()
        }
        
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
    retryok=false
    texty = 700
}
setInterval(draw,10)