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
        
    }
}