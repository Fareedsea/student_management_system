#!/usr/bin/env node
import inquirer from "inquirer";
class Student {
    id;
    name;
    courseEnrolled;
    feesAmount;
    constructor(id, name, courseEnrolled, feesAmount) {
        this.id = id;
        this.name = name;
        this.courseEnrolled = courseEnrolled;
        this.feesAmount = feesAmount;
    }
}
let baseId = 10000;
let studentId = "";
let continueEnrolled = true;
let students = [];
(async () => {
    do {
        let action = await inquirer.prompt({
            type: "list",
            name: "ans",
            message: "Please Select an option \n",
            choices: ["Enroll a Student", "Show Student Status"]
        });
        if (action.ans === "Enroll a Student") {
            let studentName = await inquirer.prompt({
                type: "input",
                name: "ans",
                message: "Please Enter Your Name : "
            });
            let trimmedStudentName = (studentName.ans).trim().toLowerCase();
            let studentNameCheck = students.map(obj => obj.name);
            if (!studentNameCheck.includes(trimmedStudentName)) {
                if (trimmedStudentName !== "") {
                    baseId++;
                    studentId = "STID" + baseId;
                    console.log("\n\t Your Account has been created");
                    console.log(`Welcome, ${trimmedStudentName}!`);
                    let course = await inquirer.prompt({
                        type: "list",
                        name: "ans",
                        message: "Please Select Your Course ",
                        choices: ["C.S", "Web 3.0", "A.I.", "I.T", "Crypto"]
                    });
                    let coursesFees = 0;
                    switch (course.ans) {
                        case "C.S":
                            coursesFees = 5000;
                            break;
                        case "Web 3.0":
                            coursesFees = 4000;
                            break;
                        case "A.I.":
                            coursesFees = 6000;
                            break;
                        case "I.T":
                            coursesFees = 7000;
                            break;
                        case "Crypto":
                            coursesFees = 3000;
                            break;
                    }
                    let courseConfirm = await inquirer.prompt({
                        type: "confirm",
                        name: "ans",
                        message: "Do you Want to Enroll in this course "
                    });
                    if (courseConfirm.ans === true) {
                        let newStudent = new Student(studentId, trimmedStudentName, [course.ans], coursesFees);
                        students.push(newStudent);
                        console.log("You have Enrolled in this Course");
                    }
                    else {
                        console.log("Invalid Name");
                    }
                }
            }
        }
        else if (action.ans === "Show Student Status") {
            if (students.length !== 0) {
                let studentNameCheck = students.map(e => e.name);
                let selectStudent = await inquirer.prompt({
                    type: "list",
                    name: "ans",
                    message: "Please Select Name",
                    choices: studentNameCheck
                });
                let foundStudent = students.find(Student => Student.name === selectStudent.ans);
                if (foundStudent) {
                    console.log("Student Information");
                    console.log(foundStudent);
                    console.log("\n");
                }
                else {
                    console.log("Student not found");
                }
            }
            else {
                console.log("Record is empty");
            }
        }
        let userConfirm = await inquirer.prompt({
            type: "confirm",
            name: "ans",
            message: "Do you want to continue "
        });
        if (userConfirm.ans === false) {
            continueEnrolled = false;
        }
    } while (continueEnrolled);
})();
