async function fetchUserCourses() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const arrayOfCourses = ["js", "java", "HTML", "CSS"];
            if (arrayOfCourses.length > 3) {
                reject('you can\'t register in more courses');
            }
            resolve(arrayOfCourses);
        }, 2000);
    });
}

async function fetchUserCoursesMark() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const coursesMark = {
                js: 90,
                java: 80,
                HTML: 97,
                CSS: 99,
            };
            resolve(coursesMark);
        }, 2000);
    });
}
function printCourses(arrayOfCourses) {
    for (const Course of arrayOfCourses) {
        console.log(`Course Name: ${Course} `);
    }
}

async function bootstrap() {
    try {
        const arrayOfCourses = await fetchUserCourses();
        const coursesMark = await fetchUserCoursesMark();
    } 
    catch(e) {
        console.log(e.message);
    }
}

// await fetchUserCourses()

bootstrap();