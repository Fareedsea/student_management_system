#!/usr/bin/env node
import inquirer from "inquirer";
class student {
    id;
    name;
    courseEnrolled;
    feesAmount;
    constructor(id, name, courseEnrolled, feesAmount) {
        this.id = id,
            this.name = name,
            this.courseEnrolled = courseEnrolled,
            this.feesAmount = feesAmount;
    }
}
let baseId = 10000;
let studentId = "";
let continueEnrolled = true;
let students = [];
do {
    let action = await inquirer.prompt({
        type: "list",
        name: "ans",
        message: "Please Select an option \n",
        choices: ["Enrolled a Student", "Show Student Status"]
    });
    if (action.ans == "Enrolled a Student") {
        let studentName = await inquirer.prompt({
            type: "input",
            name: "ans",
            message: "Pleas Enter Your Name : "
        });
        let trimedStudentName = (studentName.ans).trim().toLowerCase();
        let studentNameCheck = student.map(obj => obj.name);
    }
} while ();
