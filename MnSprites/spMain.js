
//create the constructor for the class Mainspr
function Mainspr() {
    //initialisation code will go here

    //create private variables for the x and y coordinates
    var x = 950,//(left right) smaller the number, the closer to left bounds, and the larger, more closer to right bounds
        y = 800, //(up down) smaller the number, the closer to bottom bounds, and the larger, more closer to upper bounds
        vx = 0,
        vy = 0,
        topbound = 90,
        leftbound = 100,
        rightbound = 1940,
        bottombound = 830,
        updwon = 20,
        rightleft = 10,
        GlobeYellow = 1,

        Boom = false;
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
        context.fillStyle = '#398443';//red one
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
        Globe(context, -5, 0, colour);
        Globe(context, 50, 10, colour);//right
        //left landing globe
        Globe(context, -60, 10, colour);//left
        //increase the value of globe yellow (The larger the increment the faster the flashing effect)
        GlobeYellow += 1;
        //if globe yellow is more than 100 
        if (GlobeYellow > 50) {
            //set it back to 1
            GlobeYellow = 1;
        }
    }
    function Globe(context, xposn, yposn, colour) {
        //begin the path
        context.beginPath();
        //set the fill colour
        context.fillStyle = colour;
        //move to the position to start the globe
        context.moveTo(xposn, yposn);
        //draw the curve from that position to +30px passing toward x+13, y+20
        context.quadraticCurveTo(xposn + 5, yposn + 6, xposn + 10, yposn + 0);
        //fill the globe
        context.fill();
        //draw the globe
        context.stroke();
    }
    // function bullet(context, xposn, yposn, colour){

    // }

    Mainspr.prototype.move = function () {
        // change the x axis by the x velocity
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

        if (x < leftbound){
        vx = -vx
        }
        if (x > rightbound){
            vx = -vx
        }
        if (y < topbound){
            vy = -vy
        }
        if (y > bottombound){
            vy = -vy
        }
    }

 
    
    


    //create a public property called Top
    Object.defineProperty(this, 'Top',
        {
            //getter
            get: function () {
                //return the value of y less height
                return y - updwon;
            }
        }
    )
    //create a public property called Bottom
    Object.defineProperty(this, 'Bottom',
        {
            //getter
            get: function () {
                //return the value of y plus height
                return y + updwon;

            }
        }
    )
    //create a public property called Left
    Object.defineProperty(this, 'Left',
        {
            //getter
            get: function () {
                //return the value of x less width
                return x - rightleft;
            }
        }
    )
    //create a public property called Right
    Object.defineProperty(this, 'Right',
        {
            //getter
            get: function () {
                //return the value of x plus width
                return x + rightleft;
            }
        }
    )

    Mainspr.prototype.halt = function ()
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