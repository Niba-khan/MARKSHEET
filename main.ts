#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold.underline("\n\tMarkSheet For class Ten\n"))

//Asking for roll Number:
let studentInformation = await inquirer.prompt([{
    name: "studentName",
    type: "input",
    message: chalk.red.italic("Enter your name")
},
{
    name: "fatherName",
    type: "input",
    message: chalk.yellow.italic("Enter your father Name")
},
]);

let roll = await inquirer.prompt(
  [
     {
       name: "number1",
       type: "input",
       message: chalk.bold.green.underline("Please Enter Your Roll Number and check your Marksheet")
     }
  ]
);

//Roll Number
let rollNum: number = roll.number1

//Chencking Roll Number:
if(rollNum == 12345){

     let marks = await inquirer.prompt([
        {
            name: "English",
            type: "number",
            message: chalk.bgYellowBright.red.italic("Please Enter Your English Number")
        },
        {         
            name: "Urdu",
            type: "number",
            message: chalk.bgRedBright.yellow.italic("Please Enter Your Urdu Number")
        },
        {
            name: "Islamiat",
            type: "number",
            message: chalk.bgGreenBright.red.italic("Please Enter Your Islamiat Number")
        },
        {         
            name: "Math",
            type: "number",
            message: chalk.bgBlackBright.red.italic("Please Enter Your Math Number")
        },
        {
            name: "Biology",
            type: "number",
            message: chalk.bgBlueBright.yellow.italic("Please Enter Your Biology Number")
        },
        {
            name: "Chemistry",
            type: "number",
            message: chalk.bgRedBright.black.italic("Please Enter Your Chemistry Number")
        },
        {
            name: "Physics",
            type: "number",
            message: chalk.bgCyanBright.black.italic("Please Enter Your physics Number")
        }
     ])
     //console.log(marks);
     //Extract Marks
     let english:number = marks.English
     let urdu:number = marks.Urdu
     let islamiat:number = marks.Islamiat
     let math:number = marks.Math
     let biology:number = marks.Biology
     let chemistry:number = marks.Chemistry
     let physics:number = marks.Physics

    //Percentage:
    let totalMarks:number = 700
    let obtainMarks:number = english + urdu + islamiat + math + biology + chemistry + physics
    let percentage = ((obtainMarks/totalMarks)*100)

    //answer
    console.log(chalk.yellow.underline.bold(`studentName: ${studentInformation.studentName}`))
    console.log(chalk.blue.underline.bold(`FatherName: ${studentInformation.fatherName}`))
    console.log(chalk.green.underline.bold("Marksheet for class Ten"))
    console.log(chalk.black.underline.bold(`English Marks = ${english} out of 100`))
    console.log(chalk.red.underline.bold(`Urdu Marks = ${urdu} out of 100`))
    console.log(chalk.cyan.underline.bold(`Islamiat Marks = ${islamiat} out of 100`))
    console.log(chalk.gray.underline.bold(`Math Marks = ${math} out of 100`))
    console.log(chalk.red.underline.bold(`Biology Marks = ${biology} out of 100`))
    console.log(chalk.magenta.underline.bold(`Chemistry Marks = ${chemistry} out of 100`))
    console.log(chalk.black.underline.bold(`Chemistry Marks = ${physics} out of 100`))
    console.log(chalk.bgYellowBright.red.bold(`Obtain Marks = ${obtainMarks}  Total Marks ${totalMarks}`))
    console.log(chalk.bgMagentaBright.black.bold(`Percentage = ${percentage}%`))
    if (percentage >=80){
        console.log(chalk.bgRedBright.yellow.bold("passed: Grade A+"));
    } else if(percentage >=70){
        console.log(chalk.bgRedBright.yellow.bold("passed: Grade A"));
    }else if (percentage >=60){
        console.log(chalk.bgRedBright.yellow.bold("passed: Grade C"));
    }else if(percentage >=50){
        console.log(chalk.bgRedBright.yellow.bold("passed: Grade D"));
    }else {
        console.log(chalk.bgBlueBright.white.bold("Fail"));
    }
} 
else{
    console.log(chalk.bgMagenta.bold("Invalid Roll Number"))
}