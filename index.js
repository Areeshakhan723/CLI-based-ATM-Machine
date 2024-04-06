import inquirer from "inquirer";
let currentBalance = 1000;
let mypin = 5555;
let pincode = await inquirer.prompt([
    {
        name: "pin",
        message: "Please enter your pin code:",
        type: "number",
    },
]);
if (pincode.pin === mypin) {
    console.log("correct pin code!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select any one option:",
            type: "list",
            choices: ["withdraw", "checkbalance"]
        }
    ]);
    // console.log(operationAns)
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "please enter the amount you want to withdraw:",
                type: "list",
                choices: ["1000", "900", "800", "700", "600", "500", "200"],
            }
        ]);
        // console.log(amountAns.amount);
        if (amountAns.amount > currentBalance) {
            console.log("out of range");
        }
        else if (currentBalance -= amountAns.amount) {
            console.log(`your remaining balance: ${currentBalance}`);
        }
    }
    else if (operationAns.operation === "checkbalance") {
        console.log(`Your current balance is: ${currentBalance}`);
    }
}
else {
    console.log("wrong pin code!");
}
;
