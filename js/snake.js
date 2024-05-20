// 在文檔載入完成後自動觸發模擬點擊按鈕
document.addEventListener("DOMContentLoaded", function(event) {
  // 觸發按鈕的動作
  document.getElementById("exampleModal1").click();
});




const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const gridSize = 20;
let snake = [{ x: 10, y: 10 }];
let food = { x: 15, y: 15 };
let dx = 0;
let dy = 0;

function drawSnake() {
  ctx.fillStyle = "green";
  snake.forEach(segment => {
    ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
  });
}

function drawFood() {
  ctx.fillStyle = "orange";
  ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
}

function moveSnake() {
  // 計算新蛇頭的位置
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };

  // 檢查並處理邊界穿越
  if (head.x < 0) {
    head.x = canvas.width / gridSize - 1;
  } else if (head.x >= canvas.width / gridSize) {
    head.x = 0;
  }
  if (head.y < 0) {
    head.y = canvas.height / gridSize - 1;
  } else if (head.y >= canvas.height / gridSize) {
    head.y = 0;
  }

  // 將新蛇頭添加到蛇的前面
  snake.unshift(head);

  // 如果蛇吃到了食物，生成新的食物，否則移除蛇的尾部
  if (head.x === food.x && head.y === food.y) {
    generateFood();
  } else {
    snake.pop();
  }
}


function generateFood() {
  food.x = Math.floor(Math.random() * canvas.width / gridSize);
  food.y = Math.floor(Math.random() * canvas.height / gridSize);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function update() {
  clearCanvas();
  drawSnake();
  drawFood();
  moveSnake();
}

function keyDownHandler(event) {
  const keyPressed = event.key;
  if (keyPressed === "ArrowUp" && dy === 0) {
    dx = 0;
    dy = -1;
  } else if (keyPressed === "ArrowDown" && dy === 0) {
    dx = 0;
    dy = 1;
  } else if (keyPressed === "ArrowLeft" && dx === 0) {
    dx = -1;
    dy = 0;
  } else if (keyPressed === "ArrowRight" && dx === 0) {
    dx = 1;
    dy = 0;
  }
}

// 手機觸控偵測
function touchStartHandler(event) {
  const firstTouch = event.touches[0];
  touchStartX = firstTouch.clientX;
  touchStartY = firstTouch.clientY;
}

function touchMoveHandler(event) {
  if (event.touches.length > 1) return;

  const touch = event.touches[0];
  const dxTouch = touch.clientX - touchStartX;
  const dyTouch = touch.clientY - touchStartY;

  if (Math.abs(dxTouch) > Math.abs(dyTouch)) {
    if (dxTouch > 0 && dx === 0) { // right swipe
      dx = 1;
      dy = 0;
    } else if (dxTouch < 0 && dx === 0) { // left swipe
      dx = -1;
      dy = 0;
    }
  } else {
    if (dyTouch > 0 && dy === 0) { // down swipe
      dx = 0;
      dy = 1;
    } else if (dyTouch < 0 && dy === 0) { // up swipe
      dx = 0;
      dy = -1;
    }
  }
}

document.addEventListener("keydown", keyDownHandler);
canvas.addEventListener("touchstart", touchStartHandler);
canvas.addEventListener("touchmove", touchMoveHandler);

setInterval(update, 90);



// 關閉手機下拉更新的功能
let touchStartY = 0;

window.addEventListener("touchstart", function(event) {
  if (event.touches.length === 1) {
    touchStartY = event.touches[0].clientY;
  }
});

window.addEventListener("touchmove", function(event) {
  const touch = event.touches[0];
  const touchMoveY = touch.clientY - touchStartY;
  
  if (touchMoveY > 0 && window.scrollY === 0) {
    event.preventDefault();
  }
}, { passive: false });
