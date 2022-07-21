//build point class with tow variable (x, y)
// build the following function 
// setX,  to set value of x
// setY  to set value of y
// distance this function will take one 

// parameter (point)  and this function we need to calculate the 

// distance  between tow point

class Point {
    x; 
    y;

    constructor(x,y) {
        this.setX(x);
        this.setY(y);

    }
    distance(point){
        return Math.sqrt((this.x - point.x) ** 2 + (this.y - point.y) **2)
    }
    setX(x){
        this.x = x
    }
    setY(y){
        this.y = y
    }
    

}
const p1 = new Point(10,20);
const p2 = new Point(30,40);
// console.log(p1);
// console.log(p2);
console.log(p1.distance(p2));