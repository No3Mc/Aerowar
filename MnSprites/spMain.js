
//create the constructor for the class Mainspr
function Mainspr() {
    //initialisation code will go here

    //create private variables for the x and y coordinates
    var x = 950,//(left right) smaller the number, the closer to left bounds, and the larger, more closer to right bounds
        y = 750, //(up down) smaller the number, the closer to bottom bounds, and the larger, more closer to upper bounds
        vx = 0,
        vy = 0;

    //create the draw function to give us the draw method
    //it accepts one parameter which is the context from the canvas it is drawn on
    Mainspr.prototype.draw = function (context) {
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


        //restore the state of the context to what it was before our drawing
        context.restore();
    }



    Mainspr.prototype.move = function () {
        //change the x axis by the x velocity
        x += vx;
        //change the y axis by the y velocity
        y += vy;
    }

  

    //public method to set the vector of the Mainspr
    Mainspr.prototype.accelerate = function (Acceleration) {
        //set vx
        vx += Acceleration.AX;
        //set vy
        vy += Acceleration.AY;

        if (x  > outerWidth || x < 0){
        vx = -vx
        }
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

    Mainspr.prototype.halt = function () {
        //temp variable to store the vy
        var temp = vy;
        //kill all velocity
        vx = 1;
        vy = 1;

    }

}