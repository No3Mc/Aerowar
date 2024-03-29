﻿

//create the constructor for the class square
function enemy() {
    // this is the sprite going left
        //initialisation code will go here
         var rotation = 0;
         enemspeed = 8;
         leftbound = 100;

        enmColor = "#FF5733";

        // for collision
        topEdge = 10
        bottemEdge = 10, 
        rightEdge = 10,
        LeftEdge = 10,
        // moving the sprite to that coords after if statement
         thisx = 1940;
         thisy = 80;
        //create private variables for the x and y coordinates
        this.x = Math.random() * -1800;
        this.y = Math.random() * 400;
        //set the size of the star
        var size = 70;
        Boom = false;
        enemy.prototype.draw = function (context) {
            //save the state of the drawing context before we change it
            context.save();
            context.fillStyle = enmColor;//red one
            //set the coordinates of the drawing area of the new shape to x and y
            context.translate(this.x, this.y);
            context.rotate(rotation);
            //start the line (path)
            context.beginPath();


        context.moveTo(0, 40);

        context.fillStyle = '#FF5733';//red one
        //2
        context.lineTo(-15, 25);
        context.lineTo(-15, 20);
        context.lineTo(-18, 20)

        context.lineTo(-50, 5)

        //3
        context.lineTo(-60, -10)
        context.lineTo(-40, -5)

        context.lineTo(-15, -12)
        context.lineTo(-15, -15)
        context.lineTo(-25, -22)
        context.lineTo(-25, -26)
        context.lineTo(-23, -26)
        context.lineTo(-20, -24)
        context.lineTo(-20, -25)
        context.lineTo(-15, -25)
        context.lineTo(-15, -24)
        context.lineTo(-12, -24)
        context.lineTo(-12, -25)
        context.lineTo(-10, -25)
        context.lineTo(-10, -26)
        
        //4
        context.lineTo(0, -30)
        context.lineTo(10, -26)
        context.lineTo(10, -25)
        context.lineTo(12, -25)
        context.lineTo(12, -24)
        context.lineTo(15, -24)
        context.lineTo(15, -25)
        context.lineTo(20, -25)
        context.lineTo(20, -24)
        context.lineTo(23, -26)
        context.lineTo(25, -26)
        context.lineTo(25, -22)
        context.lineTo(15, -15)
        context.lineTo(15, -12)

        context.lineTo(40, -5)
        context.lineTo(60, -10)

        //1
        context.lineTo(50, 5)
        context.lineTo(18, 20)
        context.lineTo(15, 20);
        context.lineTo(15, 25);

        context.lineTo(0, 40);





                //if the ship has blown up
                if (Boom == true) {
                    //create a new instance of an image
                    var img = new Image();
                    //get the bitmap source
                    img.src = "boom.png";
                    //draw the image on the context
                    context.drawImage(img, -100, -60);
                }       

            //context.lineTo(0, 0);
            //close the path
            context.closePath();
            context.fill();
            //go ahead and draw the line
            context.stroke();
            //restore the state of the context to what it was before our drawing
            context.restore();
        }
    
        enemy.prototype.move = function () {
            //change the x axis
            this.x -= enemspeed;
            // this.y -= 4;
            if (this.x < leftbound) {
                this.x = thisx;
                this.y = thisy;
                // this.y = Math.random() * 400;
            }

        }


    //public property for X
    Object.defineProperty(this, 'X',
    {
    get: function () {
        return this.x;
    },
    set: function (value) {
        this.x = value;
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
            this.y = value;
        }
    }
    )


    Object.defineProperty(this, 'Rotation',
    {
    get: function () {
        return rotation;
    },
    set: function (value) {
        rotation = value;
    }
    }
    )




    enemy.prototype.halt = function ()
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
    
