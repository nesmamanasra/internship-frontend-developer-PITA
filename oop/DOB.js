
class DOB{

    day;
    month;
    year;
            
    constructor(day, month, year){
        this.setDay(day);
        this.setMonth(month);
        this.setYear(year);
    }
            
    setDay(day){
        if(typeof day != 'number' ||(day <1 || day>30)){
            throw Error('day must be a number between 1 and 30');
        } else {
            this.day = day;
        }
    }
            
    setMonth(month){
        if(typeof month != 'number' ||(month <1|| month>12)){
            throw Error('month must be a number between 1 and 12');
        } else {
            this.month = month;
        }
    }
            
    setYear(year){
        if(typeof year != 'number' ||(year <1900|| year>2010)){
            throw Error('year must be a number between 1900 and 2010');
        } else {
            this.year =year;
        }
    }
                
    getDay(){
        return this.day;
    }
            
    getMonth(){
        return this.month;
    }
            
    getYear(){
        return this.year;
    }
                
    getAge(){
        var today = new Date();
        var age = today.getFullYear() - this.getYear();
        return `Your age is ${age} years` ;
    }
}module.exports = DOB;

            
// let dob = new DOB(5, 1, 2000);
// console.log(dob.getAge()) ;
