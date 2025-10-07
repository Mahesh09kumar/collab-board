const canvas =  document.getElementById("board");
const ctx = canvas.getContext("2d");

let isDrawing = false;
let mouseX = 0;
let mouseY = 0;

const aspect_ratio = 16/9;

canvas.width = window.innerWidth * 0.8;
canvas.height = canvas.width/aspect_ratio ;
    ctx.strokeStyle ="black"
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    function draw(e) {
        if (!isDrawing) return;
        ctx.beginPath();
        ctx.moveTo(mouseX, mouseY);
        ctx.lineTo(e.offsetX, e.offsetY);
        console.log(mouseX,mouseY);
        ctx.stroke();
       //sends data to server
        socket.send(JSON.stringify({
            x1: mouseX,
            y1: mouseY,
            x2: e.offsetX,
            y2: e.offsetY
        }));

        [mouseX, mouseY] = [e.offsetX, e.offsetY];
    }

    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        [mouseX, mouseY] = [e.offsetX, e.offsetY];
    });

    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);

// connection to server
// create a web socket connection to server
let socket = new WebSocket('ws://localhost:8080');

socket.onopen = function(){
    console.log("connected to web socket",'server');
}

socket.onmessage = function(event) {
      const data = JSON.parse(event.data);
      ctx.beginPath();
      ctx.moveTo(data.x1, data.y1);
      ctx.lineTo(data.x2, data.y2);
      ctx.stroke();
    };

console.log("this code is runing");