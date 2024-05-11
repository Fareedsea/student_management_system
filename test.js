var Student = /** @class */ (function () {
    function Student(id, name, age, grade) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    return Student;
}());
var StudentManagementSystem = /** @class */ (function () {
    function StudentManagementSystem() {
        this.students = [];
    }
    StudentManagementSystem.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    StudentManagementSystem.prototype.removeStudent = function (id) {
        this.students = this.students.filter(function (student) { return student.id !== id; });
    };
    StudentManagementSystem.prototype.getStudentById = function (id) {
        return this.students.find(function (student) { return student.id === id; });
    };
    StudentManagementSystem.prototype.getAllStudents = function () {
        return this.students;
    };
    return StudentManagementSystem;
}());
// Example usage
var studentSystem = new StudentManagementSystem();
var student1 = new Student(1, "Alice", 18, "A");
var student2 = new Student(2, "Bob", 17, "B");
studentSystem.addStudent(student1);
studentSystem.addStudent(student2);
console.log(studentSystem.getAllStudents());
var foundStudent = studentSystem.getStudentById(1);
if (foundStudent) {
    console.log("Found student:", foundStudent);
}
else {
    console.log("Student not found");
}
studentSystem.removeStudent(1);
console.log(studentSystem.getAllStudents());
