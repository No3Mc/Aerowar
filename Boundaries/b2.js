function bound2() {
    var Boom = false;
    bound2.prototype.draw = function (context) {
    //save the state of the drawing context before we change it
    context.save();
    //set the coordinates of the drawing area of the new shape to x and y
    // context.translate(x, y);
    //start the line (path)
        
    context.beginPath();


         //Starting point
    // context.moveTo(0, -40);

    // context.fillStyle = 'rgb(0, 0, 0)';
    // context.moveTo(0, -40);

    
    context.moveTo(0,0)
    context.lineTo(0, 900);


    context.closePath();
    context.stroke();
    //go ahead and draw the line
    context.stroke();
    //restore the state of the context to what it was before our drawing
    context.restore();

    }
    bound2.prototype.halt = function ()
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