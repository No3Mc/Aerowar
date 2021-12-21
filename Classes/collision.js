//this class contains code designed to detect collisions between objects

function Collision() {

    Collision.prototype.Overlapping = function (ObjectA, ObjectB) {
        //variables to see if overlaps are taking place
        var L_Overlap,
            R_Overlap,
            T_Overlap,
            B_Overlap;
        //check to see if the left edge is overlapping
        L_Overlap = (ObjectA.Left >= ObjectB.Left) & (ObjectA.Left <= ObjectB.Right);
        //check to see if the right edge is overlapping
        R_Overlap = (ObjectA.Right >= ObjectB.Left) & (ObjectA.Right <= ObjectB.Right);
        //check to see if the top edge is overlapping
        T_Overlap = (ObjectA.Top >= ObjectB.Top) & (ObjectA.Top <= ObjectB.Bottom);
        //check to see if the bottom edge is overlapping
        B_Overlap = (ObjectA.Bottom >= ObjectB.Top) & (ObjectA.Bottom <= ObjectB.Bottom);
        //if either left/right and either top/bottom edges are overlapping
        if ((L_Overlap | R_Overlap) & (T_Overlap | B_Overlap)) {
            //return true - there is a collicion
            return true;
        }
        else {
            //otherwise return false there is no collision
            return false;
        }
    }
}