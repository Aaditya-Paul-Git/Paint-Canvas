canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
var mouse_event = "empty";
var last_x, last_y;
var color="black";
var line_width = 1;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(p) {
    mouse_event="mouse_down";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(p) {
    currentx = p.clientX-canvas.offsetLeft;
    currenty = p.clientY-canvas.offsetTop;
    if (mouse_event == "mouse_down") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
        ctx.moveTo(last_x,last_y);
        ctx.lineTo(currentx,currenty);
        ctx.stroke();
    }
    last_x = currentx;
    last_y = currenty;
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(p) {
    mouse_event="mouse_up";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(p) {
    mouse_event="mouse_leave";
}

function clearcanvas() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
