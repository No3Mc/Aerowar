<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title></title>
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <canvas id="canvas" width="600" height="600"></canvas>
    <script src="sprites/arrow.js"></script>
    <script src="sprites/box.js"></script>
    <script>
        window.onload = function () {
            //get the canvas
            var canvas = document.getElementById('canvas'),
                //get the context
                context = canvas.getContext('2d'),
                //create an arrow object
                arrow = new Arrow(),
                //create a box object
                box = new Box();

            //position the box at 80,40 on the canvas
            box.X = 80;
            box.Y = 40;
            //position the arrow at 300,300 (middle of the canvas)
            arrow.X = 300;
            arrow.Y = 300;

            //draw the first frame
            drawFrame();

            //fucntion for drawing the frames
            function drawFrame() {
                //clear the canvas
                context.clearRect(0, 0, canvas.width, canvas.height);
                //increase the y posn by the y velocity
                box.Y += box.VY;
                //increase the x posn by the x velocity
                box.X += box.VX;
                //if the box hits the canvas top bottom edge
                if (box.Y - box.Size < 0 | box.Y + box.Size > canvas.height) {
                    //reverse the y velocity
                    box.VY = -box.VY;
                }
                //if the box hits the canvas left or right
                if (box.X - box.Size < 0 | box.X + box.Size > canvas.width) {
                    //reverse the x velocity
                    box.VX = -box.VX;
                }
                //calculate the difference between the box x position and the arrow x position
                var dx = box.X - arrow.X;
                //calculate the difference between the box y position and the arrow y position
                var dy = box.Y - arrow.Y;
                //set the angle of rotation for the arrow
                arrow.Rotation = Math.atan2(dy, dx);
                //draw the box
                box.draw(context);
                //draw the arrow
                arrow.draw(context);
                //request the next frame
                window.requestAnimationFrame(drawFrame, canvas);
            }
        }
    </script>
</body>
</html>
