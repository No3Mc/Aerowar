﻿
//create the constructor for the class bullets
function bullets() {
    //initialisation code will go here

    //create private variables for the x and y coordinates
    var x = 950,//(left right) smaller the number, the closer to left bounds, and the larger, more closer to right bounds
        y = 800, //(up down) smaller the number, the closer to bottom bounds, and the larger, more closer to upper bounds
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
         //Starting point
        context.moveTo(0, -40);
        context.fillStyle = 'rgb(0, 0, 0)';
        context.lineTo(-15, -25);
        context.lineTo(-15, -20);
        context.lineTo(-18, -20)
        context.lineTo(-50, -5)

        context.lineTo(-60, 10)
        context.lineTo(-40, 5)
        context.lineTo(-15, 12)
        context.lineTo(-15, 15)
        context.lineTo(-25, 22)
        context.lineTo(-25, 26)
        context.lineTo(-23, 26)
        context.lineTo(-20, 24)
        context.lineTo(-20, 25)
        context.lineTo(-15, 25)
        context.lineTo(-15, 24)
        context.lineTo(-12, 24)
        context.lineTo(-12, 25)
        context.lineTo(-10, 25)
        context.lineTo(-10, 26)
        
        context.lineTo(0, 30)
        context.lineTo(10, 26)
        context.lineTo(10, 25)
        context.lineTo(12, 25)
        context.lineTo(12, 24)
        context.lineTo(15, 24)
        context.lineTo(15, 25)
        context.lineTo(20, 25)
        context.lineTo(20, 24)
        context.lineTo(23, 26)
        context.lineTo(25, 26)
        context.lineTo(25, 22)
        context.lineTo(15, 15)
        context.lineTo(15, 12)
        context.lineTo(40, 5)
        context.lineTo(60, 10)

        context.lineTo(50, -5)
        context.lineTo(18, -20)
        context.lineTo(15, -20);
        context.lineTo(15, -25);
        context.lineTo(0, -40);
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





    

    bullets.prototype.move = function () {
        // change the x axis by the x velocity
        
        //change the y axis by the y velocity
        y -= 27;


    }
    //public method to set the vector of the bullets
    bullets.prototype.accelerate = function (Acceleration) {
        //set vx
        vx += Acceleration.AX;
        //set vy
        vy += Acceleration.AY;

        if (x < 100){
        vx = -vx
        }
        if (x > 1940){
            vx = -vx
        }
        if (y < 90){
            vy = -vy
        }
        if (y > 830){
            vy = -vy
        }
    }



    
    
    


    //create a public property called Top
    Object.defineProperty(this, 'Space',
        {
            //getter
            get: function () {
                //return the value of y less height
                return y - 20;
            }
        }
    )
    


    //public property for X
    Object.defineProperty(this, 'X',
    {
    get: function () {
        return x;
    },
    set: function (value) {
        x = value;
    }
    }
    )

    //public property for Y
    Object.defineProperty(this, 'Y',
    {
        get: function () {
            return y;
        },
        set: function (value) {
            y = value;
        }
    }
    )



}