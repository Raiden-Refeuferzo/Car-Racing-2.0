canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_width=120;
car1_height=70;
car1_image="car1.png";
car1_x=10;
car1_y=10;
background_image="racing.jpeg";
car2_width=120;
car2_height=70;
car2_image="car2.png";
car2_x=10;
car2_y=100;

function add()
{
background_imgTag=new Image();
background_imgTag.onload=uploadBackground;
background_imgTag.src=background_image;
car1_imgTag=new Image();
car1_imgTag.onload=uploadCar1;
car1_imgTag.src=car1_image;
car2_imgTag=new Image();
car2_imgTag.onload=uploadCar2;
car2_imgTag.src=car2_image;
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadCar1()
{
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}

function uploadCar2()
{
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38')
    {
        console.log("up");
        up();
    }
    if(keyPressed=='40')
    {
        console.log("down");
        down();
    }
    if(keyPressed=='37')
    {
        console.log("left");
        left();
    }
    if(keyPressed=='39')
    {
        console.log("right");
        right();
    }
    if(keyPressed=='87')
    {
        console.log("up");
        up2();
    }
    if(keyPressed=='83')
    {
        console.log("down");
        down2();
    }
    if(keyPressed=='65')
    {
        console.log("left");
        left2();
    }
    if(keyPressed=='68')
    {
        console.log("right");
        right2();
    }
}

function up() 
{
    if(car1_y>=0)
    {
        car1_y=car1_y-10;
        console.log("when up key is pressed, x="+car1_x+"|y"+car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function down() 
{
    if(car1_y<=500)
    {
        car1_y=car1_y+10;
        console.log("when down key is pressed, x="+car1_x+"|y"+car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function left() 
{
    if(car1_x>=0)
    {
        car1_x=car1_x-10;
        console.log("when left key is pressed, x="+car1_x+"|y"+car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function right() 
{
    if(car1_x<=700)
    {
        car1_x=car1_x+10;
        console.log("when right key is pressed, x="+car1_x+"|y"+car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function up2() 
{
    if(car2_y>=0)
    {
        car2_y=car2_y-10;
        console.log("when w key is pressed, x="+car2_x+"|y"+car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function down2() 
{
    if(car2_y<=500)
    {
        car2_y=car2_y+10;
        console.log("when s key is pressed, x="+car2_x+"|y"+car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function left2() 
{
    if(car2_x>=0)
    {
        car2_x=car2_x-10;
        console.log("when a key is pressed, x="+car2_x+"|y"+car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function right2() 
{
    if(car2_x<=700)
    {
        car2_x=car2_x+10;
        console.log("when d key is pressed, x="+car2_x+"|y"+car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}