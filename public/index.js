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
        [mouseX, mouseY] = [e.offsetX, e.offsetY];
    }

    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        [mouseX, mouseY] = [e.offsetX, e.offsetY];
    });

    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);

    
   


console.log("this code is runing");