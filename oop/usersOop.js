class student {
    userId;
    courses = [];
    name;
    age;
    major;
    city;
    street;
    country;

    constructor( userId,courses,age,major,city,stree, country){
        //console.log('nesma mansra')
      // init connection (api db storage)
        this.setUserId(userId);
       // userId =this.userId;
            courses = this.courses;
            name =this.name;
            age =this.age;
            major = this.major;
            city = this.city;
            street = this.street;
            country = this.country;
    }
    toString() {
        return `
            userId = ${this.userId},
            courses = ${this.courses},
            name = ${this.name},
            age = ${this.age},
            major = ${this.major},
            city = ${this.city},
            street = ${this.street},
            country = ${this.country},
        ` ;
    }

    setUserId(value) {
        this.userId = value;
    }
    setUserCourses(coursUser) {
        this.courses.push(coursUser);
    }
    setUserName(nameUser) {
        this.name = nameUser;
    }
    setUserAge(ageUser) {
        this.age = ageUser;
    }
    setUserMajor(majorUser) {
        this.major = majorUser;
    }
    setUserCity(cityUser) {
        this.city = cityUser;
    }
    setUserStreet(strUser) {
        this.street = strUser;
    }
    setUserCountry(countryUser) {
        this.country = countryUser;
    }
    // ....
   

}

const newStudent = new student();
newStudent.setUserId(1);
newStudent.setUserCourses('master web');
newStudent.setUserCourses('web');
newStudent.setUserName('nesma');
newStudent.setUserAge(23);
newStudent.setUserMajor('web dev');
newStudent.setUserCity('hebron');
newStudent.setUserStreet('Abo-hayel');
newStudent.setUserCountry('pal');
console.log(newStudent.toString());