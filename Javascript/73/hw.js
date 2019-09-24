(function(){
    'use strict';

    class Student{
        constructor(firstName,lastName, age, grade){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.grade = grade;
        }
    }

    const john = new Student('John', 'Hankock', 13, 8);
    const jay = new Student('Jay', 'Frost', 11, 6);
    const robert = new Student('Robert', 'Smith', 12, 7);
    const william = new Student('William', 'Toro', 11, 6);

    const studentArray = [john, jay, robert, william];

    function printStudents(a, ...students){
       for(let i = 0; i<students.length; i++){
        if(a === 'first'){
            console.log(`${students[i].firstName} ${students[i].lastName} ${students[i].age} ${students[i].grade}`);

        }
        if(a === 'last'){
            console.log(`${students[i].lastName} ${students[i].firstName} ${students[i].age} ${students[i].grade}`);

        }
       }
       
    }

    printStudents('first',...studentArray);
    printStudents('last',...studentArray);

    function reverseStudent(student){
       const s = {...student};
       const {lastName, firstName, ...rest} = s;
       const copy = {
           firstName: lastName,
           lastName: firstName, 
           ...rest
        };
       return copy;
       
    }
    const j2 = reverseStudent(jay);
    printStudents('first', j2);
}());