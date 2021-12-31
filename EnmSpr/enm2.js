//create the constructor for the class square
function enemy2() {
        //initialisation code will go here
    
        //create private variables for the x and y coordinates
        this.x = Math.random() * -1800;
        this.y = Math.random() * 400;
        //set the size of the star
        var size = 70;
    
        enemy2.prototype.draw = function (context) {
            //save the state of the drawing context before we change it
            context.save();
            context.fillStyle = "#FFFFFF";
            //set the coordinates of the drawing area of the new shape to x and y
            context.translate(this.x, this.y);
            //start the line (path)
            context.beginPath();
        //     context.moveTo(-size, size);
        //     context.lineTo(size, size);
        //     context.lineTo(size, -size);
        //     context.lineTo(size, -size);
        //     context.lineTo(-size, -size);



        context.moveTo(0, 40);

        context.fillStyle = '#FFA500';
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
            this.y -= 4;
            if (this.x < 100) {
                this.x = 800;
                this.y = Math.random() * 600;
            }
            if (this.x > 1940) {
                this.x = 800;
                this.y = Math.random() * 600;
            }
            if (this.y < 90) {
                this.y = 800;
                this.x = Math.random() * 600;
            }
            if (this.y > 830) {
                this.y = 800;
                this.x = Math.random() * 600;
            }
        }
    }
    
