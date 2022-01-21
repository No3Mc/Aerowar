
// Constructor for Mainspr
function Mainspr() {
    //initialisation
    // for edges
        topbound = 90,
        leftbound = 100,
        rightbound = 1940,
        bottombound = 830,
    // for collision
        topEdge = 10
        bottemEdge = 10, 
        rightEdge = 10,
        LeftEdge = 10,
    // x and y
        this.x = 950;
        this.y = 800;
        this.vx = 0;
        this.vy = 0;

    //animation
        GlobeYellow = 1,
        Boom = false;
    //create the draw function to give us the draw method
    //it accepts one parameter which is the context from the canvas it is drawn on
    Mainspr.prototype.draw = function (context) {
        //save the state of the drawing context before we change it
        context.save();
        //set the coordinates of the drawing area of the new shape to x and y
        context.translate(this.x, this.y);
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


    // //public method to set the vector of the Mainspr
    Mainspr.prototype.accelerate = function (Acceleration) {
        //set vx
        this.vx += Acceleration.AX;
        //set vy
        this.vy += Acceleration.AY;

    }

 
    
    


    //public property for X
    Object.defineProperty(this, 'X',
    {
    get: function () {
        return this.x;
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
            return this.y;
        },
        set: function (value) {
            y = value;
        }
    }
    )


    Mainspr.prototype.move = function () {
        // change the x-axis by the x velocity
        this.x += this.vx;
        // change the y-axis by the y velocity
        this.y += this.vy;
        // stop ship from leaving canvas
        if (this.x < leftbound){
            this.vx = -this.vx
        }
        if (this.x > rightbound){
            this.vx = -this.vx
        }
        if (this.y < topbound){
            this.vy = -this.vy
        }
        if (this.y > bottombound){
            this.vy = -this.vy
        }
    }

    //public method to set the vector of the rocekt
    Mainspr.prototype.setVector = function (vector) {
        //set vx
        this.vx = vector.VX;
        //set vy
        this.vy = vector.VY;
    }

    // set ship velocity to zero
    Mainspr.prototype.halt = function () {
        this.vx = 0;
        this.vy = 0;
    }

    Object.defineProperty(this, 'VX',
        {
            set: function (value) {
                // return the y posn
                this.vx = value;
            }
        }
    )

    // public read only propery for the x posn
    Object.defineProperty(this, 'VY',
        {
            set: function (value) {
                // return the x posn
                this.vy = value;
            }
        }
    )

    //create a public property called Top
    Object.defineProperty(this, 'Top',
        {
            //getter
            get: function () {
                //return the y posn less the height
                return this.y - topEdge;
            }
        }
    )

    //create a public property called Bottom
    Object.defineProperty(this, 'Bottom',
        {
            //getter
            get: function () {
                //return the y posn plus the height
                return this.y + bottemEdge;
            }
        }
    )

    //create a public property called Left
    Object.defineProperty(this, 'Left',
        {
            //getter
            get: function () {
                //return the x posn less the width
                return this.x - LeftEdge;
            }
        }
    )

    //create a public property called Right
    Object.defineProperty(this, 'Right',
        {
            //getter
            get: function () {
                //return the x posn plus the width
                return this.x + rightEdge;
            }
        }
    )




}






















