#! /usr/bin/env node
import inquire from "inquirer";
let myBalance = 10000;
let myPin = 112233;
let pinAnswer = await inquire.prompt({
    name: "pin",
    message: "Enter your pin number?",
    type: "number",
});
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!");
    let operationAns = await inquire.prompt([
        {
            name: "operation",
            message: "Please select option.",
            type: "list",
            choices: ["withdraw", "Check balance", "Fast cash"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquire.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log(`${"Your remaining balance is:"}` + `${myBalance}`);
        }
        else if (amountAns.amount > myBalance) {
            console.log("INSUFFICIENT BALANCE !");
        }
    }
    else if (operationAns.operation === "Check balance") {
        console.log(`${"Your balance is"}` + `${myBalance}`);
    }
    if (operationAns.operation === "Fast cash") {
        let fastCashAns = await inquire.prompt([
            {
                name: "fastCash",
                message: "Select your amount",
                type: "list",
                choices: ["1000", "3000", "5000", "8000", "10000"],
            },
        ]);
        myBalance -= fastCashAns.fastCash;
        console.log(`${"Your remaining balance is:"}` + `${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code");
}
console.log(pinAnswer.pin);
