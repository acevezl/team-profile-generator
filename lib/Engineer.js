const Employee = require('../lib/Employee.js');

class Engineer extends Employee {
    constructor(id=0, name='', email, github) {
        super(id,name,email);
        this.role = 'Engineer';
        this.github = github;
    }

    getGitHub() {
        return this.github;
    }

    // I absolutely disagree with the method below, but it was required per the assignment.
    // The best practice would be to have this.role = 'Engineer' on the constructor, 
    // and not override the method - less code, cleaner, easier to update 
    // (no need to go and fix every overriden method if things change)
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;