// //create the constructor for the class square
// function Star() {
//     //initialisation code will go here

//     //create private variables for the x and y coordinates
//     this.x = Math.random() * 400;
//     this.y = Math.random() * 200;
//     //set the size of the star
//     var size = 2;

//     Star.prototype.draw = function (context) {
//         //save the state of the drawing context before we change it
//         context.save();
//         context.fillStyle = "#FFFFFF";
//         //set the coordinates of the drawing area of the new shape to x and y
//         context.translate(this.x, this.y);
//         //start the line (path)
//         context.beginPath();
//         context.moveTo(-size, size);
//         context.lineTo(size, size);
//         context.lineTo(size, -size);
//         context.lineTo(size, -size);
//         context.lineTo(-size, -size);
//         //context.lineTo(0, 0);
//         //close the path
//         context.closePath();
//         context.fill();
//         //go ahead and draw the line
//         context.stroke();
//         //restore the state of the context to what it was before our drawing
//         context.restore();
//     }

//     Star.prototype.move = function () {
//         //change the x axis
//         this.x -= .1;
//         //if the star has drifted off the left of the canvas
//         if (this.x < 0) {
//             //place it at the right of the canvas
//             this.x = 400;
//             //set the y value to a random position
//             this.y = Math.random() * 200;
//         }
//     }
// }



//constructor for the arrow class
function Arrow() {
    //private data members
    //x posn
    var x = 0;
    //y posn
    var y = 0;
    //colour of arrow
    var color = "#ffff00";
    //rotation
    var rotation = 0;
    //size
    var size = 50;

    //public property for size
    Object.defineProperty(this, 'Size',
    {
    get: function () {
        return size;
    },
    set: function (value) {
        size = value;
    }
    }
    )

    //public property for rotation
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

    //public draw method
    Arrow.prototype.draw = function (context) {
        //save the context
        context.save();
        //set x and y posn
        context.translate(x, y);
        //rotate the context
        context.rotate(rotation);
        //set the line width
        context.lineWidth = 2;
        //set the colour
        context.fillStyle = color;
        //begin the path
        context.beginPath();
        //draw the arrow
        context.moveTo(-size, -(size / 2));
        context.lineTo(0, -(size / 2));
        context.lineTo(0, -size);
        context.lineTo(size, 0);
        context.lineTo(0, size);
        context.lineTo(0, (size / 2));
        context.lineTo(-size, (size / 2));
        context.lineTo(-size, -(size / 2));
        context.closePath();
        //fill the shape
        context.fill();
        //finish the path
        context.stroke();
        //restore the context
        context.restore();
    };

}

