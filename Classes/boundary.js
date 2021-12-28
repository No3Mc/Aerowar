function boundz() {

    boundz.prototype.draw = function (context) {
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

    // context.fillStyle = 'rgb(0, 0, 0)';
    context.moveTo(0,0)
    context.lineTo(0, 900);
    context.lineTo(2040, 900);
    context.lineTo(2040, 0);
    context.closePath();
    context.stroke();
    //go ahead and draw the line
    context.stroke();
    //restore the state of the context to what it was before our drawing
    context.restore();

    }
 function crash(){

 }

}