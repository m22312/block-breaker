
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
  

function draw() {
    // 描画コード
  }
  
  setInterval(draw, 10);

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }

  let x = canvas.width / 2;
  let y = canvas.height - 30;

 

  function draw() {

    ctx.beginPath();
    ctx.arc(50, 50, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;

  }


 
