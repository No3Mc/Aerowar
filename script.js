        //as pg loads
        window.onload = function () {
            //create a reference to the canvas
            var canvas = document.getElementById('canvas'),
                //access the 2D drawing API
                context = canvas.getContext('2d'),
                //new instance of the Mainspr class
                jet = new Mainspr(),
                bullet = new bullets(),
                //enemies objects
                enem = new enemy(),
                enem2 = new enemy2(),
                enem3 = new enemy3(),
                enem4 = new enemy4(),
                enem5 = new enemy5(),
                // enem3 = new enemy3(),
                //bound objects
                b1 = new bound1(),
                b2 = new bound2(),
                b3 = new bound3(),
                b4 = new bound4(),
                //create a new acceleration object
                acceleraton = new Accelerate(0),
                //create a new instance of the collision detection class
                collision = new Collision();


                vectorLeft = new Vector(180, 3),
                // new instance of vector going right direction
                vectorRight = new Vector(360, 3);

                vectorup = new Vector(-90, 3),
                // new instance of vector going right direction
                vectordown = new Vector(90, 5);
                //test



            //function to handle keyboard events
            function KeyboardEventHandler(event) {
                InitBullets(event) == true;
                // InitBoostz(event) == true;
                //↑
                if (event.keyCode == keycode.UP) {
                    
                    jet.setVector(vectorup);

                }
                //←
                if (event.keyCode == keycode.LEFT) {

                    jet.setVector(vectorLeft);
                }
                //→
                if (event.keyCode == keycode.RIGHT) {

                    jet.setVector(vectorRight);
                }
                //↓
                if (event.keyCode == keycode.DOWN) {
                    
                    jet.setVector(vectordown);
                    acceleraton.Halt();
                }
                if (event.keyCode == keycode.W) {
                    jet.setVector(vectorup);
                }
                //←
                if (event.keyCode == keycode.A) {
                    jet.setVector(vectorLeft);
                }
                //→
                if (event.keyCode == keycode.D) {
                    jet.setVector(vectorRight);
                }
                //↓
                if (event.keyCode == keycode.S) {
                    jet.setVector(vectordown);
                }
            }


                function InitBullets(event) {
                // if the space bar is pressed
                if (event.keyCode == keycode.SPACE) {
                    console.log("space bar is pressed");
                    // set the postion of the lasers relative the ship
                    bullet = new bullets(jet.X, jet.Y - 73);
                    bulletz.add(bullet);
                }
            }
                


            var bulletz = new Collection();
            // function for drawing the lasers
            function Drawbullets() {
                var count = 0;
                while (count < bulletz.count) {
                    bulletz.item(count).draw(context);
                    count++;
                }
            }

            // function for firing the lasers
            function Movebullets() {
                var count = 0;
                while (count < bulletz.count) {
                    bulletz.item(count).move();
                    count++;
                }
            }


            function Stopjet(event) {
                if (event.keyCode == keycode.LEFT || event.keyCode == keycode.RIGHT || event.keyCode == keycode.UP || event.keyCode == keycode.DOWN || event.keyCode == keycode.W || event.keyCode == keycode.A || event.keyCode == keycode.S || event.keyCode == keycode.D) {
                    jet.halt();
                }
            }

            //listener for keydown event
            window.addEventListener('keydown', KeyboardEventHandler, false);
            window.addEventListener('Keydown', InitBullets, false);
            // window.addEventListener('Keydown', InitBoostz, false);
            window.addEventListener('keyup', Stopjet, false);

            



            (function drawFrame() {


                context.clearRect(0, 0, canvas.width, canvas.height);
                context.font = "bold 30px Helvetica, Arial, sans-serif";
                context.fillText("Your Score!", 1750, 30);
                
               //draws jet
                jet.draw(context);
                //draws enemy 1
                enem.draw(context);
                //draws enem 2
                enem2.draw(context);
                enem3.draw(context);
                enem4.draw(context);
                enem5.draw(context);
                //draw bounds
                b1.draw(context);
                b2.draw(context);
                b3.draw(context);
                b4.draw(context);
                //draws noz
                // nox.draw(context);
                Drawbullets();
                Movebullets();


                //move the Mainspr
                jet.move();




                //moving enemy sprites
                enem.move();
                enem2.move();
                enem3.move();
                enem4.move();
                enem5.move();
                //acceleration
                // jet.accelerate(acceleraton);
                //get the next animation frame
                window.requestAnimationFrame(drawFrame);




                //calculate the difference between the box x position and the arrow x position
                // var dx = jet.X - enem.X;
                // //calculate the difference between the box y position and the arrow y position
                // var dy = jet.Y - enem.Y;
                // //set the angle of rotation for the arrow
                // enem.Rotation = Math.atan2(dy, dx);

                if (collision.Overlapping(jet, enem2)) {
                    //halt the ship
                    alert("collision")
                    jet.halt()

                }
                if (collision.Overlapping(jet, enem)) {
                    //halt the ship
                    alert("collision")
                    jet.halt()
                }
                if (collision.Overlapping(jet, enem3)) {
                    //halt the ship
                    alert("collision")
                    jet.halt()
                }
                if (collision.Overlapping(jet, enem4)) {
                    //halt the ship
                    alert("collision")
                    jet.halt()
                }
                if (collision.Overlapping(jet, enem5)) {
                    //halt the ship
                    alert("collision")
                    jet.halt()
                }
                if (collision.Overlapping(bullet, enem)) {
                    //halt the ship
                    alert("Success")
                    jet.halt()
                }
                if (collision.Overlapping(bullet, enem2)) {
                    //halt the ship
                    alert("Success")
                    jet.halt()
                }
                if (collision.Overlapping(bullet, enem3)) {
                    //halt the ship
                    alert("Success")
                    jet.halt()
                }
                if (collision.Overlapping(bullet, enem4)) {
                    //halt the ship
                    alert("Success")
                    jet.halt()
                }
                if (collision.Overlapping(bullet, enem5)) {
                    //halt the ship
                    alert("Success")
                    jet.halt()
                }
            })();
        }