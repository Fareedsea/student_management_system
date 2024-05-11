#!/usr/bin/env node
import inquirer from "inquirer";
class student {
    id:string;
    name:string;
    courseEnrolled:string[];
    feesAmount:number;
    constructor (id:string, name:string, courseEnrolled:string[], feesAmount:number)
{
    this.id = id,
    this.name = name,
    this.courseEnrolled = courseEnrolled,
    this.feesAmount = feesAmount
}
}
let baseId = 10000;
let studentId:string = "";
let continueEnrolled:boolean = true;
let students:student[]= [];
do{
    let action = await inquirer.prompt({
        type : "list",
        name : "ans",
        message : "Please Select an option \n",
        choices : ["Enrolled a Student", "Show Student Status"]
    })
    if(action.ans == "Enrolled a Student"){
        let studentName = await inquirer.prompt({
            type: "input",
            name: "ans",
            message: "Pleas Enter Your Name : "
        })
        let trimedStudentName = (studentName.ans).trim().toLowerCase()
        let studentNameCheck = student.map(obj=> obj.name)
        if(studentNameCheck.includes(trimedStudentName)=== false){
        if (trimedStudentName != ""){
            baseId = "STID"+baseId
            console.log("\n\t Your Account has been created")
            console.log(`Welcom, ${trimedStudentName}!`);
            let course =await inquirer.prompt({
                type: "list",
                name: "ans",
                message: "Please Select Your Course ",
                choices: ["C.S", "Web 3.0", "A.I.", "I.T", "Crypto"]
            })
            let coursesFees = 0;
            switch(course.ans){
                case "C.S": coursesFees=5000;
                break;
                case(Web 3.0): coursesFees=4000;
                break;
                case "A.I": coursesFees=6000;
                break;
                case "I.T": coursesFees=7000;
                break;
                case "Crypto": coursesFees=3000;
                break;
            }
            let courseConfirm = await inquirer.prompt({
                type: "confirm",
                name: "ans",
                message: "Do your Want to Enroll in this course "
            })
            if(courseConfirm === true){
                let Student = new student(studentId, trimedStudentName, [course.ans], coursesFees, student.push(Student);
                console.log("You have Enrolled in this Course") );
            } else {
                console.log("Envalid Name");
            }
        }


        }
    } else if (action.ans=== "Show Student Status"){
        if (student.length!==0) {
            let studentNameCheck = students.map(e=> e.name)
            let selectStudent = await inquirer.prompt({
                type: "list",
                name: "ans",
                message: "Please Select Name",
                choices: studentNameCheck })
            let foundStudent = students.find(Student => Student.name === selectStudent.ans)
            console.log("Student Information");
            console.log(foundStudent);
            console.log("\n");            
        } else {
            console.log("Record is empty");}
        let userConfirm = await inquirer.prompt({
            type: "confirm",
            name: "ans",
            message: "Do you want to continue " })
        
        }
}