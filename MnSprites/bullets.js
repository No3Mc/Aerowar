
//create the constructor for the class bullets
function bullets() {
    //initialisation code will go here

    //create private variables for the x and y coordinates
    var x = 950,//(left right) smaller the number, the closer to left bounds, and the larger, more closer to right bounds
        y = 770, //(up down) smaller the number, the closer to bottom bounds, and the larger, more closer to upper bounds
        vx = 0,
        vy = 0,
        GlobeYellow = 1;
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
        context.moveTo(0, -10);
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
        anim(context);



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
    
    function anim(context) {
        //var to store the colour of the globe
        var colour = "";
        //if the value of GlobeYellow is less than 50
        if (GlobeYellow < 10) {
            //set the colour to yellow
            colour = "#ffff00";
        }
        else {
            //otherwise set it to red
            colour = "#ff0000";
        }
        //middle landing globe
        // Globe(context, -14, 12, colour);
        //right landing globe
        // Globe(context, 49, 12, colour);
        //left landing globe
        bullets(context, -5, 0, colour);
        //increase the value of globe yellow (The larger the increment the faster the flashing effect)
        GlobeYellow += 1;
        //if globe yellow is more than 100 
        if (GlobeYellow > 50) {
            //set it back to 1
            GlobeYellow = 1;
        }
    }




}