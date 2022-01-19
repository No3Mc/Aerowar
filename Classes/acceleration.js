function Accelerate(Gravity) {

    //variable to store ax and ay
    var ax = 0;
    var ay = 0;
    //variable to store the gravity value
    gravity = Gravity;

    //public read only property for AX
    Object.defineProperty(this, 'AX',
        {
            get: function () {
                return ax;
            }
        })

    //public read only property for AY
    Object.defineProperty(this, 'AY',
        {
            get: function () {
                //return the acceleration on the y axis + gravity
                return ay + gravity;
            }
        })

    //public method for vertical thrust
    Accelerate.prototype.VThrust = function (Thrust) {
        ay -= Thrust;
    }

    //public method for horizontal thrust
    Accelerate.prototype.HThrust = function (Thrust) {
        ax -= Thrust;
    }

    //public method to halt all accelaretaion
    Accelerate.prototype.Halt = function () {
        ay = .1;//up, down
        ax = 0;//right, left
    }

}