function Boost(){

    var x = 950,//(left right) smaller the number, the closer to left bounds, and the larger, more closer to right bounds
        y = 800, //(up down) smaller the number, the closer to bottom bounds, and the larger, more closer to upper bounds
        vx = 0,
        vy = 0,
        Boom = false;
    //create the draw function to give us the draw method
    //it accepts one parameter which is the context from the canvas it is drawn on
    Boost.prototype.draw = function (context) {
        //save the state of the drawing context before we change it
        context.save();
        //set the coordinates of the drawing area of the new shape to x and y
        context.translate(x, y);
        //start the line (path)
        context.beginPath();
         //Starting point
        context.moveTo(0, -40);
        context.fillStyle = 'rgb(0, 0, 0)';
        context.lineTo(5, 26);
        context.lineTo(20, 50);
        context.lineTo(5, 40)
        context.lineTo(0, 30)


        context.lineTo(0, 30)
        context.lineTo(5, 40)
        context.lineTo(20, 50);
        context.lineTo(5, 26);




        context.closePath();
        context.fill();
        //go ahead and draw the line
        context.stroke();
    }
        //restore the state of the context to what it was before our drawing
        context.restore();
}

Boost.prototype.initiate = function () {
    // change the x axis by the x velocity
    // x += vx;
    // //change the y axis by the y velocity
    // y += vy;


}
