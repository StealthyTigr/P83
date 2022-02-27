
var first_position_of_x,first_position_of_y;
var width = screen.width;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
new_width = screen.width -70;
new_height = screen.height -300;

if(width < 992){
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}




color="black";
width=2;
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e)
{

    console.log("my_touchstart");

    


   first_position_of_x  = e.touches[0].clientX - canvas.offsetLeft;
    first_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
    console.log("my_touchMove");
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;

    console.log("First position of x and y =");
    console.log("x =" + first_position_of_x + "y =" + first_position_of_y);
    ctx.moveTo(first_position_of_x, first_position_of_y);

    console.log("Current position of x and y coordinates =");
    console.log("x =" + current_position_of_touch_x + "y =" + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
    ctx.stroke();

    first_position_of_x = current_position_of_touch_x;
    first_position_of_y = current_position_of_touch_y;
}
//Additional Activity
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
