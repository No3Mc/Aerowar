function bullets(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;

    //ship = new Rocket();
    // change the y posn of the bullets relative to the rocket
    //this.x = ship.RX;
    // change the x posn of the bullets relative to the rocket
    //this.y = ship.RY - 73;

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
        this.y -= 3;
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
                return this.y - 55;
            }
        }
    )

    //create a public property called Bottom
    Object.defineProperty(this, 'Bottom',
        {
            //getter
            get: function () {
                //return the y posn plus the height
                return this.y + 55;
            }
        }
    )

    //create a public property called Left
    Object.defineProperty(this, 'Left',
        {
            //getter
            get: function () {
                //return the x posn less the width
                return this.x - 80;
            }
        }
    )

    //create a public property called Right
    Object.defineProperty(this, 'Right',
        {
            //getter
            get: function () {
                //return the x posn plus the width
                return this.x + 80;
            }
        }
    )

}