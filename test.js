// class Student {
//     constructor(
//         public id: number,
//         public name: string,
//         public age: number,
//         public grade: string
//     ) {}
// }
export {};
// class StudentManagementSystem {
//     private students: Student[] = [];
//     addStudent(student: Student) {
//         this.students.push(student);
//     }
//     removeStudent(id: number) {
//         this.students = this.students.filter(student => student.id !== id);
//     }
//     getStudentById(id: number): Student | undefined {
//         return this.students.find(student => student.id === id);
//     }
//     getAllStudents(): Student[] {
//         return this.students;
//     }
// }
// // Example usage
// const studentSystem = new StudentManagementSystem();
// const student1 = new Student(1, "Alice", 18, "A");
// const student2 = new Student(2, "Bob", 17, "B");
// studentSystem.addStudent(student1);
// studentSystem.addStudent(student2);
// console.log(studentSystem.getAllStudents());
// const foundStudent = studentSystem.getStudentById(1);
// if (foundStudent) {
//     console.log("Found student:", foundStudent);
// } else {
//     console.log("Student not found");
// }
// studentSystem.removeStudent(1);
// console.log(studentSystem.getAllStudents());
