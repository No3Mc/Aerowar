function boundz() {


    context.moveTo(0, -40);

    context.fillStyle = 'rgb(0, 0, 0)';

    context.lineTo(50, 300);
    context.moveTo(300, 100);

    context.lineTo(50, 5)
    context.lineTo(15, 25);

    context.lineTo(60, 10)
    context.lineTo(15, 5);

    context.lineTo(60, 10)
    context.lineTo(15, 25);

    context.lineTo(15, 25);
    context.lineTo(15, 25);

    context.closePath();
    context.fill();
    //go ahead and draw the line
    context.stroke();
    //restore the state of the context to what it was before our drawing
    context.restore();




}