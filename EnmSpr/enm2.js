//create the constructor for the class square
function enemy2() {
        //initialisation code will go here
        rightbounds = 1940;
        disx = 100;
        disy = 200;
        enm2Color = '#B4BF0A';

        enem2speed = 4;
        // for collision
        topEdge = 10
        bottemEdge = 10, 
        rightEdge = 10,
        LeftEdge = 10,
        //create private variables for the x and y coordinates
        this.x = Math.random() * -1800;
        this.y = Math.random() * 400;
        //set the size of the star
        var size = 70;
    
        enemy2.prototype.draw = function (context) {
            //save the state of the drawing context before we change it
            context.save();

            //set the coordinates of the drawing area of the new shape to x and y
            context.translate(this.x, this.y);
            //start the line (path)
            context.beginPath();



        context.moveTo(0, 40);

        context.fillStyle = enm2Color;//potty one
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


            //context.lineTo(0, 0);
            //close the path
            context.closePath();
            context.fill();
            //go ahead and draw the line
            context.stroke();
            //restore the state of the context to what it was before our drawing
            context.restore();
        }
    
        enemy2.prototype.move = function () {
            //change the x axis
        //     this.x -= 4;
            this.x += enem2speed;
            if (this.x < 100) {
                this.x = disx;
                this.y = disy;
                // this.y = Math.random() * 600;
            }
            if (this.x > rightbounds) {
                this.x = disx;
                this.y = disy;
                // this.y = Math.random() * 600;
            }
            // if (this.y < 90) {
            //     this.y = 800;
            //     this.x = Math.random() * 600;
            // }
            // if (this.y > 830) {
            //     this.y = 800;
            //     this.x = Math.random() * 600;
            // }
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
    
