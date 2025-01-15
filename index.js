#!/usr/bin/env node

import boxen from 'boxen'
import { createSpinner } from 'nanospinner'
import colors from 'colors'
import util from 'util'
import link from 'terminal-link'

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function printSkill(languages , header) {
    const availableColors = shuffle(['yellow', 'red', 'blue', 'magenta']);

 
    let output = `${header}`.green + ' - ';
    languages.forEach((language, index) => {
        const randomColor = availableColors[Math.floor(Math.random() * availableColors.length)];
        output += language[randomColor];
        if (index !== languages.length - 1) {
            output += ', ';
        }
    });

    console.log(output);
}
async function main(){
    console.log(`

    
    

██╗░░██╗██╗  ████████╗██╗░░██╗███████╗██████╗░███████╗ ██╗██╗
██║░░██║██║  ╚══██╔══╝██║░░██║██╔════╝██╔══██╗██╔════╝ ██║██║
███████║██║  ░░░██║░░░███████║█████╗░░██████╔╝█████╗░░ ██║██║
██╔══██║██║  ░░░██║░░░██╔══██║██╔══╝░░██╔══██╗██╔══╝░░ ╚═╝╚═╝
██║░░██║██║  ░░░██║░░░██║░░██║███████╗██║░░██║███████╗ ██╗██╗
╚═╝░░╚═╝╚═╝  ░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚══════╝ ╚═╝╚═╝`.magenta)
    
    
    console.log()
    const spinner = createSpinner('Loading Taha\'s details').start()
    
    
    async function spinnerStart(){
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    
    await spinnerStart();
    
    spinner.success();
   
    console.log(`
    
█▀█ █▀▀ █▀█ █▀ █▀█ █▄░█ ▄▀█ █░░   █▀▄ █▀▀ ▀█▀ ▄▀█ █ █░░ █▀
█▀▀ ██▄ █▀▄ ▄█ █▄█ █░▀█ █▀█ █▄▄   █▄▀ ██▄ ░█░ █▀█ █ █▄▄ ▄█`.white);

    console.log()
    
    const githubLink = link('btw its awesome -> ','https://github.com/Syed-MuhammadTaha');
    const websiteLInk = link('cli is better, but here it is -> ','https://syedtahadev.vercel.app');
    const linkedinLink = link('network with me -> ','https://www.linkedin.com/in/syed-muhammad-taha-imam');
    console.log(`NAME    `.green + ' - ' + 'Syed Muhammad Taha Imam'.cyan);
    console.log(`STATUS  `.green + ' - ' + 'Machine Learning Engineer'.cyan);
    console.log(`GITHUB  `.green + ' - ' + `${githubLink}`.cyan);
    console.log(`WEBSITE `.green + ' - ' + `${websiteLInk}`.cyan);
    console.log(`LINKEDIN `.green + ' - ' + `${linkedinLink}`.cyan);


    console.log()

    console.log(`
    
█░░ ▄▀█ █▄░█ █▀▀ █░█ ▄▀█ █▀▀ █▀▀ █▀
█▄▄ █▀█ █░▀█ █▄█ █▄█ █▀█ █▄█ ██▄ ▄█`.white)

console.log()
printSkill(['Python', 'Javascript', 'C', 'Java'] , 'LANGUAGES   ');
printSkill(['Tensorflow', 'LangChain', 'Pytorch', 'React'] , 'FRAMEWORKS  ');
printSkill(['NLP', 'Computer Vision', , 'MLOps'] , 'EXPERIENCE  ');
printSkill(['RAG chatbot', 'AI Agents', 'LLM finetuning', 'Distributed training'] , 'Other       ');

console.log(`

█▀▄▀█ █▀▀ █▀ █▀ ▄▀█ █▀▀ █▀▀
█░▀░█ ██▄ ▄█ ▄█ █▀█ █▄█ ██▄`.white)

console.log()
console.log('Taha is seeking summer internships and looking forward for long term AI based project collaborations.'.magenta)
console.log()
}

main()