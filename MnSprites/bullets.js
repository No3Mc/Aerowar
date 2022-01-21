function bullets(x, y) {
    // x and y
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    // bullet moving speed
    bulletspeed = 15;
    // size for the collision to happen
    topEdge = 10
    bottemEdge = 10, 
    rightEdge = 10,
    LeftEdge = 10,


    bullets.prototype.draw = function (context) {
        context.save();
        context.translate(this.x, this.y);
        context.beginPath();
        context.moveTo(-2, -10);
        context.lineTo(-2, 10);
        context.quadraticCurveTo(0, 12, 2, 10);
        context.lineTo(2, -10);
        context.quadraticCurveTo(2, -12, -2, -10);
        context.closePath();
        context.stroke();
        context.restore();
    }

    bullets.prototype.move = function () {
        this.y -= bulletspeed;
    }

    bullets.prototype.setVector = function (vector) {
        //set vx
        this.vx = vector.VX;
        //set vy
        this.vy = vector.VY;
    }

    Object.defineProperty(this, 'VX',
        {
            //getter
            get: function () {
                //return the x posn
                return this.vx;
            },
            set: function (value) {
                this.vx = value;
            }
        }
    )

    Object.defineProperty(this, 'VY',
        {
            //getter
            get: function () {
                //return the y posn
                return this.vy;
            },

            set: function (value) {
                this.vy = value;
            }
        }
    )


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