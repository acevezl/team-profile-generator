const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const Employee = require('../lib/Employee.js');
const Manager = require('../lib/Manager.js');
const Engineer = require('../lib/Engineer.js');
const Intern = require('../lib/Intern.js');

function Team() {
    this.name;
    this.members = [];
}

let employeePrompts = [
    {
        type: 'text',
        name: 'employeeName',
        message: `Enter the employee's full name: `
    },
    {
        type: 'text',
        name: 'employeeEmail',
        message: `Enter the employee's e-mail address: `
    }
];

let managerPrompts = [
    {
        type: 'text',
        name: 'officeNumber',
        message: `Enter the Manager's office number: `,
        default: '###-###-####'
    }
];

let engineerPrompts = [
    {
        type: 'text',
        name: 'github',
        message: `Enter the Engineer's github handle: `,
        default: ''
    }
];

let internPrompts = [
    {
        type: 'text',
        name: 'school',
        message: `Enter the Intern's school name: `,
        default: ''
    }
];

Team.prototype.addEmployee = function(role){
    inquirer
    .prompt(
        employeePrompts
    )
    .then(answers => {
        if (role === 'Manager') {
            inquirer.prompt(managerPrompts)
            .then (managerAnswers => {
                let manager = new Manager(this.members.length, answers.employeeName, answers.employeeEmail, managerAnswers.officeNumber);
                this.members.push(manager);
                this.askToAddMore();
            })
        } else if (role === 'Engineer') {
            inquirer.prompt(engineerPrompts)
            .then (engineerAnswers => {
                let engineer = new Engineer(this.members.length, answers.employeeName, answers.employeeEmail, engineerAnswers.github);
                this.members.push(engineer);
                this.askToAddMore();
            })
        } else {
            inquirer.prompt(internPrompts)
            .then (internAnswers => {
                let intern = new Intern(this.members.length, answers.employeeName, answers.employeeEmail, internAnswers.school);
                this.members.push(intern);
                this.askToAddMore();
            })
        }
    }).catch(error => {
        if(error.isTtyError) {
            console.log('Prompt couldn\'t be rendered')
        } else {
            console.log(error);
        }
    });
}

Team.prototype.askToAddMore = function() {
    inquirer
    .prompt({
        type: 'list',
        name: 'continueAdding',
        message: `Do you want to add antoher employee?`,
        choices: ['Yes','No']
    })
    .then(({continueAdding}) => {
        if (continueAdding === 'Yes') {
            console.log(`\n*** Adding another employee ***\n`);
            this.addTeamMembers();
        } else {
            this.exportTeamHTML();
        }
    });
}

Team.prototype.addTeamMembers = function() {
    inquirer
    .prompt ({
        type: 'list',
        message: `Select the role of employee #${this.members.length+1}:`,
        name: 'employeeRole',
        choices: ['Manager','Engineer','Intern']
    })
    .then(({employeeRole}) => {
        this.addEmployee(employeeRole);
    });
}

Team.prototype.initializeTeam = function () {
    console.log(`\n*** Welcome to the Team Builder! ***\n`);

    inquirer
    .prompt({
        type: 'text',
        name: 'name',
        message: 'Please enter Team Name:'
    })
    .then(({ name }) => {
        this.name = name;
        console.log(`\nThank you. Now complete the following prompts:\n`);
        this.addTeamMembers(name);
    });
}

Team.prototype.exportTeamHTML = function() {
    let htmlBody = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
    <link href="../dist/assets/css/styles.css" rel="stylesheet">
    <title>Team Name</title>
</head>
<body>
    <nav class="navbar navbar-primary bg-primary sticky-top">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">${this.name}</span>
        </div>
    </nav>
    <section id="team" class="row">
    `;

    this.members.forEach((member)=> {
        let icon = 'bolt';

        if (member.role === 'Engineer') {
            icon = 'lightbulb';
        } else if (member.role === 'Intern') {
            icon = 'bug';
        }

        htmlBody += `
        <div class="card">
            <img src="../dist/assets/images/card-background.png" class="card-img-top" alt="${member.name}">
            <div class="card-img-overlay">
                <h4 class="card-title">${member.name}</h4>
                <h5><span class="oi oi-${icon}"></span>${member.role}</h5>
            </div>
            <div class="card-body">
              <p class="card-text">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${member.id}</li>
                    <li class="list-group-item"><span class="oi oi-envelope-closed"></span> <a href="mailto:${member.email}">${member.email}</a></li>`;
        
                    if (member.role === 'Manager') {
                        htmlBody += `
                    <li class="list-group-item"><span class="oi oi-phone"></span> <a href="tel:${member.officeNumber}">${member.officeNumber}</a></li>`;
                    } else if (member.role === 'Engineer') {
                        htmlBody += `
                    <li class="list-group-item"><span class="oi oi-fork"></span> <a href="tel:${member.github}">${member.github}</a></li>`;
                    } else if (member.role === 'Intern') {
                        htmlBody += `
                    <li class="list-group-item"><span class="oi oi-book"></span> <a href="tel:${member.school}">${member.school}</a></li>`;
                    }

        htmlBody += `
                  </ul>
              </p>
            </div>
        </div>
        `;
    });

    htmlBody += `
    </section>
</body>
</html>
    `;

    fs.access(path.join(__dirname,'../dist'), function(error) {
        if (error) {
            fs.mkdir(path.join(__dirname,'../dist'), function(err) {
                console.log(err);
            });
        } 
    });

    fs.writeFile(path.join(__dirname,'../dist/index.html'), htmlBody, function(err) {
        if (err) {
          return console.log(err);
        } else {
            return console.log(`The team's homepage is on the /dist folder`);
        }
    
    });
}

module.exports = Team;