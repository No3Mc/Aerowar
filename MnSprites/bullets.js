﻿
//create the constructor for the class saucer
function bullets() {
    //initialisation code will go here

    //create private variables for the x and y coordinates
    var x = 200,
        y = 200,
        vx = 0,
        vy = 0,
        Boom = false;


    //create the draw function to give us the draw method
    //it accepts one parameter which is the context from the canvas it is drawn on
    bullets.prototype.draw = function (context) {
        //save the state of the drawing context before we change it
        context.save();
        //set the coordinates of the drawing area of the new shape to x and y
        context.translate(x, y);
        //start the line (path)
        context.beginPath();
        context.fillStyle = "#d3d3d3";
        context.moveTo(30, 12);
        context.lineTo(80, 12);
        context.lineTo(80, 10);
        context.lineTo(70, 0);
        context.lineTo(30, -10);
        context.lineTo(23, -20);
        context.lineTo(-23, -20);
        context.lineTo(-30, -10);
        context.lineTo(-70, 0);
        context.lineTo(-80, 10);
        context.lineTo(-80, 12);
        context.lineTo(-30, 12);
        context.lineTo(-30, 20);
        context.lineTo(30, 20);
        //close the path
        context.closePath();
        context.fill();
        //go ahead and draw the line
        context.stroke();



        //if the ship has blown up
        if (Boom == true) {
            //create a new instance of an image
            var img = new Image();
            //get the bitmap source
            img.src = "boom.png";
            //draw the image on the context
            context.drawImage(img, -100, -60);
        }
 


        //restore the state of the context to what it was before our drawing
        context.restore();
    }



    bullets.prototype.move = function ()
    {
        //change the x axis by the x velocity
        x += vx;
        //change the y axis by the y velocity
        y += vy;
    }

    bullets.prototype.setVector = function(vector)
    {
        //set the vx value based on this vector
        vx = vector.VX;
        //set the vy value based on this vector
        vy = vector.VY;
    }

    //public method to set the vector of the saucer
    bullets.prototype.accelerate = function (Acceleration) {
        //set vx
        vx += Acceleration.AX;
        //set vy
        vy += Acceleration.AY;
    }

    //create a public property called Top
    Object.defineProperty(this, 'Top',
    {
        //getter
        get: function () {
            //return the value of y less height
            return y - 20;
        }
    }
    )

    //create a public property called Bottom
    Object.defineProperty(this, 'Bottom',
    {
        //getter
        get: function () {
            //return the value of y plus height
            return y + 20;
        }
    }
    )

    //create a public property called Left
    Object.defineProperty(this, 'Left',
    {
        //getter
        get: function () {
            //return the value of x less width
            return x - 30;
        }
    }
    )

    //create a public property called Right
    Object.defineProperty(this, 'Right',
    {
        //getter
        get: function () {
            //return the value of x plus width
            return x + 30;
        }
    }
    )

    bullets.prototype.halt = function ()
    {
        //temp variable to store the vy
        var temp = vy;
        //kill all velocity
        vx = 0;
        vy = 0;
        //set the ship as exploding
        if (temp > .4) {
            Boom = true;
        }
    }
}