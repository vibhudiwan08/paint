var mouseEvent="";
var last_position_mouse_X, last_position_mouse_Y;

canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

var color="black";
var width_line=1;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").value;
    width_line=document.getElementById("width_line").value;
    mouseEvent="mousedown";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
    Current_position_mouse_X= e.clientX - canvas.offsetLeft;
    Current_position_mouse_Y= e.clientY - canvas.offsetTop;

    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_line;
        ctx.moveTo(last_position_mouse_X,last_position_mouse_Y);
        ctx.lineTo(Current_position_mouse_X,Current_position_mouse_Y);
        ctx.stroke();
    }
    last_position_mouse_X=Current_position_mouse_X;
    last_position_mouse_Y=Current_position_mouse_Y;
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouseEvent="mouseleave";
}

var last_position_of_X,last_position_of_Y;

color="black";
width_of_line=2;

var width=screen.width;
var new_width=screen.width-70;
var new_height=screen.height-300;

if(width < 992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",my_touchstart);

function my_touchstart(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    last_position_of_X=e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_Y=e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove",my_touchmove);

function my_touchmove(e){
    console.log("my_touchmove");
    current_position_of_touch_X=e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_Y=e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    console.log("Last position of X and Y coordinates = ");
    console.log("x = " + last_position_of_X + "y = " + last_position_of_Y);
    ctx.moveTo(last_position_of_X,last_position_of_Y);
    console.log("Current position of x and y coordinates = ");
    console.log("x = " + current_position_of_touch_X + "y = " + current_position_of_touch_Y);
    ctx.lineTo(current_position_of_touch_X,current_position_of_touch_Y);
    ctx.stroke();
    last_position_of_X=current_position_of_touch_X;
    last_position_of_Y=current_position_of_touch_Y;
}

function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}