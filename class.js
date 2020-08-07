class student {
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "kolimunnesa school"
    }
}

const student1 = new student(12, "Suvo");
const student2 = new student(22, "Mahiya");
const student3 = new student(23, "bappi");
console.log(student1, student2, student3);