#! /usr/bin/env node

import inquirer from "inquirer";

//printing a Wellcome message
console.log("\n\tWellcome To\ 'Code with Sharooq\' - CLI Simple Calculator\n");

let answers = await inquirer.prompt([
{message: "Enter First Number", type: "number", name: "firstNumber"},
{message:"Enter Secound Number", type: "number", name : "secoundNumber"},
{
    message: "select one opetator to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
},
]);

if (answers.operator === "Addition") {
    console.log(answers.firstNumber + answers.secoundNumber);
} else if (answers.operator === "Subtraction"){
    console.log(answers.firstNumber - answers.secoundNumber);
} else if (answers.operator === "Multiplication") {
    console.log(answers.firstNumber * answers.secoundNumber);
} else if (answers.operator === "Division"){
    console.log(answers.firstNumber / answers.secoundNumber);
} else {
    console.log("Please select valid operator")
}