
//create the constructor for the class bullets
function bullets() {
    //initialisation code will go here

    //create private variables for the x and y coordinates
    var x = 950,//(left right) smaller the number, the closer to left bounds, and the larger, more closer to right bounds
        y = 770, //(up down) smaller the number, the closer to bottom bounds, and the larger, more closer to upper bounds
        vx = 0,
        vy = 0;

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
        

        
        

        context.lineTo(5, 0);
        context.lineTo(0, 10);
        context.lineTo(0, 10);
        context.lineTo(-5, 0)        

        





        //close the path
        context.closePath();
        context.fill();
        //go ahead and draw the line
        context.stroke();




        //restore the state of the context to what it was before our drawing
        context.restore();
    }






    bullets.prototype.move = function () {
        // change the x axis by the x velocity
        
        y -= 27;
        // change the y axis by the y velocity
        
    }
    //public method to set the vector of the bullets
    // bullets.prototype.accelerate = function (Acceleration) {
    //     //set vx
    //     vx += Acceleration.AX;
    //     //set vy
    //     vy += Acceleration.AY;
    // }



    
    
    


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
    





}