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
