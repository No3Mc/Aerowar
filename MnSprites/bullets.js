
//create the constructor for the class saucer
function bullets() {
    //initialisation code will go here

    //create private variables for the x and y coordinates
    var x = 200,
        y = 200,
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

        DrawWindows(context);
        DrawGlobes(context);

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


    function DrawGlobes(context) {
        //var to store the colour of the globe
        var colour = "";
        //if the value of GlobeYellow is less than 50
        if (GlobeYellow < 50) {
            //set the colour to yellow
            colour = "#ffff00";
        }
        else {
            //otherwise set it to red
            colour = "#ff0000";
        }
        //middle landing globe
        Globe(context, -14, 12, colour);
        //right landing globe
        Globe(context, 32, 12, colour);
        //left landing globe
        Globe(context, -63, 12, colour);
        //increase the value of globe yellow (The larger the increment the faster the flashing effect)
        GlobeYellow += 1;
        //if globe yellow is more than 100 
        if (GlobeYellow > 100) {
            //set it back to 1
            GlobeYellow = 1;
        }
    }


    function DrawWindows(context) {
        //var for the offset of the window to be drawn
        var XOffset = -20,
            //var for loop counter to indicate which window we are drawing
            WindowNo = 1,
            //var to store the colour to use
            Colour = "";
        //loop through each window
        while (WindowNo != 6) {
            //if the red window is being drawn then set the colour to red
            if (WindowNo == RedWindow) {
                //set colour to red
                Colour = "#ff0000";
            }
            else {
                //set colour to white
                Colour = "#ffffff";
            }
            //draw the window
            Window(context, XOffset, -12, Colour);
            //point at the next window
            WindowNo++;
            //work out the position of the next window
            XOffset = XOffset + 10;
        }
        //chage the red window to the next one
        RedWindow = RedWindow + .25;
        //if the red window is 6 thats too many
        if (RedWindow == 6) {
            //set it back to 1
            RedWindow = 1;
        }
    }

    function Window(context, xposn, yposn, colour) {
        context.beginPath();
        context.fillStyle = colour;
        //x, y, radius, start_angle, end_angle, anti-clockwise
        context.arc(xposn, yposn, 3, 0, (Math.PI * 2));
        context.fill();
        context.stroke();
    }

    function Globe(context, xposn, yposn, colour) {
        //begin the path
        context.beginPath();
        //set the fill colour
        context.fillStyle = colour;
        //move to the position to start the globe
        context.moveTo(xposn, yposn);
        //draw the curve from that position to +30px passing toward x+13, y+20
        context.quadraticCurveTo(xposn + 13, yposn + 20, xposn + 30, yposn);
        //fill the globe
        context.fill();
        //draw the globe
        context.stroke();
    }

    Saucer.prototype.move = function ()
    {
        //change the x axis by the x velocity
        x += vx;
        //change the y axis by the y velocity
        y += vy;
    }

    Saucer.prototype.setVector = function(vector)
    {
        //set the vx value based on this vector
        vx = vector.VX;
        //set the vy value based on this vector
        vy = vector.VY;
    }

    //public method to set the vector of the saucer
    Saucer.prototype.accelerate = function (Acceleration) {
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

    Saucer.prototype.halt = function ()
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