const Employee = require('../lib/Employee.js');

class Intern extends Employee {
    constructor(id=0, name='', email, school) {
        super(id,name,email);
        this.role = 'Intern';
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    // I absolutely disagree with the method below, but it was required per the assignment.
    // The best practice would be to have this.role = 'Intern' on the constructor, 
    // and not override the method - less code, cleaner, easier to update 
    // (no need to go and fix every overriden method if things change)
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;