/*class pointvariables (x , y)validationx must be numbery must be numbermethods
1 - setter for x,y
2 - getter for x,y;
3 - distance @params antherPoint (must be instance of point class)
class Squarevariables (point1, point2, point3, point4)validationpoint1 must be instance of 
Point classpoint2 must be instance of Point 
classpoint3 must be instance of Point c
lasspoint4 must be instance of Point classmethods
1- setter for all points
2- getter for all points
3- area (first check if it's valid Square)
4- isValid return value (true, false )*/


class Point {
        // convert to privet
        #x;
        #y;
        constructor(x,y){
            this.setX(x);
            this.setY(y) 
        }
        // bild privet function 
        #validate(number){
           if( typeof number !== 'number'){
               throw new Error(`point must be a number ${typeof number} given`);
           }
        }

        #validatePoint(point){
          if(!(point instanceof Point)){
            throw new Error(`point must be a point instance ${typeof point}`);
          }
        }
        setX(x){
            this.#validate(x);
            this.#x = x ;
            
        }
        setY(y){
            this.#validate(y);
            this.#y = y ;
        }


        getX(){
             return this.#x;
        }

        getY(){
            return this.#y;
        }
        

        distanse(point){
            this.#validatePoint(point); 
            return Math.sqrt((this.getX() - point.getX()) ** 2 + (this.getY() - point.getY()) **2)
        }

}

class Squarevariables{
    #point1;
    #point2;
    #point3;
    #point4;
 
    constructor(point1,point2,point3,point4){
        this.setPoint1(point1);
        this.setPoint2(point2);
        this.setPoint3(point3);
        this.setPoint4(point4);
    }
   
    #validatePoint(point){
        if(!(point instanceof Point)){
            throw new Error(`point must be a point instance ${typeof point}`);
          }
    }
// setter
    setPoint1(point){
        this.#validatePoint(point);
        this.#point1 = point;
    }
    setPoint2(point){
        this.#validatePoint(point);
        this.#point2 = point;
    }

    setPoint3(point){
        this.#validatePoint(point);
        this.#point3 = point;
    }

    setPoint4(point){
        this.#validatePoint(point);
        this.#point4 = point;
    }

// getter
    getPoint1(){
        return this.#point1; 
    }
    
    getPoint2(){
        return this.#point2; 
    }

    getPoint3(){
        return this.#point3; 
    }

    getPoint4(){
        return this.#point4; 
    }
    
    isValid(){
        const distance1 = this.#point1.distanse(this.#point2) ;
        const distance2 = this.#point1.distanse(this.#point3) ;
        const distance3 = this.#point3.distanse(this.#point4) ;
        const distance4 = this.#point2.distanse(this.#point4) ;
        if(distance1 === distance2 && distance1 === distance3 && distance1 === distance4 ){
                return true;
        }
            return false;
        
      
    }

    area(){
        if(this.isValid()){
            const distance1 = this.#point1.distanse(this.#point2) ;
            return distance1 * distance1;
        }
        throw new Error('please check ur point');
    }
}

function bootstrap(){
        const point1 = new Point(10,10);
        const point2 = new Point(20,10);
        const point3 = new Point(10,20);
        const point4 = new Point(20,20);
        const square = new Squarevariables (point1,point2,point3,point4);
        if(square.isValid()) {
            console.log(`area ${square.area()}`)
        }else{
            console.log('not a valid square');
        }
}
try{
    bootstrap();
}catch(e){
    console.log(e.message);
}

// if(done){
//     bootstrap();
// }else {
//     console.log(e.message);
// }

// console.log(bootstrap());