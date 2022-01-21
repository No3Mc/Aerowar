//create the constructor for the class square
function enemy3() {
    //initialisation code will go here

    dis3x = 110;
    dis3y = 200;
    enm3Color = '#39177A';

    enem3speed = 3;
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

    enemy3.prototype.draw = function (context) {
        //save the state of the drawing context before we change it
        context.save();

        //set the coordinates of the drawing area of the new shape to x and y
        context.translate(this.x, this.y);
        //start the line (path)
        context.beginPath();



    context.moveTo(0, 40);

    context.fillStyle = enm3Color;//potty one
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

    enemy3.prototype.move = function () {

        this.y += enem3speed;
        if (this.y > 800) {
            this.x = dis3x;
            this.y = dis3y;
            // this.y = Math.random() * 600;
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

