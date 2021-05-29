const inquirer = require('inquirer');
const Manager = require('../lib/Manager.js');
const Engineer = require('../lib/Engineer.js');
const Intern = require('../lib/Intern.js');

function init() {
    // First we create a team object which will contain the team name and the team members (employees)
    let team = {
        name: '',
        memebers: []
    }

    console.log(`Welcome to the Team Builder! \n`);
    // Now we start asking questions to the user, first ask for the team name
    inquirer
    .prompt({
        type: 'text',
        name: 'name',
        message: `Please enter Team Name:`
    })
    .then(({ name }) => {
        team.name = name;
    });

    // Then we ask for the manager, like, not in a Karen way but, you know what I mean...
    console.log(`Thank you. Now complete the following prompts:\n`);
    // Add the manager to the members array
    team.memebers[0] = askForManager();

    // Then we ask for the team members, we'll ask for each employee's information, and then ask the
    // user if they want to add another member, until they say No.
    // Obvs we'll have to use some if/then statements to ask for School Vs. GitHub depending on their role.
    let anotherTeamMember;
    let employeeCounter;
    do {
        employeeCounter++;
        team.memebers[employeeCounter] = askForEmployee(employeeCounter);
        
        // Ask if they want to add another team member
        inquirer
        .prompt({
            type: 'list',
            name: 'addMore',
            message: `Do you want to enter another team member?`,
            choices: ['Yes','No']
        })
        .then(({ addMore }) => {
            anotherTeamMember = addMore ? true : false;
        });

    } while (anotherTeamMember = true);

    console.log(`${team}`);
}

function askForManager() {
    let manager = new Manager();

    // Ask for Manager's name
    inquirer
    .prompt({
        type: 'text',
        name: 'name',
        message: `First, enter the Manager's name: `
    })
    .then(({name}) => {
        manager.name = name;
    });

    // Ask for Manager's ID
    inquirer
    .prompt({
        type: 'number',
        name: 'id',
        message: `Enter Manager's employee ID: `
    })
    .then(({id}) => {
        manager.id = id;
    });

    // Ask for Manager's e-mail adress
    inquirer
    .prompt({
        type: 'text',
        name: 'email',
        message: `Enter Manager's e-mail address: `
    })
    .then(({email}) => {
        manager.name = email;
    });

    // Ask for Manager's office number
    inquirer
    .prompt({
        type: 'text',
        name: 'phone',
        default: '###-###-####',
        message: `Enter Manager's phone number: `
    })
    .then(({phone}) => {
        manager.name = phone;
    });

    return manager;
}

function askForEmployee(employeeIndex) {

    // Ask for the employee name
    let employeeName = '';
    inquirer
    .prompt({
        type: 'text',
        name: 'name',
        message: `Enter the name of Employee # ${employeeIndex}: `    
    })
    .then(({ name }) => {
        employeeName = name;
    });

    // Ask for the employee ID
    let employeeId = 0;
    inquirer
    .prompt({
        type: 'number',
        name: 'id',
        message: `Enter the ID of Employee # ${employeeIndex}: `    
    })
    .then(({ id }) => {
        employeeId = id;
    });

    // Ask for the employee e-mail
    let employeeEmail = '';
    inquirer
    .prompt({
        type: 'text',
        name: 'email',
        message: `Enter the e-mail of Employee # ${employeeIndex}: `    
    })
    .then(({ email }) => {
        employeeEmail = email;
    });

    // Ask for the employee role
    let employeeRole = 'Employee';
    inquirer
    .prompt({
        type: 'list',
        name: 'role',
        message: `Select the role for this employee:`,
        choices: ['Engineer','Intern']
    })
    .then(({ role }) => {
        employeeRole = role;
    });

    if (employeeRole === 'Engineer') {
        let employeeGithub = '';
        inquirer
        .prompt({
            type: 'text',
            name: 'github',
            message: `Enter the GitHub handle for this employee:`,
        })
        .then(({ github }) => {
            employeeGithub = github;

            let engineer = new Engineer(employeeId, employeeName, employeeMail, employeeGithub);
            return engineer;
        });
    } else {
        let employeeSchool = '';
        inquirer
        .prompt({
            type: 'text',
            name: 'school',
            message: `Enter the GitHub handle for this employee:`,
        })
        .then(({ school }) => {
            employeeSchool = school;

            let intern = new Intern(employeeId, employeeName, employeeMail, employeeSchool);
            return intern;
        });
    }
}