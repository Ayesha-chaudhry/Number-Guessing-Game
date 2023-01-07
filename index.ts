#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";



const sleep = (ms = 2000) => new Promise((res) => setTimeout(res, ms));

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(`Let's start the Game !!!`);
    await sleep();
    rainbowTitle.stop();
}
// welcome();
let playerLife = 3;

async function askQuestion() {

    let randomNumber: number = Math.floor(Math.random() * 10 + 1);
    
    do{
        playerLife--;
        console.log(chalk.rgb(243, 156, 18)(`Player life left ${playerLife}`));
        var que = await inquirer
    .prompt([
        {
            type: "number",
            name: "user_num",
            message: chalk.rgb(250, 128, 114)("Select any number between 1 - 10"),
            validate: (answers: number) => {
                if(isNaN(answers)){
                    return chalk.red('Please enter a valid number!');
                }
                return true;
            }
        }
    ]);

    if(que.user_num === randomNumber){
        console.log(chalk.green(`Congratulation! you guess ${que.user_num} the right number`));
    }
    else if(que.user_num < randomNumber){
        console.log(chalk.redBright(`your number ${que.user_num} is less than your guess number. Try Again!`));
    }
    else if(que.user_num > randomNumber){
        console.log(chalk.redBright(`Your number ${que.user_num} is greater than your guess number. Try Again`));
    }    
    }
    while(playerLife > 0 && randomNumber !== que.user_num)
    if(playerLife == 0 && randomNumber !== que.user_num){
        console.log(chalk.redBright("Game Over!!"));
    }
}

async function  startAgain() {
    do{
        console.clear();
        await welcome();
        playerLife = 3;
        await askQuestion();
        var restart = await inquirer.prompt([
            {
                type: "input",
                name: 'start_again',
                message: chalk.rgb(250, 128, 114)("Do you want to restart the game? Press Y or N: ")
            }
        ])    
    }
    while(restart.start_again === 'y' || restart.startAgain === 'Y' || restart.start_again === 'YES' || restart.start_again === 'yes' || restart.start_again === 'Yes');
}
startAgain();