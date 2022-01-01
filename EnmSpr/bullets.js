
//create the constructor for the class saucer
function bullets() {
    //initialisation code will go here

    //create private variables for the x and y coordinates
    var x = 950,//on the top
        y = 700,//on the left
        vx = 0,
        vy = 0,
        Boom = false;


    //create the draw function to give us the draw method
    //it accepts one parameter which is the context from the canvas it is drawn on
    bullets.prototype.draw = function (context) {
        //save the state of the drawing context before we change it
        context.save();
        //set the coordinates of the drawing area of the new shape to x and y
        context.translate(x, y);
        //start the line (path)
        context.beginPath();
        context.fillStyle = "red";
        context.moveTo(- 13, 12);
        context.quadraticCurveTo(0, 20, 13, 12);


        //close the path
        context.closePath();
        context.fill();
        //go ahead and draw the line
        context.stroke();



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



    bullets.prototype.move = function ()
    {
        //change the y axis by the y velocity
        y += vy;
    }

}