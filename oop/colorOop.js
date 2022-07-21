// Shape
//     color (string)
//     filled (boolean (true, false))
//     function
//         setter, getter
//         area (throw new Error('function not implemented'))
// Rectangle inherit from Shape
//     width
//     hight
//     function
//         setter (make sure width, hight is non negative number and greeter then zero )
//         getter
//         overwrite area function to return the Rectangle area


// Circle inherit from Shape
//     radius
//     function
//     setter (make sure radius is non negative number and greeter then zero )
//     getter
//     ove



class Shape {
    color;                         //(string)
    filled;                        //(boolean (true, false))


    constructor(color,filled){
        this.color = color;
        this.filled = filled;
    }

    #checkFilled(filled){
        if(!(typeof filled === 'boolean')){
            throw new Error ('u filled must be boolean')
        }
    }

    setColor(color){
        this.color = color;
        
    }

    setFilled(filled){
        this.#checkFilled(filled);
        this.filled = filled;
    }

    getColor(){
        return this.color;
    }

    getFilled(){
        return this.filled;
    }

    area (){
        throw new Error('function not implemented')
    }
}

class Rectangle extends Shape {
    width;
    hight;

    constructor(color,filled,width,hight) {
        super(color,filled);
        this.width = width;
        this.hight = hight;
    }
   #checkValue(val){
         if(!(typeof val === 'number' && val > 0) ){
            console.log ('number is not greater than 0')
         }
   }

    setWidth(width){
        this.#checkValue(val);
        this.width = width; 
    }

    setHight(hight){
        this.#checkValue(val)
        this.hight = hight;
       
    }
    
    getWidth(){
        return this.width;
    }

    getHigth(){
        return this.hight
    }


    area(){
      return(this.width * this.hight) ;
    }
   
} 

class Circle extends Shape{
    radius;

    constructor(color,filled,radius){
        super(color, filled);
       this.radius = radius;
    }
    #checkRadius(radius){
        if(!(typeof radius === 'number'&& radius > 0) ){
           throw new Error('number is not greater than 0')
            }
    }
    setRadius(radius){
       this.#checkRadius(radius);
        this.radius = radius;
    }

    getRadius(){
        return this.radius;
    }
  //overwrite area function to return the circle area
    area(){
        return (Math.pow(this.radius,2)  * Math.PI);
    }
}
let col = new Shape('yallow',true);
let c1 = new Circle ('red',true,5);
console.log(c1.area());
